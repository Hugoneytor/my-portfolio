import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

import { yoMero } from '../assets'

const MyPhoto = () => {
  return(
    <div className="flex flex-1 w-full justify-center my-3">
      <Tilt className="green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
          className="green-pink-gradient p-[1px] rounded-[20px] shadow-card min-h-[250px]  h-[340px] w-[340px]"
        >
            <img src={yoMero} alt="yoMero"className="w-full h-full rounded-[20px] "/>
        </motion.div>
      </Tilt>
    </div>
  )
}

export default MyPhoto