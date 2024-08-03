import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly mt-5 dark:text-white">
      {/* left heading */}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-5 cursor-pointer dark:text-white"
      >
      <Link to="/personal-projects">Personal Projects</Link>  
      </motion.div>

      {/* Middle heading */}
      <div className="text-center cursor-pointer dark:text-white">
       <Link to="/"> <h1 className="text-2xl"> Vinay Thonongi</h1>
        <h3>Concept Artist</h3>
        </Link>
      </div>

      {/* Right Heading */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-5 cursor-pointer dark:text-white"
      >
      <Link to="/professional-projects">Professional Projects</Link>  
      </motion.div>
    </div>
  );
};

export default Navbar;
