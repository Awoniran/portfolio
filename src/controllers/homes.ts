import { Request,Response, NextFunction,RequestHandler } from "express"
import response from "./response"
import Email from "./email"

export const HomeController=(req:Request,res:Response)=>{
response(res,200,`Hello, I'm Myke Awoniran`)
}

export const HttpErrorHandler=(err:Error,req:Request, res:Response)=>{
response(res,500,err.message)
}

export const HttpSendMail=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await Email(req.body)
        response(res, 200,'email sent successfully')
    }catch(err){
        return response(res,500,'check your internet connection and try again')
    }
}

