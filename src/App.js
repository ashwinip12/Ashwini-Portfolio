import './App.css';
import Header from './HeaderComponent/Header';
import {Main} from './MainComponent/Main';
import { Skill } from './SkillComponent/Skill';

function App() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Skill/>
    </div>
  );
}

export default App;
