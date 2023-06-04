export default ({
  id,
  children,
  toggle,
  placement,
}: {
  id: string;
  children: React.ReactNode;
  toggle: string;
  placement: string;
}) => {
  return (
    <button
      id={id}
      data-dropdown-toggle={toggle}
      data-dropdown-placement={placement}
      type="button"
      className="w-full text-left px-4 py-2 uppercase hover:text-white hover:bg-neutral-600"
    >
      {children}
    </button>
  );
};
