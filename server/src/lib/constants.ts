import dotenv from "dotenv";

dotenv.config();

export const WEB_URL = process.env.WEB_URL;
export const ACCESS_TOKEN_EXPIRE_IN = 10;
export const REFRESH_TOKEN_EXPIRE_IN = 60 * 60 * 24 * 30;
export const RESEND_API_KEY = process.env.RESEND_API_KEY;
export const MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;
export const MAIL_FROM = process.env.MAIL_FROM;
export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = parseInt(process.env.REDIS_PORT);
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
