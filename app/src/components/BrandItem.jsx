import React from "react";
import Image from "./Image";
import Flex from "./Flex";

const BrandItem = ({img , text}) => {
  return (
    <Flex className="bg-body justify-center gap-2.5 items-center flex-col h-[100px] md:h-[150px] w-[76px] md:w-[155px]">
      <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]">
        <Image className="w-full h-full hover:scale-110 cursor-pointer duration-100" src={img} />
      </div>
      <p className="md:text-[15px] text-[12px] font-mont">{text}</p>
    </Flex>
  );
};

export default BrandItem;
