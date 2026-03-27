import {v2 as cloudinary} from "cloudinary";
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import ProductModel from "../models/productModels.js";


// function for add product
const addProduct = asyncHandler( async (req,res)=>{
    const {name, description, price, category, subCategory, sizes, bestSeller} = req.body
    
    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imageUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url
            })
        )

        const product = new ProductModel({
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true: false,
            image: imageUrl,
            date: Date.now()
        });
        
        try {
            await product.save();
        } catch (error) {
            throw new ApiError(500, "Failed to save product");
        }

    return res.status(201).json(
        new ApiResponse(201, product, "Product added successfully")
    );


}) 


// function for list product
const listProducts = async (req, res) => {

}

// function for remove product
const removeProduct = async (req, res) => {

}

// function for single product info
const singleProduct = async (req, res) => {

}

export {addProduct, listProducts, removeProduct, singleProduct};