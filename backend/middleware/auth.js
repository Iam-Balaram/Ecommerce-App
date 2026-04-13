import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';


const authUser = asyncHandler( async (req, res, next) => {

    const { token } = req.headers;

    if ( !token ){
        throw new ApiError(401, "you are not authorized, Please Try again")
    }

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next();
        
    } catch (error) {
        throw new ApiError(401, "you are not authorized, Please Try again") 
    }

})

export default authUser;