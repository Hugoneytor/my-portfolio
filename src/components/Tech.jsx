import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from '../styles';


const Tech = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
        <p className={`${styles.sectionSubText} text-center`}> my tools</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map( (technology, index)=>(
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} index={index}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "Tech")