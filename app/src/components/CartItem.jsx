"use client";

import React from "react";
import Link from "next/link";
import Flex from "./Flex";
import Image from "./Image";
import { IoStar } from "react-icons/io5";

const CartItem = ({ data }) => {
  // ✅ safe id handling (very important)
  const productId = data?.id || data?._id || data?.productId;

  // 🛑 prevent Next.js crash
  if (!productId) {
    return null;
  }

  return (
    <Link href={`/prdctdetails/${productId}`}>
      <div className="relative overflow-hidden group rounded-md w-[170px] md:w-[205px] h-[390px] shadow-sm border border-gray-300 bg-white">
        
        {/* IMAGE */}
        <Image
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          src={data?.thumbnail || "/placeholder.png"}
        />

        {/* CONTENT */}
        <Flex className="pl-3.5 absolute top-[180px] flex-col text-left gap-1 items-start justify-center">

          <h1 className="text-sm text-gray-500">
            {data?.brand || "No Brand"}
          </h1>

          <h1 className="text-[12px] md:text-sm font-semibold">
            {data?.title || "No Title"}
          </h1>

          {/* STARS */}
          <Flex className="gap-1 text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </Flex>

          {/* PRICE */}
          <Flex className="gap-4 pt-1.5 pb-3">
            <del className="text-[12px] text-gray-500">
              ${data?.price || 0}
            </del>

            <p className="text-[12px] text-red font-semibold">
              {data?.discountPercentage || 0}%
            </p>
          </Flex>

          <button className="text-[12px] md:text-sm px-5 py-2 border rounded-md text-red hover:bg-black hover:text-white duration-300">
            Add to Cart
          </button>
        </Flex>
      </div>
    </Link>
  );
};

export default CartItem;