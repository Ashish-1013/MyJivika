
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




// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     // Optional: Close mobile menu on navigation
//     const handleNavClick = () => setIsOpen(false);

//     return (
//         <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-20">
//             <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-3 sm:px-6">
//                 {/* Logo */}
//                 <div className="flex items-center space-x-2 sm:space-x-3">
//                     <img src={logo} alt="My Jivika Logo" className="h-9 w-28 sm:h-11 sm:w-40 object-contain" />
//                 </div>

//                 {/* Desktop & Tablet Menu */}
//                 <ul className="hidden md:flex space-x-4 lg:space-x-8 text-blue-700 font-semibold items-center text-sm sm:text-base">
//                     <li>
//                         <a href="Home" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             Jobs
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             Courses
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             Career Guidance
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             Employers
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400 pb-1">
//                             Contact
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="LoginSignup"
//                             className="ml-2 px-3 py-1.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 text-xs sm:text-sm"
//                         >
//                             Login / Sign Up
//                         </a>
//                     </li>
//                 </ul>

//                 {/* Mobile/Tablet Menu Button */}
//                 <button
//                     className="md:hidden text-blue-700 text-3xl focus:outline-none transition-transform duration-200 transform hover:scale-110"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     {isOpen ? (
//                         <span>&#10005;</span>
//                     ) : (
//                         <span>&#9776;</span>
//                     )}
//                 </button>
//             </div>

//             {/* Mobile/Tablet Dropdown */}
//             {isOpen && (
//                 <ul className="md:hidden bg-white shadow-xl px-4 py-4 space-y-2 rounded-b-xl animate-fade-in-down text-base sm:text-lg">
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             Jobs
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             Courses
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             Career Guidance
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             Employers
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" onClick={handleNavClick} className="block text-blue-700 font-semibold hover:text-blue-400 transition-colors duration-200">
//                             Contact
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             onClick={handleNavClick}
//                             className="block w-full text-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 mt-2"
//                         >
//                             Login / Sign Up
//                         </a>
//                     </li>
//                 </ul>
//             )}

//             {/* Animation for mobile dropdown */}
//             <style>{`
//                 @keyframes fade-in-down {
//                     0% { opacity: 0; transform: translateY(-10px);}
//                     100% { opacity: 1; transform: translateY(0);}
//                 }
//                 .animate-fade-in-down {
//                     animation: fade-in-down 0.3s ease;
//                 }
//                 @media (max-width: 768px) {
//                     nav .container, nav .max-w-7xl {
//                         padding-left: 1rem;
//                         padding-right: 1rem;
//                     }
//                 }
//             `}</style>
//         </nav>
//     );
// }










// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/My Jivika F.png";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const navigate = useNavigate();

//     // Close mobile menu on navigation
//     const handleNavClick = () => setIsOpen(false);

//     // Add scroll effect to navbar
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 10) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Close menu when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (isOpen && !event.target.closest('nav')) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, [isOpen]);

//     // Handle login navigation
//     const handleLoginClick = () => {
//         navigate('/LoginPage');
//         setIsOpen(false);
//     };

//     // Handle signup navigation
//     const handleSignupClick = () => {
//         navigate('/signup');
//         setIsOpen(false);
//     };

//     return (
//         <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-0' : 'bg-white/95 shadow-md py-1 backdrop-blur-sm'}`}>
//             <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src={logo}
//                             alt="My Jivika Logo"
//                             className={`h-10 w-32 sm:h-12 sm:w-36 object-contain transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`} 
//                         />
//                     </Link>
//                 </div>

//                 {/* Desktop & Tablet Menu */}
//                 <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
//                     {[
//                         { name: "Home", href: "/" },
//                         { name: "Jobs", href: "#jobs" },
//                         { name: "Courses", href: "#courses" },
//                         { name: "Career Guidance", href: "#guidance" },
//                         { name: "Employers", href: "#employers" },
//                         { name: "About", href: "#about" },
//                         { name: "Contact", href: "#contact" }
//                     ].map((item) => (
//                         <li key={item.name}>
//                             <Link
//                                 to={item.href}
//                                 className="relative px-2 py-3 text-blue-800 font-medium hover:text-blue-600 transition-colors duration-200 group"
//                             >
//                                 {item.name}
//                                 <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//                             </Link>
//                         </li>
//                     ))}
                    
//                     <li className="ml-4">
//                         <div className="flex space-x-3">
//                             <button
//                                 onClick={handleLoginClick}
//                                 className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base font-medium"
//                             >
//                                 Login
//                             </button>
//                             <button
//                                 onClick={handleSignupClick}
//                                 className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
//                             >
//                                 Sign Up
//                             </button>
//                         </div>
//                     </li>
//                 </ul>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className={`md:hidden p-2 rounded-lg focus:outline-none transition-all duration-200 ${isOpen ? 'bg-blue-100 text-blue-800' : 'text-blue-700 hover:bg-blue-50'}`}
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     {isOpen ? (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {/* Mobile Dropdown Menu */}
//             <div className={`md:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
//                 <div className="px-4 pt-2 pb-6 space-y-3">
//                     {[
//                         { name: "Home", href: "/" },
//                         { name: "Jobs", href: "#jobs" },
//                         { name: "Courses", href: "#courses" },
//                         { name: "Career Guidance", href: "#guidance" },
//                         { name: "Employers", href: "#employers" },
//                         { name: "About", href: "#about" },
//                         { name: "Contact", href: "#contact" }
//                     ].map((item) => (
//                         <Link
//                             key={item.name}
//                             to={item.href}
//                             onClick={handleNavClick}
//                             className="block px-4 py-3 text-blue-800 font-medium hover:bg-blue-50 rounded-lg transition-colors duration-200"
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
                    
//                     <div className="pt-2 space-y-3">
//                         <button
//                             onClick={handleLoginClick}
//                             className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md"
//                         >
//                             Login
//                         </button>
//                         <button
//                             onClick={handleSignupClick}
//                             className="block w-full text-center px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-sm"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }