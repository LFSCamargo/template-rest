import { Response, Request, NextFunction } from "express";
import { ObjectSchema } from "yup";

/** @description - This middleware validates a yup schema and throws an error if the request body is invalid */
export const validateBody = <T extends ObjectSchema<any>>(
  resourceSchema: T
) => async (req: Request, res: Response, next: NextFunction) => {
  const resource = req.body;
  try {
    await resourceSchema.validate(resource, {
      abortEarly: false,
    });
    next();
  } catch (e) {
    res.status(400).json({
      errors: e.errors,
      message: "Bad request, the request body is invalid",
    });
  }
};
