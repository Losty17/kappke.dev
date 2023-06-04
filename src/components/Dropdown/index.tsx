export default ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      id={id}
      className="z-10 hidden bg-white divide-y divide-neutral-100 rounded-lg shadow w-44 dark:bg-neutral-900"
    >
      {children}
    </div>
  );
};
