
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar';

import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'; 
import About from './routes/About';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import Packages from './routes/Packages';


export default function App(){
  return (
    <div className="App">
      
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>  
          <Route path="/gallery" element={<Gallery/>}/>  
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/Packages" element={<Packages/>}/>   
        </Routes>
        {/* <Navbar /> */} 
      {/* <Navbar> */}
        {/* <Home/> */}
    </div>
  );

       
      
  

}

