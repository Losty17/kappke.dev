export default ({
  text,
  href,
  action,
}: {
  text: string;
  href?: string;
  action?: () => void;
}) => {
  return (
    <li>
      <a
        {...(href ? { href } : { onClick: action })}
        className="block px-4 py-2 hover:bg-neutral-600 hover:text-white cursor-pointer select-none"
      >
        {text}
      </a>
    </li>
  );
};
