import React from 'react'
import Flex from './Flex'
import Image from './Image'

const ShopBrand = ({ShpBrnd , title , className , subtitle ,btn , position = 'right'}) => {
  return (
    <div className={`${className} relative overflow-hidden group rounded-md w-[316px] h-[200px]`}>
        <Image className='w-full h-full duration-150 transition-transform group-hover:scale-105' src={ShpBrnd}/>

        <Flex className={`absolute top-0 ${position === 'left' ? 'left-0 pl-7' : 'right-0'} flex-col text-left w-[50%] h-[100%] gap-1 items-start justify-center`}>
      <h1 className="lg:text-lg text-sm mb-2 w-full font-mont font-semibold">{title}</h1>
      <p className="text-[20px] text-red font-semibold">{subtitle}</p>
      <button className='font-semibold underline hover:text-red uppercase text-base cursor-pointer duration-300'>{btn}</button>
    </Flex>
    </div>
  )
}

export default ShopBrand