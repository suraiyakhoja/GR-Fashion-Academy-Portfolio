import { useState } from "react";

export const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
                {open ? "Close Menu" : "Open Menu"}
            </button>
            {open && (
                <nav className="flex flex-col bg-gray-200 p-4 mt-2">
                    <a href="#home" className="py-1">Home</a>
                    <a href="#fashion" className="py-1">Fashion</a>
                    <a href="#contact" className="py-1">Contact</a>
                </nav>
            )}
        </div>
    );
};

