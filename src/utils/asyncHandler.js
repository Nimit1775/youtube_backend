import { promises } from "fs"

const asyncHandler = (requestHandler) => {


    (req, res, next) => {

        promise.resolve(requestHandler(req , res , next )).catch((err) => next  )
    }
}


export {asyncHandler}









// ANOTHER WAY :-

/*
const asyncHandler =  (fn) =>  async(req , res , next ) => {
    try {
        await fn(req , res , next)

    }catch (error) {
        res.status(err.code ||  500).json({
            sucess : false,
            message : err.message || "Internal Server Error"

    }
}*/