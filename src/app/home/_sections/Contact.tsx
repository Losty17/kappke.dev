"use client";

import { Container, Heading, Form, TextInput } from "@/components";
import { useI18n } from "@/hooks";

type ContactFormData = {
  name: string;
  email: string;
  country: string;
  phone: string;
  refer: string;
  subject: string;
  message: string;
};

export default () => {
  const handleSubmit = (data: ContactFormData) => {
    if (!data.name || !data.email || !data.subject || !data.message) return;

    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const i18n = useI18n();

  const { title, name, email, country, phone, refer, subject, message, send } =
    i18n.contactMe;

  return (
    <Container id="contact">
      <Heading type="h2">{title}</Heading>
      <Form onSubmit={handleSubmit}>
        <div className="flex gap-12">
          <div className="flex flex-col gap-8 w-1/2">
            <TextInput name="name" placeholder={name} />
            <TextInput name="email" placeholder={email} />
            <TextInput name="country" placeholder={country} />
            <TextInput name="phone" placeholder={phone} />
            <TextInput name="refer" placeholder={refer} />
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <TextInput name="subject" placeholder={subject} />
            <TextInput name="message" placeholder={message} size="full" />
          </div>
        </div>
        <button
          type="submit"
          className="place-self-end bg-neutral-900 text-neutral-100 py-3 px-5 rounded"
        >
          {send} <span className="font-fira-code">{"->"}</span>
        </button>
      </Form>
    </Container>
  );
};
