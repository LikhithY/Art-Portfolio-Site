import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home"
import PersonalProjects from './components/PersonalProjects';
import ProfessionalProjects from './components/ProfessionalProjects';




const App = () => {
  return (
    <div className="dark:bg-black">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/personal-projects" element={<PersonalProjects />}/>
        <Route path="/professional-projects" element={<ProfessionalProjects />}/>
      </Routes>
    </div>
  )
}

export default App