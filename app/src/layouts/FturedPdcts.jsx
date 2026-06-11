"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../components/Container";
import Flex from "../components/Flex";
import CartItem from "../components/CartItem";
import Loading from "../components/Loading";
import { FaLongArrowAltRight } from "react-icons/fa";
import { prdctservices } from "../services/api";

const FturedPdcts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await prdctservices.prdct();

        if (res?.products) {
          setProducts(res.products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white">
      <Container>
        <Flex className="justify-between items-center flex-col lg:flex-row py-3 lg:py-8">
          <h1 className="text-xl mb-2 w-full font-mont font-semibold">
            Featured Products
          </h1>

          <Flex className="items-center justify-evenly bg-gray-200 hover:bg-gray-300 cursor-pointer duration-300 w-[120px] rounded-sm py-2">
            <Link
              href="/shop"
              className="text-sm text-black capitalize"
            >
              View All
            </Link>

            <FaLongArrowAltRight />
          </Flex>
        </Flex>

        <Flex className="flex-wrap gap-2">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Loading key={index} />
              ))
            : products.map((item) => (
                <CartItem
                  data={item}
                  key={item._id || item.id}
                />
              ))}
        </Flex>
      </Container>
    </section>
  );
};

export default FturedPdcts;