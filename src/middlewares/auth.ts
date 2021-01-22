import jwt from "jsonwebtoken";
import * as R from "ramda";
import { RequestWithContext } from "~/typings";
import { Response, NextFunction } from "express";
import User from "~/modules/user/model";
import { SECRET } from "~/config";

/** @description - Parses the token and adds the user to the request */
export const authorizateUser = async (
  req: RequestWithContext,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization = "" } = req.headers;
  try {
    if (!authorization) {
      res.status(401).json({
        message: "Not Authorized",
      });
      return;
    }
    if (!R.includes("Bearer ", authorization)) {
      res.status(401).json({
        message: "Invalid Token",
      });
      return;
    }
    const decoded: any = jwt.verify(authorization.substring(7), SECRET);
    const user = await User.findOne({ email: decoded.id });
    if (!user) {
      res.status(401).json({
        message: "Not Authorized",
      });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
