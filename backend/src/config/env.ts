import dotenv from "dotenv";

dotenv.config();

export const env = {
  resendApiKey: process.env.RESEND_API_KEY,
};