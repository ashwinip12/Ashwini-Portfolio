import './App.css';
import Header from './HeaderComponent/Header';
import {Main} from './MainComponent/Main';
import Blog from './ProjectComponent/ProjectCard';
import { Skill } from './SkillComponent/Skill';

function App() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Skill/>
     <Blog/>
    </div>
  );
}

export default App;
