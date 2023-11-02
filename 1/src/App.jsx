import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pges
import Home from "./Components/Home";
import About from "./Components/About";
import Trade from "./Components/Trade";
import Staff from "./Components/Staff";
import Updates from "./Components/Updates";


// imgs
import ESTGLOGO from "./Assets/estglogo-removebg-preview.png";
import { FaBars } from "react-icons/fa";
import bar  from "../src/Assets/bars-solid.svg";
import { useState } from "react";


function App() {
 const [openNav,SetopenNav]=useState(false);
  return (
    <div>
      <BrowserRouter>
        <header className="sticky top-0 bg-white z-50" >
          <div className="flex justify-between  pr-7  shadow">
            <div className="logo">
              <img src={ESTGLOGO} alt="" className="w-32" />
            </div>
  
            
            <nav className="translate-y-4">
              <ul className={openNav ? 'open':''}>
                <Link className="hover:text-sky-700 text-xs font-semibold " to="/">
                  HOME
                </Link>
                <Link className="hover:text-sky-700  text-xs font-semibold" to="About">
                  ABOUTESTG
                </Link>
                <Link className="hover:text-sky-700  text-xs font-semibold " to="Trade">
                  TRADE
                </Link>
                <Link className="hover:text-sky-700 text-xs font-semibold" to="Staff">
                  STAFF
                </Link>
                <Link className="hover:text-sky-700 text-xs font-semibold" to="Updates">
                  ANNOUNCEMENT
                </Link>
              </ul>
            </nav>
            <div className="login   mr-6 underline">
              <a href="" className="text-xs  float-right translate-y-4">
                Log in
              </a>
            </div>
              <  FaBars  className="lg:hidden mt-5 cursor-pointer " onClick={() => {
                SetopenNav(!openNav);
              }}/>
            
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Trade" element={<Trade />} />
            <Route path="Staff" element={<Staff />} />
            <Route path="Updates" element={<Updates />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
