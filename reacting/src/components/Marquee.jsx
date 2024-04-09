import React from 'react'
import {motion} from 'framer-motion'

function Marquee({elem ,direction}) {
  return (
    <div className='flex justify-center items-center w-full py-8 gap-20 overflow-hidden whitespace-nowrap' >
 <motion.div initial={{x:direction==="left" ? "0" : "-100%"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:30, repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
 {elem.map(url => <img src={url} alt="marquee" className="flex flex-shrink-0 " />)}

 </motion.div>
 <motion.div initial={{x:direction==="left" ? "0" : "-100%"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:30, repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
 {elem.map(url => <img src={url} alt="marquee" className="flex flex-shrink-0 " />)}

 </motion.div>
 

    </div>
  )
}

export default Marquee