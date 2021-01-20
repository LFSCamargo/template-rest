import { Request } from "express";
import { IUser } from "~/modules/user/model";

export type RequestWithContext = Request & {
  user?: IUser;
};
