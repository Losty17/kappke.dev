import { createTransport } from "nodemailer";

export async function POST(request: Request) {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const data = await request.json();

  const { name, email, country, phone, refer, subject, message } = data;

  await transporter.sendMail({
    to: "vinikappke@gmail.com",
    subject: `[CONTATO kappke.dev] <${name} (${email})> ${subject}`,
    text: `Nome: ${name}\nEmail: ${email}\nPaís: ${country}\nTelefone: ${phone}\nReferência: ${refer}\nMensagem: ${message}`,
  });
}
