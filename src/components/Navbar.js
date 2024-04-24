import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bgimg from "../images/Tech-Study-banner.jpg";
import Footer from "./Footer";
import Field from "./Field";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const Navigate = useNavigate();
  const [isloggedin, setisloggedin] = useState(false);
  return (
    <div className=" h-screen w-screen relative ">
      <div className="h-full w-full ">
        <img src={bgimg} alt="load" loading="lazy" className="h-full w-full" />
      </div>
      <nav className=" top-4 absolute h-[100px] w-[80%] flex items-start justify-start right-20  rounded-full">
        <div className="container mx-auto px-4 flex justify-center items-center shadow-md  py-4   fixed top-0">
          <ul className="flex space-x-4 gap-7">
            <li className="transition  duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-full font-semibold text-xl text bg-black text-white">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="transition  delay-75 duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-full font-semibold text-xl text bg-black text-white">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="transition-transform  delay-75 duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-full font-semibold text-xl text bg-black text-white">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="transition delay-75 duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-full font-semibold text-xl text bg-black text-white">
              <NavLink to="/contact">contact</NavLink>
            </li>
            {!isloggedin && (
              <li className="transition delay-75 duration-300  hover:bg-white hover:text-black  px-4 py-2 rounded-full font-semibold text-xl text bg-pink-600 text-white">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {!isloggedin && (
              <li className="transition delay-75 duration-300  hover:bg-white hover:text-black  px-4 py-2 rounded-full font-semibold text-xl text bg-pink-600 text-white">
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div>
        <Field />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <nav className="navbar">
//       <button className="toggle-button" onClick={handleToggle}>
//         Toggle Navbar
//       </button>
//       <ul className={`navbar-links ${isExpanded ? "active" : ""}`}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/">About</Link>
//         </li>
//         <li>
//           <Link to="/">Services</Link>
//         </li>
//         <li>
//           <Link to="/">contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
