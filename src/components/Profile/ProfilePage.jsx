// import { motion } from "framer-motion";
// import { FiUser, FiBriefcase, FiMail, FiPhone, FiMapPin, FiEdit2, FiCheckCircle, FiSettings } from "react-icons/fi";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// const ProfilePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-28 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto space-y-8">
        
//         {/* Profile Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6"
//         >
//           {/* Avatar */}
//           <div className="relative">
//             <img
//               src="https://i.pravatar.cc/150?img=3"
//               alt="Profile"
//               className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg"
//             />
//             <button className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg">
//               <FiEdit2 />
//             </button>
//           </div>

//           {/* Info */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
//               Ashish Kumar Giri
//               <FiCheckCircle className="text-blue-400" />
//             </h2>
//             <p className="text-gray-400 mt-1">Full Stack Developer | MERN</p>
            
//             {/* Social Links */}
//             <div className="flex justify-center md:justify-start gap-4 mt-4">
//               <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors text-white">
//                 <FaLinkedin />
//               </a>
//               <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors text-white">
//                 <FaGithub />
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* Profile Details */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6 md:p-8"
//         >
//           <h3 className="text-xl font-semibold text-white mb-6">Profile Details</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
//                 <FiUser />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-sm">Full Name</p>
//                 <p className="text-white font-medium">Ashish Kumar Giri</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-green-600/20 rounded-lg text-green-400">
//                 <FiBriefcase />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-sm">Role</p>
//                 <p className="text-white font-medium">MERN Stack Developer</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
//                 <FiMail />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-sm">Email</p>
//                 <p className="text-white font-medium">ashish@example.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-pink-600/20 rounded-lg text-pink-400">
//                 <FiPhone />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-sm">Phone</p>
//                 <p className="text-white font-medium">+91 9876543210</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-yellow-600/20 rounded-lg text-yellow-400">
//                 <FiMapPin />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-sm">Location</p>
//                 <p className="text-white font-medium">Kendrapada, Odisha</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6 md:p-8"
//         >
//           <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
//           <div className="flex flex-wrap gap-3">
//             {["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"].map((skill, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm hover:bg-blue-600/30 transition-colors"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//         {/* Settings Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6 md:p-8"
//         >
//           <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
//             <FiSettings /> Account Settings
//           </h3>
//           <div className="space-y-4">
//             <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//               Edit Profile
//             </button>
//             <button className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
//               Logout
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;







import { motion } from "framer-motion";
import { 
  FiUser, FiBriefcase, FiMail, FiPhone, 
  FiMapPin, FiEdit2, FiCheckCircle, FiSettings 
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" }
});

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-28 px-4 md:px-8 antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <motion.div
          {...fadeInUp(0)}
          className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                     rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row 
                     items-center gap-6 transform-gpu"
        >
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src="https://i.pravatar.cc/300?img=3"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 
                         border-blue-500 shadow-lg object-cover transform-gpu"
              loading="lazy"
            />
            <button className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 
                               text-white p-2 rounded-full shadow-lg transition-transform 
                               hover:scale-105 will-change-transform">
              <FiEdit2 />
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white 
                           flex items-center justify-center md:justify-start gap-2">
              Ashish Kumar Giri
              <FiCheckCircle className="text-blue-400" />
            </h2>
            <p className="text-gray-400 mt-1">Full Stack Developer | MERN</p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 
                                     transition-colors text-white shadow-md hover:shadow-lg">
                <FaLinkedin />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 
                                     transition-colors text-white shadow-md hover:shadow-lg">
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Profile Details */}
        <motion.div {...fadeInUp(0.2)} 
          className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                     rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Profile Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <FiUser />, label: "Full Name", value: "Ashish Kumar Giri", color: "blue" },
              { icon: <FiBriefcase />, label: "Role", value: "MERN Stack Developer", color: "green" },
              { icon: <FiMail />, label: "Email", value: "ashish@example.com", color: "purple" },
              { icon: <FiPhone />, label: "Phone", value: "+91 9876543210", color: "pink" },
              { icon: <FiMapPin />, label: "Location", value: "Kendrapada, Odisha", color: "yellow" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 transition-transform"
              >
                <div className={`p-3 bg-${item.color}-600/20 rounded-lg text-${item.color}-400`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div {...fadeInUp(0.3)} 
          className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                     rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm 
                           hover:bg-blue-600/30 transition-colors shadow-sm hover:shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Settings Section */}
        <motion.div {...fadeInUp(0.4)} 
          className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                     rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <FiSettings /> Account Settings
          </h3>
          <div className="space-y-4">
            <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 
                               text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
              Edit Profile
            </button>
            <button className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 
                               text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
              Logout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
