import { useEffect } from "react";


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="w-full mx-auto px-10">
        <div className="grid grid-cols-2 items-center h-16">
          {/* Left: Language Selector 
          <div 
            className="text-left text-sm font-light"
            style={{fontFamily: "Julius Sans One"}}>
            <button className="mr-2">EN</button>
            <button>RU</button>
          </div>
          */}

          {/* Center: Brand Name */}
          <div className="text-left mx-10">
            <a
              href="#home"
              className="text-xl tracking-wide text-black"
              style={{ fontFamily: '"Meow Script"', fontWeight: "normal" }}
            >
              gulchehra rahimova
            </a>
          </div>

          {/* Right: Desktop Nav & Mobile Menu */}
          <div className="flex justify-end items-center space-x-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className="text-black hover:text-black transition-colors"
                style={{ fontFamily: "Julius Sans One", fontWeight: 300 }}
              >
                home
              </a>
              <a
                href="#about"
                className="text-black hover:text-black transition-colors"
                style={{ fontFamily: "Julius Sans One", fontWeight: 300 }}
              >
                story
              </a>
              <a
                href="#gr"
                className="text-black hover:text-black transition-colors"
                style={{ fontFamily: "Julius Sans One", fontWeight: 300 }}
              >
                GR
              </a>
              <a
                href="#contact"
                className="text-black hover:text-black transition-colors"
                style={{ fontFamily: "Julius Sans One", fontWeight: 300 }}
              >
                contact
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-black"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
