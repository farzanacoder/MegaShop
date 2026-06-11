"use client";

import React from "react";
import Link from "next/link";
import Flex from "./Flex";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";

const BlogItem = ({ title, subtitle, ShpBrnd, blogitem }) => {
  return (
    <Link href={blogitem} className="md:pb-12 pb-5 block">
      <div className="relative cursor-pointer overflow-hidden group rounded-md w-full md:w-[290px] h-[200px] my-6">
        <Image
          className="w-full h-full duration-150 transition-transform group-hover:scale-105 group-hover:rotate-1"
          src={ShpBrnd}
          alt={title}
        />

        <Flex className="absolute bottom-[15px] rounded-md p-1 text-[12px] right-[15px] text-white bg-red items-center justify-center gap-1.5">
          <FaRegClock />
          2025-03-12
        </Flex>
      </div>

      <Flex className="flex-col text-left gap-1 items-start justify-center">
        <h1 className="lg:text-md text-sm mb-2 w-full font-mont font-semibold hover:text-red cursor-pointer duration-300">
          {title}
        </h1>

        <p className="text-sm lg:text-base text-gray-600">
          {subtitle}
        </p>

        <button className="text-gray-800 flex items-center hover:text-red text-sm gap-2 pt-4 cursor-pointer duration-300">
          Read more
          <IoIosArrowForward />
        </button>
      </Flex>
    </Link>
  );
};

export default BlogItem;