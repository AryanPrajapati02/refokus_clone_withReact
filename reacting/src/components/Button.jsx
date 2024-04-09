import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Button() {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-center gap-3'>
    <span className='text-sm font-medium'>Get Started </span>
    <FaArrowRightLong />
    </div>
  )
}

export default Button