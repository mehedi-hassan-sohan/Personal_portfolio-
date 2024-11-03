
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from "react";

const Skill = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
    return ( 

       <div  data-aos="fade-right"
       data-aos-offset="200"
       data-aos-easing="ease-in-sine" > 
        <p className="text-4xl  mt-28 mb-10 text-center" style={{ fontFamily: "'Tilt Prism', cursive" }}>Skills</p>
      <hr />
       <div className="mt-2  grid  grid-cols-2 md:me-20 md:gap-8  md:grid-cols-4 font-semibold "> 
       
       <iframe className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full' src="https://embed.lottiefiles.com/animation/54425"></iframe>
       <iframe className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full' src="https://embed.lottiefiles.com/animation/63207"></iframe>
       <img className="lg:w-[100px] lg:h-[100px] lg:ms-5 md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full" src="https://i.ibb.co/qY1x0Vn/bootstrap-2.png" alt="" />
       <img className="lg:w-[100px] lg:h-[100px] lg:ms-5 md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full" src="https://i.ibb.co/yn76CHN/tailwind-css.png" alt="" />

       <iframe className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full' src="https://embed.lottiefiles.com/animation/90466"></iframe>
       <iframe className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full' src="https://embed.lottiefiles.com/animation/99070"></iframe>
       <iframe className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full' src="https://embed.lottiefiles.com/animation/63206"></iframe>
       <iframe className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full' src="https://embed.lottiefiles.com/animation/63210"></iframe> 
       <img className="lg:w-[100px] lg:h-[100px] lg:ms-5 md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full"   src="https://i.ibb.co/XsbMn6q/st-small-507x507-pad-600x600-f8f8f8-u2.jpg" alt="" /> 
       <img src="https://i.ibb.co/YjsJKGy/download.png" className="lg:w-[100px] lg:h-[100px] lg:ms-5 md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full"  alt="" />
       <img src="../public/Next_JS-500x500.png" className="lg:w-[100px] lg:h-[100px] lg:ms-5 md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full"  alt="" />
       <img src="../public/type.png" className="pt-5 lg:w-[200px] lg:h-[100px] lg:ms-5 md:w-[100px] md:h-[100px] w-[180px] h-[100px]   rounded-full"  alt="" />
       <img src="../public/ps.png" className="lg:w-[250px] lg:h-[200px] lg:ms-5 md:w-[200px] md:h-[200px] w-[200px] h-[200px]  rounded-full"  alt="" />
       
    
        
       </div>
       </div>
    );
};

export default Skill;