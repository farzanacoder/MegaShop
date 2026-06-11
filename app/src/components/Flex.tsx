type FlexProps = {
  children: React.ReactNode;
  className?: string;
};

const Flex = ({ children, className = "" }: FlexProps) => {
  return <div className={`${className} flex`}>{children}</div>;
};

export default Flex;