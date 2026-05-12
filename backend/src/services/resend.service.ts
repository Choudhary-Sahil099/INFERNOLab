import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",

    to: "sahilchoudhary35689@gmail.com",

    subject: `Portfolio Contact From ${name}`,

    html: `
      <h2>New Portfolio Message</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  });
};