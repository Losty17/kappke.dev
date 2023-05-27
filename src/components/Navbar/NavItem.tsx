interface NavItemProps {
  title: string;
  link: string;
}

export default ({ title, link }: NavItemProps) => {
  const hover =
    "hover:after:w-full hover:after:bg-neutral-900 hover:after:h-[2px]";
  const after =
    "after:transition-all after:duration-200 after:block after:w-[0px] after:bg-neutral-100 after:h-[2px]";

  return (
    <a href={link} class={`p-4 text-xs sm:text-lg ${after} ${hover}`}>
      {title}
    </a>
  );
};
