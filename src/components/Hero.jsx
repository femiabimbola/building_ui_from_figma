import styles from '../styles.js';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 flex-col ${styles.flexStart} px-6 sm:px-16`}>
        {/* The div for the 20 ... */}
        <div className={`flex flex-row items-center py-[6px] bg-discount-gradient px-4 mb-2 rounded-[10px]`}> 
          <img scr={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles. paragraph} ml-2`}>
            <span className='text-white'> 20% </span>
            Discount for
            <span className='text-white'> 1 month </span>
            Account 
            </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className={`flex-1 font-poppins font-semibold ss:leading-[70px] ss:text-[72px] text-white text-[52px]`}> The Next <br className='sm:block hidden'/> {' '} 
          <span className='text-gradient'> Generation </span> <br/> Payment methods
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'> 
              <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Our team of experts uses a methodology to identify the credit cards most likely to fit your need. We examine annual percentage rate, annual fees
        </p>
      </div>
    </section>
  )
};

export default Hero;
