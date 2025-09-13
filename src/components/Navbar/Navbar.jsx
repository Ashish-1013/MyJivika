import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome, FiBriefcase, FiBookOpen, FiHelpCircle,
  FiLogIn, FiMenu, FiX, FiUser
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", name: "Home", icon: <FiHome /> },
    { path: "/jobs", name: "Jobs", icon: <FiBriefcase /> },
    { path: "/courses", name: "Courses", icon: <FiBookOpen /> },
    { path: "/resources", name: "Resources", icon: <FiHelpCircle /> }
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gray-900/95 backdrop-blur-sm py-2 shadow-lg" 
            : "bg-gray-900 py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white font-bold text-xl"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              CP
            </div>
            <span>CareerPulse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleNavigation("/ProfilePage")}
              className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiUser className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => handleNavigation("/login")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg font-medium text-white flex items-center space-x-1"
            >
              <FiLogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-800 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Navigation Links */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {navLinks.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className={`flex flex-col items-center p-3 rounded-xl transition-colors ${
                        location.pathname === item.path
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
                      }`}
                    >
                      <span className="text-lg mb-1">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile Auth Section */}
                <div className="space-y-3 border-t border-gray-700 pt-4">
                  <button
                    onClick={() => handleNavigation("/ProfilePage")}
                    className="w-full py-2 rounded-lg font-medium text-gray-300 hover:text-white flex items-center justify-center gap-2"
                  >
                    <FiUser className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  
                  <button
                    onClick={() => handleNavigation("/login")}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-2 rounded-lg font-medium text-white flex items-center justify-center gap-2"
                  >
                    <FiLogIn className="w-4 h-4" />
                    <span>Login / Signup</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
