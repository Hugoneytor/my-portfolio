import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Hugo Alvarez</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications and <br className="sm:block hidden"/>interactive user interfaces in React
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-2 bottom-3 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-center p-2">
            <motion.dev 
              animate={{
                y: [-14, 18,-14]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero