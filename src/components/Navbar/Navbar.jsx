
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/My Jivika F.png";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = () => setIsOpen(false);

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-3 sm:px-6">
                
                {/* Logo */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <Link to="/" onClick={handleNavClick}>
                        <img src={logo} alt="My Jivika Logo" className="h-9 w-28 sm:h-11 sm:w-40 object-contain" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4 lg:space-x-8 text-blue-700 font-semibold items-center text-sm sm:text-base">
                    <li><Link to="/" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Home</Link></li>
                    <li><Link to="/jobs" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Jobs</Link></li>
                    <li><Link to="/courses" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Courses</Link></li>
                    <li><Link to="/guidance" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Career Guidance</Link></li>
                    <li><Link to="/employers" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Employers</Link></li>
                    <li><Link to="/about" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Contact</Link></li>
                    <li><Link to="/login" className="ml-2 px-3 py-1.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">Login / Sign Up</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-blue-700 text-3xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖" : "☰"}</button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-white shadow-xl px-4 py-4 space-y-2 rounded-b-xl animate-fade-in-down">
                    <li><Link to="/" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Home</Link></li>
                    <li><Link to="/jobs" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Jobs</Link></li>
                    <li><Link to="/courses" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Courses</Link></li>
                    <li><Link to="/guidance" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Career Guidance</Link></li>
                    <li><Link to="/employers" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Employers</Link></li>
                    <li><Link to="/about" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">About</Link></li>
                    <li><Link to="/contact" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Contact</Link></li>
                    <li><Link to="/login" onClick={handleNavClick} className="block w-full text-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Login / Sign Up</Link></li>
                </ul>
            )}
        </nav>
    );
}


