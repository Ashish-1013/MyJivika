
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-12 pb-6 mt-16 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-10">
        
        {/* Brand Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 tracking-wide">My Jivika</h2>
          <p className="mt-3 sm:mt-4 text-gray-200 text-sm leading-relaxed">
            Building Skills, Shaping Futures.<br />
            Your platform for learning & career growth.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-6">
            <a href="https://myjivika.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaGlobe size={20} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaTwitter size={20} /></a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaFacebookF size={20} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-b border-yellow-400 pb-2 w-fit">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition block py-1">Home</a></li>
            <li><a href="#jobs" className="hover:text-yellow-400 transition block py-1">Jobs</a></li>
            <li><a href="#courses" className="hover:text-yellow-400 transition block py-1">Courses</a></li>
            <li><a href="#guidance" className="hover:text-yellow-400 transition block py-1">Career Guidance</a></li>
            <li><a href="#employers" className="hover:text-yellow-400 transition block py-1">Employers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-b border-yellow-400 pb-2 w-fit">Resources</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm">
            <li><a href="#blog" className="hover:text-yellow-400 transition block py-1">Blog</a></li>
            <li><a href="#faqs" className="hover:text-yellow-400 transition block py-1">FAQs</a></li>
            <li><a href="#support" className="hover:text-yellow-400 transition block py-1">Support</a></li>
            <li><a href="#privacy" className="hover:text-yellow-400 transition block py-1">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-yellow-400 transition block py-1">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-b border-yellow-400 pb-2 w-fit">Contact Us</h3>
          <div className="text-gray-200 text-sm space-y-1">
            <p className="py-1"><span className="font-bold">Address:</span> Bhubaneswar, Odisha, India</p>
            <p className="py-1"><span className="font-bold">Email:</span> <a href="mailto:support@myjivika.com" className="hover:text-yellow-400 transition">support@myjivika.com</a></p>
            <p className="py-1"><span className="font-bold">Phone:</span> <a href="tel:+919876543210" className="hover:text-yellow-400 transition">+91 98765 43210</a></p>
          </div>
          <a href="#contact" className="inline-block mt-3 sm:mt-5 px-4 sm:px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow hover:bg-yellow-300 transition duration-200 text-sm sm:text-base">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-4">
        <div className="bg-blue-800 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4">
          <div className="text-center md:text-left w-full md:w-auto">
            <h4 className="text-base sm:text-lg font-bold text-yellow-400">Subscribe to our Newsletter</h4>
            <p className="text-gray-200 text-xs sm:text-sm">Get the latest updates, jobs, and courses delivered to your inbox.</p>
          </div>
          <form className="flex w-full md:w-auto flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-full sm:rounded-l-full px-4 py-2 text-blue-900 focus:outline-none w-full"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 font-semibold px-4 sm:px-5 py-2 rounded-full sm:rounded-r-full hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        <p>© {new Date().getFullYear()} My Jivika. All Rights Reserved.</p>
        <p className="mt-1">
          Developed by <span className="text-yellow-400">A.K.Giri</span>, {" "}
          <span className="text-yellow-400">H. Suna</span>, and {" "}
          <span className="text-yellow-400">D.K. Mahanta</span>
        </p>
      </div>
    </footer>
  );
}