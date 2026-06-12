import Link from "next/link";

type ListProps = {
  text: string;
  href?: string; 
  className?: string;
};

const List = ({ text, href = "#", className = "" }: ListProps) => {
  return (
    <li
      className={`${className} list-none cursor-pointer duration-500 font-mont text-[13px] md:text-base hover:text-red font-semibold`}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default List;