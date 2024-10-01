import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const WEB_URL = process.env.WEB_URL;
export const ACCESS_TOKEN_EXPIRE_IN = 60 * 60 * 24;
export const RESEND_API_KEY = process.env.RESEND_API_KEY;
export const MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;
export const MAIL_FROM = process.env.MAIL_FROM;
