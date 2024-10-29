
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import { Skill } from './SkillComponent/Skill';
import { Project } from './ProjectComponent/Project';
import { Certificate } from './CertificateComponent/Certificate';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
        <div id="skills">
          <Skill />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="certificates">
          <Certificate />
        </div>
        <Footer />
    
      </div>
    </Router>
  );
}

export default App;
