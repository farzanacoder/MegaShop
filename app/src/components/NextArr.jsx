import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NextArr = ({ className, onClick }) => {
  return (
    <div
            className={`bg-[#00000033] w-[64px] h-[64px] flex items-center justify-center rounded-full text-black absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer right-2  ${className}`}
            onClick={onClick}>
            <FaLongArrowAltRight className=' text-xl ' />
        </div>
  )
}

export default NextArr