type SectionProps = {
  id?: string;
  class?: string;
  children?: React.ReactNode;
};

export default ({ children, id, class: className }: SectionProps) => {
  return (
    <section
      id={id}
      className={`bg-neutral-900 w-full text-neutral-100 py-16 ${className}`}
    >
      {children}
    </section>
  );
};
