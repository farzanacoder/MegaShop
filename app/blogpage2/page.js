import React from 'react'
import Container from '../src/components/Container'
import Flex from '../src/components/Flex'
import Blgimg from '../src/assets/blog1.png'
import Blgimg1 from '../src/assets/blog2.png'
import Blgimg2 from '../src/assets/blog3.png'
import Image from 'next/image'
import Link from 'next/link'

const BlogPage2 = () => {
  return (
    <div className='bg-purple-100 py-10'>
      <Container>
        <Flex className='gap-5'>
            <Flex className='flex-col w-[70%] items-start gap-5'>
              <Image className='rounded-md w-full' src={Blgimg1} alt="Blog Image 1" />
              <h1 className='text-3xl text-gray-700 font-semibold'>Explore sustainable living through cutting-edge prefabricated homes</h1>
              <p className='text-gray-700 text-sm'>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>
              <p className='text-gray-700 text-sm'>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
            </Flex>

            <Flex className='flex-col gap-3.5 w-[30%]'>
              <Link href={'/blogpage2'}>
              <Flex className='flex-row overflow-hidden items-center gap-3.5 cursor-pointer'>
                <Image className='rounded-md !w-[30%] hover:scale-105 duration-300' src={Blgimg1} alt="Blog Image 1" />
                <h3 className='font-semibold text-sm text-gray-700'>This prefabrice passive house is memorable highly sustainable</h3>
              </Flex>
              </Link>
              <Link href={'/blogpage1'}>
              <Flex className='flex-row items-center gap-3.5 cursor-pointer'>
                <Image className='rounded-md !w-[30%] hover:scale-105 duration-300' src={Blgimg} alt="Blog Image" />
                <h3 className='font-semibold text-sm text-gray-700'>sustainable living through cutting-edge prefabricated homes</h3>
              </Flex>
              </Link>
              <Link href={'/blogpage3'}>
              <Flex className='flex-row items-center gap-3.5 cursor-pointer'>
                <Image className='rounded-md !w-[30%] hover:scale-105 duration-300' src={Blgimg2} alt="Blog Image 2" />
                <h3 className='font-semibold text-sm text-gray-700'>Explore sustainable living through cutting-edge prefabricated homes</h3>
              </Flex>
              </Link>
              
            </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default BlogPage2