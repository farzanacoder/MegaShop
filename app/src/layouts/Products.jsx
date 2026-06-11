"use client";

import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import CartItem from "../components/CartItem";
import List from "../components/List";
import Loading from "../components/Loading";
import { prdctservices } from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await prdctservices.prdct();

        setProducts(res?.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
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
          <div className="pr-10 md:pr-96">
            <h1 className="md:text-xl text-md mb-2 w-full font-mont font-semibold">
              Popular Products
            </h1>
            <p className="text-gray-800 text-[12px] md:text-sm">
              Do not miss the current offers until the end of March.
            </p>
          </div>

          <div className="overflow-x-auto md:overflow-hidden w-full scrlbar pt-5">
            <Flex className="gap-9 min-w-max">
              <List text="FASHION" />
              <List text="ELECTRONICS" />
              <List text="BAGS" />
              <List text="FOOTWEAR" />
              <List text="GROCERIES" />
              <List text="BEAUTY" />
              <List text="WELLNESS" />
            </Flex>
          </div>
        </Flex>

        <Flex className="flex-wrap gap-2">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Loading key={index} />
              ))
            : products
                .filter((item) => item?.id || item?._id)
                .map((item) => (
                  <CartItem
                    key={item._id || item.id}
                    data={item}
                  />
                ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Products;