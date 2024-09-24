import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import AboutPage from "./components/about/page";  
import Experience from "./components/experience/experience";  
import Navbar from "./components/Navbar/navbar";  
import Portfolio from "./components/portfolio/page";  
import SkillDetails from "./components/skill/details";  
import SkillBanner from "./components/skill/skill";  
import ContactMe from "./components/contact/page";  

function App() {  
  return (  
    <Router>  
      <div className="App">  
        <Navbar />  
        <div id="about">  
          <AboutPage />  
        </div>  
        <div id="skills">  
          <SkillBanner />    
        </div>  
        <div id="details">  
          <SkillDetails />  
        </div>  
        <div id="experience">  
          <Experience />  
        </div>  
        <div id="portfolio">  
          <Portfolio />  
        </div>  
        <div id="contact">  
          <ContactMe />  
        </div>  
      </div>  
    </Router>  
  );  
}  

export default App;