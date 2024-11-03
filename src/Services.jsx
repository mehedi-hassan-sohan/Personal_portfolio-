import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [data, setData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetch('Service.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <p className="text-4xl mt-28 mb-10 text-center" style={{ fontFamily: "'Tilt Prism', cursive" }}>
        Service
      </p>
      <hr />
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-5 mx-10">
        {data.map((service, index) => (
          <motion.div
            key={index}
            className="card w-full md:h-[500px] bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-slate-400"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <figure>
              <motion.img
                src={service.image}
                alt="Service"
                className="rounded-xl md:w-[800px] md:h-[200px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <motion.h2
                className="font-bold text-xl font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {service.title}
              </motion.h2>
              <motion.p
                className="font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {service.description}
              </motion.p>
            </div>
            <motion.button
              className="btn btn-outline font-serif"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={openPopup}
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Popup Message */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 text-center">
            <h2 className="text-2xl font-semibold mb-4">Scroll Down ⬇️</h2>
            <p className="mb-6 text-">Please scroll down and get in touch with me for more details!</p>
            <button
              onClick={closePopup}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
