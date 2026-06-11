import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from 'next/image'
import Brndimg from '../assets/bnd1.png'
import Brndimg1 from '../assets/bnd2.png'
import Brndimg2 from '../assets/bnd3.png'
import Brndimg3 from '../assets/bnd4.png'

const BrandImg = () => {
  return (
    <div className='py-14'>
        <Container>
            <Flex className='justify-between  md:flex-row flex-wrap gap-2 flex-col'>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg} alt="Brand Image 1" />
                </div>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg1} alt="Brand Image 2" />
                </div>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg2} alt="Brand Image 3" />
                </div>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg3} alt="Brand Image 4" />
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default BrandImg