import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Menubar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="bg-white px-8 py-4 flex justify-between items-center">
            {/* Left side: logo + text */}
            <Link className="flex item-center space-x-2" to="/">
                <img src={assets.logo} alt="logo" className="h-8 w-8 object-contain cursor-pointer"/>
                <span className="text-2xl font-semibold cursor-pointer bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
                    BGClear
                </span>
            </Link>

            {/* Right side: Action button*/}
            <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-all">
                    Login
                </button>
                <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-medium px-4 py-2 rounded-full transition-all hover:opacity-90">
                    Sign up
                </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white transition-all hover:opacity-90">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">
                    <button className="text-gray-700 hover:text-orange-500 font-medium text-center">
                        Login
                    </button>
                    <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-medium px-4 py-2 rounded-full text-center">
                        Sign up
                    </button>
                </div>
            )}

        </nav>
    )
};

export default Menubar;