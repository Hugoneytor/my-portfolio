import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { yoIcon, AmongIzq, AmongDer, resume } from '../assets';

const FeedBackCard = () => {
  return(
    <motion.div 
      variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full justify-center "
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">Here you can download my resume. Just click on the button.</p> 
        <div className="mt-7 flex flex-between items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>Hugo Alvarez
            </p>
            <p className="mt-1 text-secondary text-[12px]">React developer</p>
          </div>
          <img src={yoIcon} alt={`me`} 
          className="w-10 h-10 rounded-full object-cover"
          />
        </div>   
      </div>
    </motion.div>
  )
}

const Resume = () => {
  return(
      <motion.div 
        variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[640px] w-full"
      >
        <div className="mt-1 flex h-full items-center justify-center">
            <img src={AmongIzq} alt={`me`} 
            className="w-[100px] rounded-full object-cover"
            />
            <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl text-[30px]">
              <a href={resume} download>Download Cv</a>
            </button>
            <img src={AmongDer} alt={`me`} 
            className="w-[100px] rounded-full object-cover"
            />
          </div>   
      </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>For Employers</p>
          <h2 className={`${styles.sectionHeadText}`}>My CV.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        <FeedBackCard />
        <Resume />
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks) 