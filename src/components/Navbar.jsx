import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  // Determine if the current path is '/about-me'
  const isPersonalProjectsActive = location.pathname === "/personal-projects";
  const isProfessionalProjectsActive =
    location.pathname === "/professional-projects";
  return (
    <div className="sticky top-0 flex justify-evenly pt-5 pb-3 bg-white dark:text-white z-30 dark:bg-black">
      {/* left heading */}

      <div
        className={`mt-5 cursor-pointer dark:text-white ${
          isPersonalProjectsActive ? "font-bold" : ""
        }`}
      >
        <Link to="/personal-projects">Personal Projects</Link>
        {isPersonalProjectsActive ? (
          <motion.div
            className="border-b-2 border-black dark:border-white" // Tailwind classes for light and dark mode
            layoutId="underline"
          />
        ) : null}
      </div>

      {/* Middle heading */}
      <div className="text-center cursor-pointer dark:text-white">
        <Link to="/">
          {" "}
          <h1 className="text-2xl"> Vinay Thonongi</h1>
          <h3>Concept Artist</h3>
        </Link>
      </div>

      {/* Right Heading */}

      <div
        className={`mt-5 cursor-pointer dark:text-white ${
          isProfessionalProjectsActive ? "font-bold" : ""
        }`}
      >
        <Link to="/professional-projects">Professional Projects</Link>
        {isProfessionalProjectsActive ? (
          <motion.div
            className="border-b-2 border-black dark:border-white" // Tailwind classes for light and dark mode
            layoutId="underline"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
