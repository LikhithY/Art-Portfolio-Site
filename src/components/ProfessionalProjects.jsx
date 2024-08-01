import Footer from "./Footer";
import Navbar from "./Navbar";

const ProfessionalProjects = () => {
  return (
    <div className="flex flex-col min-h-screen dark:text-white">
      <div className="dark:text-white">
        <Navbar />
        <div>This is personal projects</div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionalProjects;
