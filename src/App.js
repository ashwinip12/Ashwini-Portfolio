import './App.css';
import { Certificate } from './CertificateComponent/Certificate';
import Footer from './FooterComponent/Footer';
import Header from './HeaderComponent/Header';
import {Main} from './MainComponent/Main';
import { Project } from './ProjectComponent/Project';

import { Skill } from './SkillComponent/Skill';

function App() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Skill/>
     <Project/>
     <Certificate/>
   <Footer/>
    </div>
  );
}

export default App;
