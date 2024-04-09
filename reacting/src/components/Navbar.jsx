import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl p-6 mx-auto flex font-["satoshi_variable] justify-between border-b-[1px] border-zinc'>
      <div className="nleft flex items-center">
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-10 ml-20 '>
            {['Home', 'Work', 'Services', 'Contact' , "" , "News"].map((link, index) => (
               link.length === 0 ? <span className='w-[2px] h-7 bg-zinc-700'></span> : ( <a key={index} href={`#${link}`} className='text-white text-lg mx-4 flex items-center gap-1 hover:scale-110'>
               {index ===1 ?(<span className='inline-block w-2 h-2 rounded-full bg-[#00FF19]' style={{boxShadow : "0 0 0.25em #00FF19"}}></span>) : (null) }
               {link}</a>)
            ))}
        </div>
      </div>
      <div className="nright">
        <Button />
      </div>

    </div>
  )
}

export default Navbar