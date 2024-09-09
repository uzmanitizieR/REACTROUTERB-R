import Navbar from './componets/Navbar';
import './App.css';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>

        <Route path="/services" element={<Services/>}/>


      </Routes>
    </div>
  );
}

export default App;
