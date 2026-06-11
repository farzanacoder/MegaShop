import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BrandItem from '../components/BrandItem'
import Brand1 from '../assets/brand1.png'
import Brand2 from '../assets/brand2.png'
import Brand3 from '../assets/brand3.png'
import Brand4 from '../assets/brand4.png'
import Brand5 from '../assets/brand5.png'
import Brand6 from '../assets/brand6.png'
import Brand7 from '../assets/brand7.png'
import Brand8 from '../assets/brand8.png'

const Brand = () => {
  return (
    <section className='bg-purple-100'>
        <Container>
            <Flex className='flex flex-wrap justify-between gap-2 md:gap-0 py-4 md:py-8'>
                <BrandItem img={Brand1} text='Fashion'/>
                <BrandItem img={Brand2} text='Fashion'/>
                <BrandItem img={Brand3} text='Fashion'/>
                <BrandItem img={Brand4} text='Fashion'/>
                <BrandItem img={Brand5} text='Fashion'/>
                <BrandItem img={Brand6} text='Fashion'/>
                <BrandItem img={Brand7} text='Fashion'/>
                <BrandItem img={Brand8} text='Fashion'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Brand