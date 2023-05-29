type BoxProps = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export default ({ children, className, id }: BoxProps) => {
  return (
    <div id={id} className={`flex flex-col text-justify m-auto ${className}`}>
      {children}
    </div>
  );
};
