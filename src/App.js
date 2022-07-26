import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import TandT from './Components/TandT/Tools&Tech';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Tech' element={<TandT />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Projects' element={<Projects/>} />
        </Routes>
      </Router>
      
      
      
      
    </>
  );
}

export default App;
