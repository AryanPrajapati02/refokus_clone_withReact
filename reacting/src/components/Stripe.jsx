import React from 'react'

function Stripe({elem}) {
 
  return (
    <div className='w-[16.66%] px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>
  <span><img src={elem.url} alt="" /></span>
  <span className='font-semibold'>{elem.number}</span>
    </div>
  )
}

export default Stripe