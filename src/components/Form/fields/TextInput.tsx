type TextInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  size?: "full" | "default";
};

export default ({
  placeholder,
  type = "text",
  name,
  size = "default",
}: TextInputProps) => {
  const props = {
    type: type,
    name: name,
    value: "",
    placeholder: placeholder,
    class:
      "w-full bg-transparent border-b-2 border-neutral-900 focus:outline-none pb-2 placeholder:text-neutral-500" +
      (size === "full" ? " h-full" : ""),
  };

  return size === "full" ? <textarea {...props} /> : <input {...props} />;
};
