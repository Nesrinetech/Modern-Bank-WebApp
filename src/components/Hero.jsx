import styles from "../style";
import { robot } from "../assets";


const Hero = () => {
  return (
     <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Secure Fintech Transact<br className="sm:block hidden" />{" "}
             
          </h1>
        </div>
  

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        for Tomorrow.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
        Discover a new era in payment solutions with our dedicated team of experts. We employ a cutting-edge methodology to pinpoint the credit cards perfectly tailored to meet your unique requirements. 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[90%] h-[100%] relative z-[5]" />

        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
         
      </div>
    </section>
  );
};

export default Hero;