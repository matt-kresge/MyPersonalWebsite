import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './content/Navbar';
import AboutMe from './content/AboutMe';
import Education from './content/Education';
import Skills from './content/Skills';
import WorkExperience from './content/WorkExperience';
import ExtraExperience from './content/ExtraExperience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe id="AboutMe"/>
      <Education id="Education"/>
      <Skills id="Skills"/>
      <WorkExperience id="WorkExp"/>
      <ExtraExperience id="ExtraExp"/>
    </div>
  );
}

export default App;