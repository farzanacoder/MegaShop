type ListProps = {
  text: string;
  className?: string;
};

const List = ({ text, className = "" }: ListProps) => {
  return (
    <li
      className={`${className} list-none cursor-pointer duration-500 font-mont text-[13px] md:text-base hover:text-red font-semibold`}
    >
      {text}
    </li>
  );
};

export default List;