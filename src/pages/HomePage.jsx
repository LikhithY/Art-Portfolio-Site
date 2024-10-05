import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { bestForHomeGallery } from "../../backend/mockdb";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImage((prevImage) => (prevImage + 1) % bestForHomeGallery.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, isHovered]);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner section */}
      <div className="flex-grow">
      <div className="mt-20 relative w-full h-[400px] overflow-hidden">
        <AnimatePresence initial={false}>
          {bestForHomeGallery.map((image, index) => {
            const isCenter = index === currentImage;
            const isNext = index === (currentImage + 1) % bestForHomeGallery.length;
            const isPrev = index === (currentImage - 1 + bestForHomeGallery.length) % bestForHomeGallery.length;

            return (
              <motion.div
                key={index}
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer
                  ${isCenter ? "z-10" : "z-0"}
                  ${isNext || isPrev ? "opacity-50" : "opacity-0"}
                `}
                initial={{
                  x: isNext ? "100%" : isPrev ? "-100%" : "0%",
                  opacity: isCenter ? 1 : 0,
                  scale: isCenter ? 1 : 1,
                }}
                animate={{
                  x: isCenter ? "0%" : isNext ? "-100%" : isPrev ? "100%" : "0%",
                  opacity: isCenter ? 1 : 0,
                  scale: isCenter ? 1 : 1,
                }}
                exit={{
                  x: isCenter ? "-100%" : "100%",
                  opacity: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                onClick={() => handleClick(index)}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
</div>
      <Footer />
    </div>
  );
};

export default HomePage;
