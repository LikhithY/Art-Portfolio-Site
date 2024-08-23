import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GrGallery } from "react-icons/gr";
import { motion } from "framer-motion";
import { bestForHomeGallery } from "../../backend/mockdb";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bestForHomeGallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner section */}
      <div className="m-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: "easeInOut"
      }}
          className="relative cursor-pointer group w-fit h-fit"
        >
           <img
          className="max-w-3xl rounded-2xl shadow-xl"
          src={bestForHomeGallery[currentImage]}
          alt=""
        />

          <div className="absolute top-5 left-0 ml-5 rounded-full bg-slate-300 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <GrGallery className="text-neutral-500 text-xl" />
          </div>

          <h1 className="absolute bottom-7 left-0 ml-5 transform  text-2xl text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            General White
          </h1>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
