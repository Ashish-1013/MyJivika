import { useState } from "react";
import logo from "../../assets/My Jivika F.png"; // Adjust the path as necessary

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-20">
            <div className="container mx-auto flex justify-between items-center py-3 px-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="My Jivika Logo" className="h-11 w-40" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-blue-700 font-semibold items-center">
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            Jobs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            Career Guidance
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            Employers
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="ml-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                        >
                            Login / Sign Up
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-blue-700 text-3xl focus:outline-none transition-transform duration-200 transform hover:scale-110"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <span>&#10005;</span>
                    ) : (
                        <span>&#9776;</span>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-white shadow-xl px-6 py-4 space-y-3 rounded-b-xl animate-fade-in-down">
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            Jobs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            Career Guidance
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            Employers
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block w-full text-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                        >
                            Login / Sign Up
                        </a>
                    </li>
                </ul>
            )}

            {/* Animation for mobile dropdown */}
            <style>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-10px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.3s ease;
                }
            `}</style>
        </nav>
    );
}

