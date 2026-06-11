import React from "react";
import Image from "./Image";
import Footimg from "../assets/brand1.png";
import Flex from "./Flex";
import { LiaShippingFastSolid } from "react-icons/lia";

const FooterBrand = ({ icon, title, subtitle }) => {
  return (
    <Flex className="flex-col items-start md:items-center justify-center text-left md:text-center">
      <button className="">{icon}</button>
      <h1 className="md:text-lg text-md mb-2 md:w-full w-[150px] font-mont font-semibold">{title}</h1>
      <p className="md:text-[13px] text-[12px] md:w-full w-[170px] text-gray-700">{subtitle}</p>
    </Flex>
  );
};

export default FooterBrand;
