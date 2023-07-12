
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <Router>
     
     <Navbar/>
     
    <div className="co">
     <Routes>
          
          
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Cart" element={<Cart/>} /> 
          <Route path="/Products" element={<Products/>} />
          <Route path="/Singleproduct/:id" element={<SingleProduct/>} />
    </Routes> 
    </div>



    </Router>
  );
}

export default App;
