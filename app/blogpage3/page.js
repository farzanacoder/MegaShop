"use client";

import Container from "../src/components/Container";
import Flex from "../src/components/Flex";
import Blgimg from "../src/assets/blog1.png";
import Blgimg1 from "../src/assets/blog2.png";
import Blgimg2 from "../src/assets/blog3.png";
import Image from "next/image";

import Link from "next/link";

export default function BlogPage3() {
  return (
    <div className="bg-purple-100 py-10 min-h-screen">
      <Container>
        <Flex className="flex-col lg:flex-row gap-6">

          {/* MAIN CONTENT */}
          <Flex className="flex-col w-full lg:w-[70%] gap-5">
            <Image className="rounded-md w-full" src={Blgimg2} alt="blog" />

            <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Sustainable living through cutting-edge prefabricated homes
            </h1>

            <p className="text-gray-700 text-sm leading-6">
              Give2 lady of they such they sure it. Me contained explained my education.
              Vulgar as hearts by garret. Perceived determine departure explained no forfeited...
              {/* (truncate long text if needed) */}
            </p>
          </Flex>

          {/* SIDEBAR */}
          <Flex className="flex-col gap-4 w-full lg:w-[30%]">

            {/* BLOG 3 */}
            <Link href="/blogpage3" className="flex items-center gap-3 cursor-pointer">
              <Image
                className="rounded-md w-[80px] h-[60px] object-cover hover:scale-105 duration-300"
                src={Blgimg2}
                alt="blog"
              />
              <h3 className="text-sm font-semibold text-gray-700">
                This prefabricated passive house is highly sustainable
              </h3>
            </Link>

            {/* BLOG 1 */}
            <Link href="/blogpage1" className="flex items-center gap-3 cursor-pointer">
              <Image
                className="rounded-md w-[80px] h-[60px] object-cover hover:scale-105 duration-300"
                src={Blgimg}
                alt="blog"
              />
              <h3 className="text-sm font-semibold text-gray-700">
                Sustainable living through cutting-edge prefabricated homes
              </h3>
            </Link>

            {/* BLOG 2 */}
            <Link href="/blogpage2" className="flex items-center gap-3 cursor-pointer">
              <Image
                className="rounded-md w-[80px] h-[60px] object-cover hover:scale-105 duration-300"
                src={Blgimg1}
                alt="blog"
              />
              <h3 className="text-sm font-semibold text-gray-700">
                Explore sustainable living through modern prefabricated homes
              </h3>
            </Link>

          </Flex>

        </Flex>
      </Container>
    </div>
  );
}