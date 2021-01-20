import * as R from "ramda";
import { Request, Response } from "express";
import User from "./model";
import { RequestWithContext } from "~/typings";
import { authenticate, signJWT } from "~/utils";

export default {
  me: async (req: RequestWithContext, res: Response) => {
    return res.status(200).json(R.omit(["password"], req.user));
  },
  login: async (req: RequestWithContext, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = authenticate(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    return res.status(200).json({
      token: signJWT(email),
    });
  },
  register: async (req: Request, res: Response) => {
    const { email, password, name, birthDate, picture } = req.body;

    const user = new User({
      email,
      password,
      name,
      birthDate,
      picture,
    });

    await user.save();

    return res.status(200).json({
      token: signJWT(email),
    });
  },
};
