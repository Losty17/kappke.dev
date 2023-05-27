import { Container, Form, Heading, TextInput } from "@components";
import { ClientContext } from "@custom-types";
import { createTransport } from "nodemailer";
import Nullstack from "nullstack";

type ContactFormData = {
  name: string;
  email: string;
  country: string;
  phone: string;
  refer: string;
  subject: string;
  message: string;
};

export default class Contact extends Nullstack {
  static async sendEmail(data: ContactFormData) {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const { name, email, country, phone, refer, subject, message } = data;

    await transporter.sendMail({
      to: "vinikappke@gmail.com ",
      subject: `[CONTATO kappke.dev] <${name} (${email})> ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nPaís: ${country}\nTelefone: ${phone}\nReferência: ${refer}\nMensagem: ${message}`,
    });
  }

  handleSubmit(data: ContactFormData) {
    if (!data.name || !data.email || !data.subject || !data.message) return;
    Contact.sendEmail(data).catch(console.error);
  }

  render({ i18n }: ClientContext) {
    const {
      title,
      name,
      email,
      country,
      phone,
      refer,
      subject,
      message,
      send,
    } = i18n.contactMe;

    return (
      <Container id="contact">
        <Heading type="h2">{title}</Heading>
        <Form onsubmit={this.handleSubmit}>
          <div class="flex gap-12">
            <div class="flex flex-col gap-8 w-1/2">
              <TextInput name="name" placeholder={name} />
              <TextInput name="email" placeholder={email} />
              <TextInput name="country" placeholder={country} />
              <TextInput name="phone" placeholder={phone} />
              <TextInput name="refer" placeholder={refer} />
            </div>
            <div class="flex flex-col gap-8 w-1/2">
              <TextInput name="subject" placeholder={subject} />
              <TextInput name="message" placeholder={message} size="full" />
            </div>
          </div>
          <button
            type="submit"
            class="place-self-end bg-neutral-900 text-neutral-100 py-3 px-5 rounded"
          >
            {send} <span class="font-fira-code">{"->"}</span>
          </button>
        </Form>
      </Container>
    );
  }
}
