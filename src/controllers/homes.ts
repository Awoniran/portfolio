import { Request,Response, NextFunction,RequestHandler } from "express"
import response from "./response"
import Email from "./email"

export const HomeController=(req:Request,res:Response)=>{
response(res,200,`Hello, I'm Myke Awoniran`)
}

export const HttpErrorHandler=(err:Error,req:Request, res:Response)=>{
response(res,500,err.message)
}
export const HttpSendMail=(req:Request,res:Response)=>{
    try{
        new Email(req.body).send()

    }catch(err){
        return response(res,500,'there is an error sending the email')
    }
}

