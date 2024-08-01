import Footer from "./Footer";
import Navbar from "./Navbar";
import grandpa from "../assets/grandpa-war.jpg";
import { GrGallery } from "react-icons/gr";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner section */}
      <div className="m-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.75,
        ease: "easeInOut"
      }}
          className="relative cursor-pointer group w-fit h-fit"
        >
          <img
            className="max-w-3xl rounded-2xl shadow-xl"
            src={grandpa}
            alt="grandpa"
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

export default Home;
