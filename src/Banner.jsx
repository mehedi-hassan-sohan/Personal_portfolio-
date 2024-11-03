import { useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  const [showHireMePopup, setShowHireMePopup] = useState(false);
  const [showFollowPopup, setShowFollowPopup] = useState(false);
  const contactRef = useRef(null);

  const handleHireMeClick = () => {
    setShowHireMePopup(true);
    setTimeout(() => setShowHireMePopup(false), 1500); // Hide the popup after 1.5 seconds
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleFollowClick = () => {
    setShowFollowPopup(true);
    setTimeout(() => setShowFollowPopup(false), 1500); // Hide the popup after 1.5 seconds
  };

  return (
    <div className="flex flex-col-reverse md:flex-row mt-10 mx-10"> 
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="md:w-[1600px] md:mt-24 mt-5 flex gap-10"
      >   
        <div className="text-4xl lg:block hidden py-2 mt-20">
          <FaFacebook onClick={() => window.open("https://www.facebook.com/lynx.sohan/", "_blank")} />
          <FaLinkedinIn onClick={() => window.open("https://www.linkedin.com/in/mehedi-hassan-sohan-926093230/", "_blank")} />
          <FaGithub onClick={() => window.open("https://github.com/mehedi-hassan-sohan", "_blank")} />
          <FaInstagram onClick={() => window.open("https://www.instagram.com/lynx_sohan/?hl=en", "_blank")} />
        </div>
        <div>
          <h1 className="text-5xl font-serif mt-5">Welcome !!</h1>
          <h1 className="md:text-3xl text-xl font-serif mt-8">My name is,</h1>
          <h2 className="md:text-6xl text-5xl mt-2">Mehedi Hassan</h2>
          <p className="font-bold md:text-3xl text-xl gap-5 mt-5">
            <TypeAnimation
              sequence={[
                "I am a Professional MERN Stack Developer",
                1000,
                "I am a Professional Front End Developer",
                1000,
                "I am a Professional React JS Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
          <button onClick={handleHireMeClick} className="btn btn-outline hover:bg-black-200 mt-10">Hire Me</button>
          {showHireMePopup && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-8 py-4 rounded-md shadow-lg">
              <p>Thank you for your interest! <br />
                 Please Scroll Down To⬇️  <br /> 
              </p>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="md:w-[60%] mx-auto md:mt-12 mt-5">
          <img
            className="rounded-full mx-auto w-[70%]"
            src="https://i.ibb.co.com/yg4HRQJ/Profile-1.png"
            alt=""
          /> 
          <div> 
            <h1 className="text-2xl font font-serif text-center">Mehedi Hassan</h1>
            <div className="flex gap-10 mt-2 justify-center">
              <div className="font-serif">Followers : 100K</div>
              <div onClick={handleFollowClick} className="btn btn-sm btn-outline w-1/4 text-center font-bold px-1 cursor-pointer">
                Follow
              </div>
              {showFollowPopup && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-8 py-4 rounded-md shadow-lg">
                  <p>Just kidding! It's not dynamic. 😅</p>
                </div>
              )}
            </div>
            <div className="text-center mt-3">
              <h1 className="text-xl font-bold">About Me</h1>
              <hr className="border-2 w-1/4 mx-auto" />
              <p className="mt-4 font-serif">
                I am a passionate web developer with expertise in JavaScript, React, Node.js, and MongoDB, and a deep understanding of the MERN Stack architecture. I thrive on crafting unique and engaging 
                <br />
                <span className="text-xl font-bold mt-2 font-serif">
                  web applications that captivate users and deliver exceptional experiences.
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Section */}
      <div ref={contactRef} className="mt-20">
        {/* Add your contact form or information here */}
      </div>
    </div>
  );
};

export default Banner;
