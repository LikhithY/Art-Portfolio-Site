import { useEffect, useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  FaRegUserCircle,
  FaRegEnvelope,
  FaRegMoon,
  FaRegSun,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      className="flex space-x-40 justify-center mb-10 text-neutral-400"
    >
      <FaRegUserCircle size={28} />
      <FaRegEnvelope size={28} />
      <AiOutlineLinkedin size={28} />

      <button
        className="flex items-center space-x-2"
        onClick={() => {
          setDarkMode(!darkMode);
          toggleTheme();
        }}
      >
        {theme === 'light' ? <FaRegMoon size={28} /> : <FaRegSun size={28} />}
      </button>
    </motion.div>
  );
};

export default Footer;
