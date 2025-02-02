import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage"
import PersonalProjects from './pages/PersonalProjects';
import ProfessionalProjects from './pages/ProfessionalProjects';
import AboutMePage from './pages/AboutMePage';




const App = () => {
  return (
    <div className="dark:bg-black">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/personal-projects" element={<PersonalProjects />}/>
        <Route path="/professional-projects" element={<ProfessionalProjects />}/>
        <Route path="/about-me" element={<AboutMePage />}/>
      </Routes>
    </div>
  )
}

export default App