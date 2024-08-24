import { useEffect, useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  FaRegUserCircle,
  FaRegEnvelope,
  FaRegMoon,
  FaRegSun,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Determine if the current path is '/about-me'
  const isAboutMeActive = location.pathname === "/about-me";
  const handleClick = (type) => () => {

    if (type === "aboutMe") {
      navigate("/about-me");
    }
    if (type === "linkedIn") {
      window.open(
        "https://www.linkedin.com/in/vinay-thonongi-6a43b71b1/",
        "_blank",
        "noopener noreferrer"
      );
    }
  };

  return (
    <div
      className="flex space-x-40 justify-center pb-10 text-neutral-400 dark:text-neutral-700"
    >
      <FaRegUserCircle
        id="aboutMeBtn"
        title="about me"
        size={28}
        className={`cursor-pointer ${
          isAboutMeActive ? "text-white" : ""
        }`}
        onClick={handleClick("aboutMe")}
      />
      <a href="mailto:vinay.thonongi@gmail.com" id="emailMeBtn">
        <FaRegEnvelope
          title="contact me"
          size={28}
          className="cursor-pointer"
        />
      </a>
      <AiOutlineLinkedin
        id="linkedInBtn"
        title="LinkedIn"
        className="cursor-pointer"
        onClick={handleClick("linkedIn")}
        size={28}
      />

      <button
        className="flex items-center space-x-2"
        onClick={() => {
          setDarkMode(!darkMode);
          toggleTheme();
        }}
      >
        {theme === "light" ? (
          <FaRegMoon title="click for dark mode" size={28} />
        ) : (
          <FaRegSun title="click for light mode" size={28} />
        )}
      </button>
    </div>
  );
};

export default Footer;
