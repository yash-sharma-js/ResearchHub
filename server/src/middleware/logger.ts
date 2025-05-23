import { Request, Response, NextFunction } from "express";
export const logger = (req:Request,res:Response,next:NextFunction)=>{
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    next();
}