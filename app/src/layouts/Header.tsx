"use client";
import { useState } from "react";

import List from "../components/List";
import Container from "../components/Container";
import Flex from "../components/Flex";

import Link from "next/link";
import Image from "next/image";
import cartimg from "../assets/empty-cart.png";
import Logo from "../assets/logo.png";
import Search from "../components/Search";

import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [shopping, setShopping] = useState(false);
  const [menuclick, setMenuClick] = useState(false);

  const [moreOpen, setMoreOpen] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.45 },
  };

  return (
    <header className="font-mont sticky top-0 z-50 bg-white shadow-sm">
      {" "}
      <div className=" border-b border-gray">
        <Container>
          <Flex className=" hidden lg:flex justify-between items-center h-12 text-sm font-normal">
            <p className="text-black">
              Get up to 50% off new season styles, limited time only
            </p>
            <Flex className="gap-4">
              <Link href="/help-center" className="hover:text-red duration-500">
                Help Center
              </Link>
              <Link
                className="hover:text-red duration-500"
                href="/order-tracking"
              >
                Order Tracking
              </Link>
            </Flex>
          </Flex>
        </Container>
      </div>
      <div className="">
        <div className="border-b border-gray-200">
          {" "}
          <Container>
            <Flex className="py-4 items-center justify-between">
              {" "}
              <div className="">
                <button onClick={() => setMenuClick(true)}>
                  <IoMenu className="text-xl md:hidden cursor-pointer" />
                </button>
                <AnimatePresence>
                  {menuclick && (
                    <>
                      <motion.div
                        onClick={() => setMenuClick(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.45 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/40 z-40"
                      />

                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4 }}
                        className="z-50 fixed left-0 top-0 h-full bg-white px-4 py-4 w-[250px]"
                      >
                        <Image className="!w-[170px]" src={Logo} alt="Logo" />
                        <Flex className="pt-6 justify-between">
                          <p className="text-base font-semibold">
                            Shop By Categories{" "}
                          </p>
                          <button onClick={() => setMenuClick(false)}>
                            <RxCross2 className="text-xl cursor-pointer" />
                          </button>
                        </Flex>

                        <Flex className="flex-col gap-4 py-6 items-start">
                          <List text="Home" href="/" />
                          <List text="Fashion" href="/fashion" />
                          <List text="Electronics" href="/electronics" />
                          <List text="Bags" href="/bags" />
                          <List text="Footwear" href="/footwear" />
                          <List text="Groceries" href="/groceries" />
                          <List text="Beauty" href="/beauty" />
                          <List text="Jewellery" href="/jewellery" />


                          <div className="w-full">
                            <button
                              onClick={() => setMoreOpen(!moreOpen)}
                              className="flex items-center gap-2 font-semibold"
                            >
                              More
                              <FaAngleDown
                                className={`duration-300 ${moreOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            {moreOpen && (
                              <div className="pl-4 pt-3 flex flex-col gap-3">
                                <List text="Fruits & Vegetables" href="/fruits-vegetables" />
                                <List text="Meats & Seafood" href="/meats-seafood" />
                                <List text="Breakfast & Dairy" href="/breakfast-dairy" />
                                <List text="Breads & Bakery" href="/breads-bakery" />
                                <List text="Beverages" href="/beverages" />
                                <List text="Frozen Foods" href="/frozen-foods" />
                              </div>
                            )}
                          </div>


                        </Flex>
                        <button className="font-semibold rounded-md w-[220px] py-3 bg-red text-white hover:text-white hover:bg-black hover:border-black text-sm cursor-pointer duration-300">
                          Login
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <div className="lg:w-1/3 w-full">
                <Image
                  className="md:w-[200px] w-[140px] object-contain"
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <Search />

              <Flex className="ml-auto items-center gap-3">                {" "}
                <Flex className="hidden md:flex items-center gap-3">
                  <Link href="/login" className="hover:text-red duration-500">
                    Login
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href="/register"
                    className="hover:text-red duration-500 cursor-pointer"
                  >
                    Register
                  </Link>

                  <div className="flex items-center gap-7">
                    <Link href="/wishlist" className="relative flex">
                      <span className="bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[17px] text-[9px]">
                        3
                      </span>
                      <FiHeart className="text-2xl hover:text-red duration-500 cursor-pointer" />
                    </Link>

                    <Link href="/cart" className="relative flex">
                      <span className="bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[10px] -right-[10px] text-[9px]">
                        3
                      </span>
                      <MdOutlineShoppingCart className="hover:text-red-500 duration-300 text-2xl md:text-3xl cursor-pointer" />
                    </Link>
                  </div>
                </Flex>
                <div className="">
                  <AnimatePresence>
                    {shopping && (
                      <>
                        <motion.div
                          onClick={() => setShopping(false)}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.45 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="fixed inset-0 bg-black z-40"
                        />

                        <motion.div
                          initial={{ x: "100%" }}
                          animate={{ x: 0 }}
                          exit={{ x: "100%" }}
                          transition={{ duration: 0.4 }}
                          className="fixed right-0 top-0 md:w-[390px] w-[300px] h-full bg-white z-50"
                        >
                          <div className="flex justify-between items-center p-4 border-b border-gray-300">
                            <h1 className="font-semibold">Shopping Cart (0)</h1>
                            <button onClick={() => setShopping(false)}>
                              <RxCross2 className="text-xl cursor-pointer" />
                            </button>
                          </div>

                          <div className="flex flex-col items-center justify-center gap-3 mt-28">
                            <Image
                              className="!w-[150px]"
                              src={cartimg}
                              alt="Empty Cart"
                            />
                            <p className="text-gray-600 text-base font-semibold">
                              Your Cart is currently empty
                            </p>
                            <button className="md:px-10 md:py-2 px-2.5 py-1.5 text-[12px] uppercase md:text-md rounded bg-red-500 text-white hover:bg-red-600 duration-700">
                              Continue Shopping
                            </button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </Flex>
            </Flex>
          </Container>
        </div>

        <nav className="py-2 hidden md:block">
          <Container>
            <Flex className="items-center py-2.5">
              <Flex className="w-1/6 items-center justify-between">
                <RiMenu2Fill className="text-xl" />
                <p className="font-semibold text-sm uppercase">
                  Shop By Categories
                </p>
                <IoIosArrowDown />
              </Flex>

              <Flex className="w-4/6 justify-evenly">
                <List text="Home" href="/" />
                <List text="Fashion" href="/fashion" />
                <List text="Electronics" href="/electronics" />
                <List text="Bags" href="/bags" />
                <List text="Footwear" href="/footwear" />
                <List text="Groceries" href="/groceries" />
                <List text="Beauty" href="/beauty" />
                <List text="Jewellery" href="/jewellery" />

                <div className="relative group">
                  <span className="text-[16px] text-gray-800 font-[600] hover:text-primary flex items-center gap-1 cursor-pointer">
                    More
                    <FaAngleDown size={18} />
                  </span>

                  <div className="absolute top-[100%] right-0 bg-white shadow-md rounded-md overflow-hidden w-[200px] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50 py-2">

                    <List text="Fruits & Vegetables" href="/fruits-vegetables" className="px-4 py-2" />

                    <List text="Meats & Seafood" href="/meats-seafood" className="px-4 py-2" />

                    <List text="Breakfast & Dairy" href="/breakfast-dairy" className="px-4 py-2" />

                    <List text="Breads & Bakery" href="/breads-bakery" className="px-4 py-2" />

                    <List text="Beverages" href="/beverages" className="px-4 py-2" />

                    <List text="Frozen Foods" href="/frozen-foods" className="px-4 py-2" />

                  </div>
                </div>

              </Flex>

              <Flex className="w-1/6 items-center gap-3">
                <GoRocket />
                <p className=" text-sm">Free International Delivery</p>
              </Flex>
            </Flex>
          </Container>
        </nav>
      </div>
    </header>
  );
};

export default Header;
