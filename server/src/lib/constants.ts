import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const WEB_URL = process.env.WEB_URL;
export const ACCESS_TOKEN_EXPIRE_IN = 60 * 60 * 24;
