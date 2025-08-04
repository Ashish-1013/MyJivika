
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/My Jivika F.png";



// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const handleNavClick = () => setIsOpen(false);

//     return (
//         <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-20">
//             <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-3 sm:px-6">
                
//                 {/* Logo */}
//                 <div className="flex items-center space-x-2 sm:space-x-3">
//                     <Link to="/" onClick={handleNavClick}>
//                         <img src={logo} alt="My Jivika Logo" className="h-9 w-28 sm:h-11 sm:w-40 object-contain" />
//                     </Link>
//                 </div>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex space-x-4 lg:space-x-8 text-blue-700 font-semibold items-center text-sm sm:text-base">
//                     <li><Link to="/" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Home</Link></li>
//                     <li><Link to="/jobs" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Jobs</Link></li>
//                     <li><Link to="/courses" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Courses</Link></li>
//                     <li><Link to="/guidance" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Career Guidance</Link></li>
//                     <li><Link to="/employers" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Employers</Link></li>
//                     <li><Link to="/about" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">About</Link></li>
//                     <li><Link to="/contact" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">Contact</Link></li>
//                     <li><Link to="/login" className="ml-2 px-3 py-1.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">Login / Sign Up</Link></li>
//                 </ul>

//                 {/* Mobile Menu Button */}
//                 <button className="md:hidden text-blue-700 text-3xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖" : "☰"}</button>
//             </div>

//             {/* Mobile Dropdown */}
//             {isOpen && (
//                 <ul className="md:hidden bg-white shadow-xl px-4 py-4 space-y-2 rounded-b-xl animate-fade-in-down">
//                     <li><Link to="/" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Home</Link></li>
//                     <li><Link to="/jobs" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Jobs</Link></li>
//                     <li><Link to="/courses" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Courses</Link></li>
//                     <li><Link to="/guidance" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Career Guidance</Link></li>
//                     <li><Link to="/employers" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Employers</Link></li>
//                     <li><Link to="/about" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">About</Link></li>
//                     <li><Link to="/contact" onClick={handleNavClick} className="block text-blue-700 hover:text-blue-400">Contact</Link></li>
//                     <li><Link to="/login" onClick={handleNavClick} className="block w-full text-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Login / Sign Up</Link></li>
//                 </ul>
//             )}
//         </nav>
//     );
// }



import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FiHome, FiBriefcase, FiBookOpen, FiHelpCircle, 
  FiLogIn, FiChevronUp, FiUserPlus, FiUser 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Simplified navigation links
  const navLinks = [
    { path: "/", name: "Home", icon: <FiHome /> },
    { path: "/jobs", name: "Jobs", icon: <FiBriefcase /> },
    { path: "/courses", name: "Courses", icon: <FiBookOpen /> },
    { path: "/resources", name: "Resources", icon: <FiHelpCircle /> }
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleAuthClick = () => {
    setIsOpen(false);
    navigate("/login"); // Default to login page
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.div 
        className="fixed bottom-6 left-0 right-0 flex justify-center z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-2xl backdrop-blur-sm ${
            isOpen 
              ? "bg-gray-700/80 border border-gray-600/50" 
              : "bg-gradient-to-r from-blue-500 to-cyan-500"
          }`}
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={{ rotate: isOpen ? 0 : 180, scale: isOpen ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FiChevronUp className={`w-6 h-6 ${
              isOpen ? "text-gray-300" : "text-white"
            }`} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Main Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-40 pt-12 pb-24 overflow-y-auto"
            >
              <div className="container mx-auto px-4 h-full flex flex-col">
                {/* Logo Header */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-center mb-8"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    >
                      CP
                    </motion.div>
                    <motion.h1 
                      whileHover={{ scale: 1.05 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                      CareerPulse
                    </motion.h1>
                  </div>
                </motion.div>

                {/* Navigation Grid */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", delay: index * 0.05 }}
                      className="flex justify-center"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`group flex flex-col items-center w-full p-4 rounded-2xl transition-all duration-300 ${
                          location.pathname === item.path
                            ? "bg-gradient-to-br from-blue-900/40 to-cyan-900/40 text-white shadow-inner"
                            : "bg-gray-800/30 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                        }`}
                      >
                        <motion.span
                          whileHover={{ scale: 1.2 }}
                          className={`p-3 rounded-full mb-2 text-xl ${
                            location.pathname === item.path
                              ? "text-blue-300"
                              : "text-gray-400 group-hover:text-blue-400"
                          }`}
                        >
                          {item.icon}
                        </motion.span>
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-medium text-center"
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Combined Auth Button */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: navLinks.length * 0.05 }}
                    className="flex justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAuthClick}
                      className={`w-full flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                        location.pathname === "/login" || location.pathname === "/signup"
                          ? "bg-gradient-to-br from-blue-900/40 to-cyan-900/40 text-white shadow-inner"
                          : "bg-gray-800/30 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        className={`p-3 rounded-full mb-2 text-xl ${
                          location.pathname === "/login" || location.pathname === "/signup"
                            ? "text-blue-300"
                            : "text-gray-400 hover:text-blue-400"
                        }`}
                      >
                        <FiLogIn />
                      </motion.span>
                      <span className="text-sm font-medium text-center">
                        Login/Signup
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Current User (if logged in) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-6 border-t border-gray-700/50 text-center"
                >
                  <button
                    onClick={() => handleNavigation("/profile")}
                    className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors mx-auto"
                  >
                    <FiUser className="text-lg" />
                    <span>Your Profile</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}