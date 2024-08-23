import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdAddCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { personalProjectsGallery } from "../../backend/mockdb";



const PersonalProjects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.div
        className="grid grid-cols-3 m-20 gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.75,
          ease: "easeInOut",
        }}
      >
        {personalProjectsGallery.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="relative cursor-pointer rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ease-in-out group"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-60 rounded-xl"
            />
            <div className="absolute top-5 left-0 ml-5 rounded-full bg-white w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <GrGallery className="text-neutral-400 text-lg" />
          </div>
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
            </div> */}
          </div>
        ))}

        <div
          className="relative cursor-pointer flex items-center justify-center h-60 bg-gray-500 rounded-xl 
      bg-opacity-10 backdrop-blur-lg shadow-sm transform transition-transform duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg"
          onClick={() => alert("Add more items")}
        >
          <MdAddCircle className="text-4xl text-gray-600" />
        </div>

        <AnimatePresence>
          {selectedItem && selectedItem.id && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
              layoutId={selectedItem.id}
              onClick={() => setSelectedItem(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="p-5 rounded-lg max-w-4xl w-full h-full max-h-screen overflow-y-auto hide-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedItem.name}
                  </h2>
                  <p className="mt-2 text-white">{selectedItem.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedItem.pictures.map((pic, index) => (
                    <img
                      key={index}
                      src={pic}
                      alt={`Page ${index + 1}`}
                      className="w-full h-auto mb-2 object-contain rounded-lg"
                    />
                  ))}
                </div>
              </motion.div>
              <motion.button
                onClick={() => setSelectedItem(null)}
                className="absolute top-10 right-10 p-2 bg-slate-300 rounded-full w-8 h-8"
              >
                <IoMdClose />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PersonalProjects;
