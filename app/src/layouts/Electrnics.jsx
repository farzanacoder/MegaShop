import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import CartItem from "../components/CartItem";
import List from "../components/List";
import Cartimg from "../assets/phn.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Electrnics = () => {
  return (
    <section className="bg-white">
      <Container>
        <Flex className="justify-between items-center flex-row py-3 lg:py-8">
            <h1 className="text-xl mb-2 w-full font-mont font-semibold">
              Electronics
            </h1>
          <Flex className='items-center justify-evenly bg-gray-200 hover:bg-gray-300 cursor-pointer duration-300 w-[120px] rounded-sm py-2'>
            <a href="http://" className="text-sm text-black capitalize">view all</a>
            <FaLongArrowAltRight />
          </Flex>

         
        </Flex>


      <Flex className='flex flex-wrap gap-2 justify-between'>
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
        </Flex>
      </Container>
    </section>
  );
};

export default Electrnics;
