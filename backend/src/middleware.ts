import jwt, { type JwtPayload } from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./config.js";
import type { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  try {
    if (token) {
      const user = jwt.verify(token as string, JWT_SECRET_KEY);
      req.body.userId = (user as JwtPayload).Id;
      next();
    }
  } catch (err) {
    res.status(200).json({
      message: err,
    });
  }
};
