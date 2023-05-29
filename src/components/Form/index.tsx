"use client";

import { FormEvent, useRef } from "react";

type FormProps = {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
};

export default ({ children, onSubmit }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formControls = [
      ...(formRef.current?.elements as HTMLFormControlsCollection),
    ].map((element) => {
      const control = element as HTMLInputElement;

      return control.name ? [control.name, control.value] : [];
    });

    const data = Object.fromEntries(formControls);

    onSubmit(data);
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-4 p-12 tablet:p-0"
      onSubmit={(event) => handleSubmit(event)}
    >
      {children}
    </form>
  );
};
