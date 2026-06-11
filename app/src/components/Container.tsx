type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div className={`max-w-container px-1 md:px-0 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;