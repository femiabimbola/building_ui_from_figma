import styles from '../style';
import { discount, robot } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 flex-col ${styles.flexStart} px-6 sm:px-16`}>
        <div className={`flex flex-row items-center py-[6px] px-4 mb-2 rounded-[10px]`}> 
          <img scr={discount} alt='discount' className='w-[32px] h-[32px]'/>
        </div>
      </div>
    </section>
  )
};

export default Hero;
