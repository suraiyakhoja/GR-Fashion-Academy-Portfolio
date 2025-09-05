
import './App.css';
import './index.css';
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Story } from "./components/sections/Story";
import { Shows } from "./components/sections/Shows";
import { GR } from "./components/sections/GR";
import { Contact } from "./components/sections/Contact";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen transition-opacity duration-700">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Story/>
      <Shows/>
      <GR />
      <Contact />
    </div>

  )
}

export default App
