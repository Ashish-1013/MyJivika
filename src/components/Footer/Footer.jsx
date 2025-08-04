
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-12 pb-6 mt-16 shadow-2xl">
//       <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-10">
        
//         {/* Brand Info */}
//         <div className="sm:col-span-2 lg:col-span-1">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 tracking-wide">My Jivika</h2>
//           <p className="mt-3 sm:mt-4 text-gray-200 text-sm leading-relaxed">
//             Building Skills, Shaping Futures.<br />
//             Your platform for learning & career growth.
//           </p>
//           <div className="flex space-x-4 mt-4 sm:mt-6">
//             <a href="https://myjivika.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaGlobe size={20} /></a>
//             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaTwitter size={20} /></a>
//             <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaFacebookF size={20} /></a>
//             <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaInstagram size={20} /></a>
//             <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition"><FaLinkedinIn size={20} /></a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-b border-yellow-400 pb-2 w-fit">Quick Links</h3>
//           <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm">
//             <li><a href="/" className="hover:text-yellow-400 transition block py-1">Home</a></li>
//             <li><a href="#jobs" className="hover:text-yellow-400 transition block py-1">Jobs</a></li>
//             <li><a href="#courses" className="hover:text-yellow-400 transition block py-1">Courses</a></li>
//             <li><a href="#guidance" className="hover:text-yellow-400 transition block py-1">Career Guidance</a></li>
//             <li><a href="#employers" className="hover:text-yellow-400 transition block py-1">Employers</a></li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-b border-yellow-400 pb-2 w-fit">Resources</h3>
//           <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm">
//             <li><a href="#blog" className="hover:text-yellow-400 transition block py-1">Blog</a></li>
//             <li><a href="#faqs" className="hover:text-yellow-400 transition block py-1">FAQs</a></li>
//             <li><a href="#support" className="hover:text-yellow-400 transition block py-1">Support</a></li>
//             <li><a href="#privacy" className="hover:text-yellow-400 transition block py-1">Privacy Policy</a></li>
//             <li><a href="#terms" className="hover:text-yellow-400 transition block py-1">Terms of Service</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="sm:col-span-2 lg:col-span-1">
//           <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 border-b border-yellow-400 pb-2 w-fit">Contact Us</h3>
//           <div className="text-gray-200 text-sm space-y-1">
//             <p className="py-1"><span className="font-bold">Address:</span> Bhubaneswar, Odisha, India</p>
//             <p className="py-1"><span className="font-bold">Email:</span> <a href="mailto:support@myjivika.com" className="hover:text-yellow-400 transition">support@myjivika.com</a></p>
//             <p className="py-1"><span className="font-bold">Phone:</span> <a href="tel:+919876543210" className="hover:text-yellow-400 transition">+91 98765 43210</a></p>
//           </div>
//           <a href="#contact" className="inline-block mt-3 sm:mt-5 px-4 sm:px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow hover:bg-yellow-300 transition duration-200 text-sm sm:text-base">
//             Get in Touch
//           </a>
//         </div>
//       </div>

//       {/* Newsletter */}
//       <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-4">
//         <div className="bg-blue-800 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4">
//           <div className="text-center md:text-left w-full md:w-auto">
//             <h4 className="text-base sm:text-lg font-bold text-yellow-400">Subscribe to our Newsletter</h4>
//             <p className="text-gray-200 text-xs sm:text-sm">Get the latest updates, jobs, and courses delivered to your inbox.</p>
//           </div>
//           <form className="flex w-full md:w-auto flex-col sm:flex-row gap-2">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="rounded-full sm:rounded-l-full px-4 py-2 text-blue-900 focus:outline-none w-full"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-yellow-400 text-blue-900 font-semibold px-4 sm:px-5 py-2 rounded-full sm:rounded-r-full hover:bg-yellow-300 transition text-sm sm:text-base"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
//         <p>© {new Date().getFullYear()} My Jivika. All Rights Reserved.</p>
//         <p className="mt-1">
//           Developed by <span className="text-yellow-400">A.K.Giri</span>, {" "}
//           <span className="text-yellow-400">H. Suna</span>, and {" "}
//           <span className="text-yellow-400">D.K. Mahanta</span>
//         </p>
//       </div>
//     </footer>
//   );
// }








import { motion } from "framer-motion";
import { 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGlobe,
  FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight
} from "react-icons/fi";
import { FaHandshake, FaGraduationCap } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Job Search", href: "/jobs", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Courses", href: "/courses", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Resources", href: "/resources", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "For Employers", href: "/employers", icon: <FiArrowRight className="text-blue-400" /> }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Career Guides", href: "/guides", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Success Stories", href: "/success", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "FAQ", href: "/faq", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Support", href: "/support", icon: <FiArrowRight className="text-blue-400" /> }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Terms of Service", href: "/terms", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "Cookie Policy", href: "/cookies", icon: <FiArrowRight className="text-blue-400" /> },
        { name: "GDPR", href: "/gdpr", icon: <FiArrowRight className="text-blue-400" /> }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "https://facebook.com" },
    { icon: <FiTwitter />, href: "https://twitter.com" },
    { icon: <FiInstagram />, href: "https://instagram.com" },
    { icon: <FiLinkedin />, href: "https://linkedin.com" },
    { icon: <FiGlobe />, href: "https://careerpulse.com" }
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: "Bhubaneswar, Odisha, India" },
    { icon: <FiMail />, text: "support@careerpulse.com", href: "mailto:support@careerpulse.com" },
    { icon: <FiPhone />, text: "+91 98765 43210", href: "tel:+919876543210" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 pt-16 pb-8 border-t border-gray-700/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Info */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                CareerPulse
              </h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your complete platform for career growth and skill development in the tech industry.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#60a5fa" }}
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full bg-gray-700/50 hover:bg-gray-700/80"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                {column.title === "Quick Links" && <FiArrowRight className="text-blue-400" />}
                {column.title === "Resources" && <FaGraduationCap className="text-blue-400" />}
                {column.title === "Legal" && <FaHandshake className="text-blue-400" />}
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <motion.li 
                    key={j}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link.href} 
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiMail className="text-blue-400" />
              Contact Us
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <span className="text-blue-400 mt-1">{info.icon}</span>
                  {info.href ? (
                    <a href={info.href} className="hover:text-blue-400 transition-colors">
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">Subscribe to our newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"
                >
                  <FiSend />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-700/50 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} CareerPulse. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}