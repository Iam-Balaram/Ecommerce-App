import userModel from "../models/userModels.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// add products to user cart
const addToCart = asyncHandler( async (req, res) => {

        const { userId, itemId, size} = req.body;

        if(!userId || !itemId || !size){
            throw new ApiError(400, "Please provide all the required fields")
        }
        
        const userData = await userModel.findById(userId);

        if (!userData){
            throw new ApiError(404, "User not found")
        }

        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        await userModel.findByIdAndUpdate(userId, {cartData})
        return res.status(200).json(
            new ApiResponse(200, { cartData }, "Product added to cart successfully")
        );
});

// update user cart
const updateCart = asyncHandler( async (req, res) => {
        const { userId, itemId, size, quantity } = req.body;

        if (!userId || !itemId || !size || quantity === undefined) {
            throw new ApiError(400, "Please provide all the required fields")
        }
        const userData = await userModel.findById(userId);
        if (!userData){
            throw new ApiError(404, "User not found")
        }

        let cartData = await userData.cartData;

        if (!cartData[itemId] || !cartData[itemId][size]) {
            throw new ApiError(404, "Product not found in cart")
        }

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, {cartData})
        return res.status(200).json(
            new ApiResponse(200, { cartData }, "Cart updated successfully")
        );

} )
// get user cart data
const getUserCart = asyncHandler(async (req, res) => {
    
    const { userId } = req.body;
        if (!userId) {
            throw new ApiError(400, "Please provide userId")
        }
        const userData = await userModel.findById(userId);
        if (!userData){
            throw new ApiError(404, "User not found")
        }

        let cartData = await userData.cartData;

       return  res.status(200).json(
            new ApiResponse(200, { cartData }, "Cart data retrieved successfully")
        );


} )

export { addToCart, updateCart, getUserCart }