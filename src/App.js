import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Category from "./components/Category";
import Works from "./components/Works";
import Clients from "./components/Clients";
import Services from "./components/Services";
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/works" element={<Works />} />
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
