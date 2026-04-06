import jwt from "jsonwebtoken";
import { ApiError }from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";



const adminAuth =asyncHandler( async (req, res, next)=>{

        const { token }= req.headers;
        
        if (!token){
            throw new ApiError(401, "you are not authorized")
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            throw new ApiError(401, "you are not authorized")
        }     

    next();
});

export default adminAuth;