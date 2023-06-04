export default ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <ul className="py-2 text-sm text-neutral-100" aria-labelledby={label}>
      {children}
    </ul>
  );
};
