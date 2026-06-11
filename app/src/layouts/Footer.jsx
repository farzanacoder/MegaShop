import React from "react";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Footimg from "../assets/Container.png";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import Container from "../components/Container";
import List from "../components/List";
import { IoChatboxOutline, IoGiftOutline } from "react-icons/io5";
import FooterBrand from "../components/FooterBrand";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50">

      <section className="md:mt-0 mt-7 py-0 pb-5 md:pb-0">
        <Container>
        <Flex className='md:justify-evenly md:py-14 py-5 md:gap-0 gap-6 md:w-full md:h-full w-full overflow-auto'>
            <FooterBrand icon={<LiaShippingFastSolid className="text-4xl mb-2 hover:text-red duration-500 hover:-translate-y-2 text-gray-800"/>} title='Free Shipping' subtitle='For all Orders Over $100'/> 
            <FooterBrand icon={<BsArrowLeftSquare className="text-3xl mb-2 hover:text-red duration-500 hover:-translate-y-2 text-gray-800"/>} title='30 Days Returns' subtitle='For an Exchange Product'/> 
            <FooterBrand icon={<MdOutlinePayment className="text-4xl mb-2 hover:text-red duration-500 hover:-translate-y-2 text-gray-800"/>} title='Secured Payment' subtitle='Payment Cards Accepted'/> 
            <FooterBrand icon={<IoGiftOutline className="text-4xl mb-2 hover:text-red duration-500 hover:-translate-y-2 text-gray-800"/>} title='Special Gifts' subtitle='Our First Product Order'/> 
            <FooterBrand icon={<BiSupport className="text-4xl mb-2 hover:text-red duration-500 hover:-translate-y-2 text-gray-800"/>} title='Support 24/7' subtitle='Contact us Anytime'/> 
          </Flex>
        </Container>
      </section>

      <section className="border-b border-gray pt-0 md:pt-9 pb-14">
        <Container className="border-t border-gray">
          <Flex className="pt-9 md:flex-row flex-col">

            <div className="md:w-3/12 pb-7 md:pb-0 w-full border-gray border-r-[0.5px]">
              <h1 className="text-lg mb-2 w-full font-mont font-semibold">
                Contact us
              </h1>
              <div className="text-[13px] font-mont pb-3 text-gray-600">
                <p>Classyshop - Mega Super Store</p>
                <p>507-Union Trade Centre France</p>
              </div>
              <a
                href=""
                className="pb-2.5 text-[13px] font-mont hover:text-red duration-500  text-gray-600"
              >
                sales@yourcompany.com
              </a>
              <p className="mt-3 mb-5 text-[22px] font-mont font-semibold text-red">
                (+91) 9876-543-210
              </p>

              <Flex className="gap-3">
                <IoChatboxOutline className="text-[40px] font-bold text-red" />
                <div>
                  <h1 className="text-lg w-full font-mont font-semibold">
                    Online Chat
                  </h1>
                  <h1 className="text-lg w-full font-mont font-semibold">
                    Get Expert Help
                  </h1>
                </div>
              </Flex>
            </div>



            <div className="md:w-5/12 w-full flex md:gap-0 gap-16 justify-evenly">
              <Flex className="flex-col gap-2">
                <h1 className="text-lg mb-2 w-full font-mont font-semibold">
                  Products
                </h1>
                <List
                  text="Prices drop"
                  className="!font-normal  text-gray-600"
                />
                <List
                  text="New Products"
                  className="!font-normal  text-gray-600"
                />
                <List
                  text="Best sales"
                  className="!font-normal  text-gray-600"
                />
                <List
                  text="Contact us"
                  className="!font-normal  text-gray-600"
                />
                <List text="Sitemap" className="!font-normal  text-gray-600" />
                <List text="Stores" className="!font-normal  text-gray-600" />
              </Flex>

              <Flex className="flex-col gap-2">
                <h1 className="text-lg mb-2  font-mont font-semibold">
                  Our company
                </h1>
                <List text="Delivery" className="!font-normal  text-gray-600" />
                <List
                  text="Legal Notice"
                  className="!font-normal  text-gray-600"
                />
                <List
                  text="Terms and conditions of use"
                  className="!font-normal  text-gray-600"
                />
                <List text="About us" className="!font-normal  text-gray-600" />
                <List
                  text="Secure payment"
                  className="!font-normal  text-gray-600"
                />
                <List text="Login" className="!font-normal  text-gray-600" />
              </Flex>
            </div>



            <div className="md:w-4/12 w-full pt-7 md:pt-0">
              <h1 className="text-lg mb-2 w-full font-mont font-semibold">
                Subscribe to newsletter
              </h1>
              <p className="text-[13px] my-5 md:my-8 w-[90%]  text-gray-600">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email Address"
                  className="pl-4 pr-4 rounded-sm mb-4 outline-none w-full h-[45px] border border-gray bg-body text-gray-900 focus:border-[rgba(0,0,0,0.3)]"
                />
              </div>
              <button
                type="submit"
                className="py-2.5 px-5 rounded-md hover:bg-black duration-500 cursor-pointer bg-red text-white font-mont font-semibold"
              >
                SUBSCRIBE
              </button>
              <label className="gap-3.5 flex items-center mt-4">
                <input type="checkbox" name="" id="" className="w-5 h-5 " />
                <p className="text-[13px]">
                  I agree to the terms and conditions and the privacy policy
                </p>
              </label>
            </div>
          </Flex>
        </Container>
      </section>

      <Container className="bg-body py-5">
        <Flex className="justify-between lg:flex-row flex-col items-center">
          <Flex className="justify-center items-center mb-10 lg:mb-0 gap-2">
            <div className="hover:bg-red hover:text-white duration-500 w-9 h-9 border border-gray rounded-full flex items-center justify-center cursor-pointer text-gray-700">
              <FaFacebookF />
            </div>
            <div className="hover:bg-red hover:text-white duration-500 w-9 h-9 border border-gray rounded-full flex items-center justify-center cursor-pointer text-gray-700">
              <CiYoutube />
            </div>
            <div className="hover:bg-red hover:text-white duration-500 w-9 h-9 border border-gray rounded-full flex items-center justify-center cursor-pointer text-gray-700">
              <FaPinterestP />
            </div>
            <div className="hover:bg-red hover:text-white duration-500 w-9 h-9 border border-gray rounded-full flex items-center justify-center cursor-pointer text-gray-700">
              <FaInstagram />
            </div>
          </Flex>
          <p className="text-[13px] mb-5 lg:mb-0 text-gray-600">© 2024 - Ecommerce Template</p>
          <div className="h-[23px] w-[203px]">
            <Image className="h-full w-full" src={Footimg} />
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
