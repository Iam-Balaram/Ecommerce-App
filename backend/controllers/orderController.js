import orderModel from "../models/orderModels.js";
import userModel from "../models/userModels.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"


//Placing order using COD Method

const placeOrder = asyncHandler( async (req, res) => {
     const { userId, items, amount, address } = req.body;

     if (!userId || !items || !amount || !address){
        throw new ApiError(400, "All fields are required")
     }

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        return res.status(201).json(
            new ApiResponse(201, newOrder, "Order placed successfully")
        );
    
}
);
// Placing order using Stripe Payment Gateway
const placeOrderStripe = asyncHandler( async (req, res) => {
})

// Placing order using Razorpay Payment Gateway
const placeOrderRazorpay = async (req, res) => {

}


// All Order data for Admin panel

const allOrders = asyncHandler( async (req, res) => {
    
        const orders = await orderModel.find({});

        if(!orders){
            throw new ApiError(500, "Failed to retrieve orders")
        }

        return res.status(200).json(
            new ApiResponse(200, orders, "Orders retrieved successfully")
        );

})



// User Order data for Frontend

const userOrders = asyncHandler( async (req, res) => {
        const { userId } = req.body;

    if(!userId){
        throw new ApiError(400, "User ID is required");
    }

    const orders = await orderModel.find({ userId });

    return res.status(200).json(
        new ApiResponse(200, { orders }, "Orders retrieved successfully")
    );
});


//update order status from Admin panel
const updateStatus = async (req, res) => {

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }    