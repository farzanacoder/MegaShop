import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ShopBrand from '../components/ShopBrand'
import SHOP1 from '../assets/shop1.png'
import SHOP2 from '../assets/shop2.png'
import SHOP3 from '../assets/shop3.png'
import SHOP4 from '../assets/shop4.png'

const Collection = () => {
  return (
    <section>
        <Container>
            <div className='overflow-x-auto scrlbar md:overflow-hidden'>
              <Flex className='min-w-max gap-3 '>
                <ShopBrand className='' ShpBrnd={SHOP1} title='Buy women productss with low price' subtitle='₹999' btn='shop now'/>
                <ShopBrand position='left' ShpBrnd={SHOP2} title='Buy women productss with low price' subtitle='₹999' btn='shop now'/>
                <ShopBrand position='left' ShpBrnd={SHOP3} title='Buy women productss with low price' subtitle='₹999' btn='shop now'/>
                <ShopBrand ShpBrnd={SHOP4} title='Buy women productss with low price' subtitle='₹999' btn='shop now'/>
            </Flex>
            </div>
        </Container>
    </section>
  )
}

export default Collection