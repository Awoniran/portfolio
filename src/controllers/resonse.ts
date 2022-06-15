import { Response } from "express";

function response(res:Response,statusCode:number,data:Object){
  const status= `${statusCode}`.startsWith('2')?'success':'fail'
    res.status(statusCode).json({
   status,
   data
    })
}

export default response