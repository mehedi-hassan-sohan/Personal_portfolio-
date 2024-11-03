import { useEffect, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";




import Swal from "sweetalert2";


const Contact = () => {
  const [themeColor, setThemeColor] = useState("");
  console.log(themeColor);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w28octs",
        "template_rqclnaw",
        form.current,
        "VPxxjah1STOR7wcCl"
      )
      .then(
        (result) => {
          // Display success notification
          Swal.fire({
            title: "Success",
            text: "Your message has been sent.",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Reset the form
          form.current.reset();
        },
        (error) => {
          // Display error notification
          Swal.fire({
            title: "Error",
            text: "Failed to send the message.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setThemeColor(theme);
  }, []);

  return (
    <div className="mt-20"> 
    <p className="text-4xl  mt-28 mb-10 text-center" style={{ fontFamily: "'Tilt Prism', cursive" }}>Get in Touch</p>
      <hr />

      <div className="lg:flex md:flex justify-center items-center">
        {themeColor === "light" ? (
          <div>
            <iframe className=" w-[340px] h-[350px] md:w-[700px] md:h-[700px]" src="https://embed.lottiefiles.com/animation/103094"></iframe>
          </div>
        ) : (
          <div>
            <iframe className=" w-[340px] h-[350px] md:w-[700px] md:h-[700px] rounded-3xl" src="https://embed.lottiefiles.com/animation/103094"></iframe>
          </div>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-[70%] md:w-[50%] lg:w-[30%] mx-auto"
        >
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              required
              className="shadow-2x  appearance-none border rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              required
              className="shadow-2x  appearance-none border rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center">
            <motion.button>
              <button type="submit"

                value="Send" className="w-80 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 transition duration-500 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Send</span>
              </button>

            </motion.button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;