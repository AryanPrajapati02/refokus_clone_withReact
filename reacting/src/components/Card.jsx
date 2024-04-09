import React from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io'

function Card({width ,start , para, hover}) {
  return (
    <div className={   `${width}  hover:${hover} bg-zinc-800 p-5 rounded-xl`}>
     <div className='w-full'>
     <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward />

        </div>
        <h1 className='text-3xl font-medium mt-5'>Heading</h1>
     </div>
     <div className='down w-full mt-60'>
       {
        start === true ?
        <>
        <h1 className='text-5xl font-semibold tracking-tight leading-none'>Start a Project</h1>
        <button className="rounded-full py-2 px-5 border-[1px] mt-5">Contact us</button>
        </>  : null
       }
        <p className='text-sm text-zinc-500 font-medium mt-5'>Lorem ipsum dolor sit amet consectetur.</p>

     </div>
    </div>
  )
}

export default Card