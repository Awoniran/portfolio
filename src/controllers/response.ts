import { Response } from "express";

function response(res:Response,statusCode:number,data:Object){
  const _status= `${statusCode}`.startsWith('2')?'success':'fail'
    res.status(statusCode).json({
   _status,
   data
    })
}

export default response