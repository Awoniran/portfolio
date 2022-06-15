import { Request,Response, NextFunction,RequestHandler } from "express"
import response from "./resonse"

export const HomeController=(req:Request,res:Response)=>{
response(res,200,`Hello, I'm Myke Awoniran`)
}

export const HttpErrorHandler=(err:Error,req:Request, res:Response)=>{
response(res,500,err.message)
}

