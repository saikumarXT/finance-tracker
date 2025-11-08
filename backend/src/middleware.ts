import jwt, { type JwtPayload } from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./config.js";
import type { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  console.log("Received Header:", authHeader);


  if (!authHeader) {
    return res.status(400).json({ message: "No Authorization header" });
  }

  try {
    const token = authHeader.split(" ")[1];
    if (token) {
      const user = jwt.verify(token as string, JWT_SECRET_KEY);
      req.userId  = (user as JwtPayload).Id;
      next(); 
    }
  } catch (err) {
    res.status(200).json({
      message: err,
    });
  }
};
