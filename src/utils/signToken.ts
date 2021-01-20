import jwt from "jsonwebtoken";
import { SECRET } from "~/config";

export const signJWT = (id: string) => `Bearer ${jwt.sign({ id }, SECRET)}`;
