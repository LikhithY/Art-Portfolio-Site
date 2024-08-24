import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow dark:text-white">
        <motion.div
          className="m-48"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
            ease: "easeInOut",
          }}
        >
          <div>
            {" "}
            Hi, <b>I’m Vinay!</b> I’m an illustrator and concept artist from Los
            Angeles. I have worked on various projects in film, games,
            animation, and advertising. Catch me at all the life drawing
            workshops in the LA area :)
          </div>
          <br></br>
          <div>
            {" "}
            <b>Clients:</b> Netflix, Sony, Marvel, Disney, Riot Games, Valve,
            Rockstar, Warner Brothers, HBO, Apple, and more.
          </div>
          <br></br>
          <b>Download Resume</b>
          <br></br>
          <div>
            For inquiries, feel free to contact me at: vinay.thonongi@gmail.com{" "}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMePage;
