import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModels.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError }from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Route for userLogin
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if (!user){
        throw new ApiError(400, "User doesn't exists")
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch){
        throw new ApiError(400, "Invalid Credentials")
    }
    const token = createToken(user._id);

    return res.status(200).json(
        new ApiResponse(200, {token}, "Login Success")
    )
});


//Route for userRegister
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    // Checking all fields are provided or not
    if (!name || !email || !password){
        throw new ApiError(400, "Please Enter all the fields")
    }


    //checking user already exists or not
    const exists = await userModel.findOne({email});
    if(exists){
        throw new ApiError(400, "User already exists")
    }

    //validating user format and strong password
    if (!validator.isEmail(email)){
        throw new ApiError(400, "Please Enter a valid Email")
    }

    //strong password check
    if (password.length < 8){
        throw new ApiError(400, "Please Enter a Strong Password")
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    })  

    const user = await newUser.save()

    const token = createToken(user._id)

    return res.status(201).json(
        new ApiResponse(201, {token}, "User Registered Successfully")
    )   
})


//Rotue for admin login
const adminLogin = asyncHandler( async (req, res) => {

        const {email, password} = req.body;

        if (!email || !password){
            throw new ApiError(400, "Please Enter all the fields")
        }

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            return res.status(200).json(
                new ApiResponse(200, {token}, "Admin Login Success")
            )
        }else {
            throw new ApiError(400, "Invalid Credentials")
        }  
    
})

export { loginUser, registerUser, adminLogin }; 