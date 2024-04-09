import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
function Products() {
    var products = [
        {title : 'Product 1' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptate.' , live:true , case:false},
        {title : 'Product 2' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptate.' , live:true , case:false},
        {title : 'Product 3' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptate.' , live:true , case:false},
        {title : 'Product 4' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptate.' , live:true , case:false},
    ]
    const [pos , setPos] = useState(0);
    const mover = (val)=>{
      setPos(val*23);
    }

  return (
    <div className='mt-32 relative'>
        {products.map((elem , index)=>{
            return <Product elem={elem} mover={mover} index={index} />
        })}
        <div className='w-full h-full absolute top-0 pointer-events-none'>
          <motion.div initial={{y: pos , x:"-20%"}}
          animate= {{y: pos + `rem`}}
          transition={{ease:[0.76,0,0.24 ,1] , duration:0.5}}
           className='window absolute w-[27rem] h-[23rem] left-1/3   rounded-xl overflow-hidden'>
          <motion.div  animate= {{y: -pos + `rem`}}  className=' w-full h-full left-1/3   rounded-xl '>
          <video autoPlay loop muted src="/Cula_promo_new_4_3.mp4"></video>
          </motion.div>
          <motion.div  animate= {{y: -pos + `rem`}} className=' w-full h-full left-1/3   rounded-xl '><video autoPlay loop muted src="/Arqitel project video 4_3.webm"></video></motion.div>
          <motion.div  animate= {{y: -pos + `rem`}} className=' w-full h-full left-1/3   rounded-xl '>
          <video autoPlay loop muted src="/3.mp4"></video>
          </motion.div>
          <motion.div animate= {{y: -pos + `rem`}} className=' w-full h-full left-1/3   rounded-xl '>
          <video autoPlay loop muted src="/Cula_promo_new_4_3.mp4"></video>
          </motion.div>
          <motion.div  animate= {{y: -pos + `rem`}} className=' w-full h-full left-1/3   rounded-xl '>
          <video autoPlay loop muted src="/Cula_promo_new_4_3.mp4"></video>
          </motion.div>
          </motion.div>
        </div>
      
    </div>
  )
}

export default Products