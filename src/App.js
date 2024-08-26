// import logo from './logo.svg';
import './App.css';
import Feature from './Components/Feature/Feature';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Service from './Components/Service/Service';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import Firebase from './Components/Scripts/Firebase'
import Loadscript from './Components/Scripts/Loadscript'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Service/>
      <Feature/>
      <Project/>
      <Contact/>
      <Team/>
      <Footer/>
      {/* {Scripts} */}
      {/* Firebase */}
      {/* Loadscript */}

    </div>
  );
}

export default App;
