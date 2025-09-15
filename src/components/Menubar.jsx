import { SignedIn, SignedOut, useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";

const Menubar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const { openSignIn, openSignUp } = useClerk();
    const {user} = useUser();
    const {credit} = useContext(AppContext);

    const openRegister = () => {
        setMenuOpen(false);
        openSignUp({});
    }

    const openLogin = () => {
        setMenuOpen(false);
        openSignIn({});
    }

    

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
                <SignedOut>
                    <button className="text-gray-700 hover:text-orange-500 font-medium transition-all" onClick={openLogin}>
                        Login
                    </button>
                    <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-medium px-4 py-2 rounded-full transition-all hover:opacity-90" onClick={openRegister}>
                        Sign up
                    </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer shadow-sm">
                            <img src={assets.credits} alt="credits" height={24} width={24} />
                            <p className="text-xs sm:text-sm font-medium text-gray-700">
                                Credits: {credit}
                            </p>
                        </button>
                        <p className="text-gray-700 max-sm:hidden font-medium">
                            Hi, {user?.fullName}
                        </p>
                    </div>
                    <UserButton />
                </SignedIn>
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
                    <SignedOut>
                        <button className="text-gray-700 hover:text-orange-500 font-medium text-center" onClick={openLogin}>
                            Login
                        </button>
                        <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-medium px-4 py-2 rounded-full text-center" onClick={openRegister}>
                            Sign up
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center">
                            <button className="flex items-center gap-1.5 bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 px-3 py-1.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer shadow-sm">
                                <img src={assets.credits} alt="credits" height={20} width={20} />
                                <p className="text-xs font-medium text-gray-700">
                                    Credits: {credit}
                                </p>
                            </button>
                        </div>
                        <UserButton />
                    </SignedIn>
                </div>
            )}

        </nav>
    )
};

export default Menubar;