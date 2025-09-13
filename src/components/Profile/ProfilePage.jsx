import { motion } from "framer-motion";
import { 
  FiUser, FiBriefcase, FiMail, FiPhone, 
  FiMapPin, FiEdit2, FiCheckCircle, FiSettings,
  FiSave, FiX, FiPlus, FiTrash2, FiUpload, FiCamera,
  FiBookOpen
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState, useRef } from "react";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" }
});

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: "Ashish Kumar Giri",
    title: "Full Stack Developer | MERN",
    email: "ashish@example.com",
    phone: "+91 9876543210",
    location: "Kendrapada, Odisha",
    bio: "Passionate full-stack developer with expertise in MERN stack. Love building scalable applications and solving complex problems.",
    linkedin: "https://linkedin.com/in/ashish",
    github: "https://github.com/ashish",
    twitter: "https://twitter.com/ashish"
  });
  const [skills, setSkills] = useState([
    "React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Developer",
      period: "2021 - Present",
      description: "Led a team of developers in building scalable web applications."
    },
    {
      id: 2,
      company: "StartUp Ventures",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects using MERN stack."
    }
  ]);
  const [education, setEducation] = useState([
    {
      id: 1,
      institution: "Odisha University of Technology",
      degree: "B.Tech in Computer Science",
      period: "2015 - 2019",
      grade: "8.5 CGPA"
    },
    {
      id: 2,
      institution: "Kendrapada College",
      degree: "Intermediate Science",
      period: "2013 - 2015",
      grade: "75%"
    }
  ]);
  const [newEducation, setNewEducation] = useState({
    institution: "",
    degree: "",
    period: "",
    grade: ""
  });
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the data
    console.log("Profile saved:", profileData);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Here you would typically upload the image to a server
      console.log("File selected:", file.name);
      // For demo purposes, we'll just show an alert
      alert(`Profile picture would be updated with: ${file.name}`);
    }
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        id: Date.now(),
        company: "",
        position: "",
        period: "",
        description: ""
      }
    ]);
  };

  const handleRemoveExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const handleExperienceChange = (id, field, value) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setEducation([
        ...education,
        {
          id: Date.now(),
          ...newEducation
        }
      ]);
      setNewEducation({
        institution: "",
        degree: "",
        period: "",
        grade: ""
      });
    }
  };

  const handleRemoveEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const handleEducationChange = (field, value) => {
    setNewEducation({
      ...newEducation,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-28 px-4 md:px-8 antialiased pb-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <motion.div
          {...fadeInUp(0)}
          className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                     rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row 
                     items-center gap-6 transform-gpu"
        >
          {/* Avatar with upload functionality */}
          <div className="relative shrink-0">
            <img
              src="https://i.pravatar.cc/300?img=3"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 
                         border-blue-500 shadow-lg object-cover transform-gpu"
              loading="lazy"
            />
            <button 
              onClick={handleImageUpload}
              className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 
                         text-white p-2 rounded-full shadow-lg transition-transform 
                         hover:scale-105 will-change-transform"
            >
              <FiCamera className="w-4 h-4" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="text-2xl md:text-3xl font-bold bg-gray-800 text-white p-2 rounded w-full"
                />
                <input
                  type="text"
                  name="title"
                  value={profileData.title}
                  onChange={handleInputChange}
                  className="text-gray-400 bg-gray-800 p-2 rounded w-full"
                />
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="text-gray-300 bg-gray-800 p-2 rounded w-full mt-2"
                  rows="3"
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-white 
                              flex items-center justify-center md:justify-start gap-2">
                  {profileData.name}
                  <FiCheckCircle className="text-blue-400" />
                </h2>
                <p className="text-gray-400 mt-1">{profileData.title}</p>
                <p className="text-gray-300 mt-3 max-w-md">{profileData.bio}</p>
              </>
            )}
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {isEditing ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="LinkedIn URL"
                    value={profileData.linkedin}
                    onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                    className="bg-gray-800 text-white p-2 rounded text-sm w-32"
                  />
                  <input
                    type="text"
                    placeholder="GitHub URL"
                    value={profileData.github}
                    onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                    className="bg-gray-800 text-white p-2 rounded text-sm w-32"
                  />
                </div>
              ) : (
                <>
                  <a href={profileData.linkedin} className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 
                                         transition-colors text-white shadow-md hover:shadow-lg">
                    <FaLinkedin />
                  </a>
                  <a href={profileData.github} className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 
                                         transition-colors text-white shadow-md hover:shadow-lg">
                    <FaGithub />
                  </a>
                  <a href={profileData.twitter} className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 
                                         transition-colors text-white shadow-md hover:shadow-lg">
                    <FaTwitter />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Edit/Save Buttons */}
          <div className="flex gap-3">
            {isEditing ? (
              <>
                <button 
                  onClick={handleSaveProfile}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 flex items-center gap-2
                             text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <FiSave className="w-4 h-4" /> Save
                </button>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 flex items-center gap-2
                             text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <FiX className="w-4 h-4" /> Cancel
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 flex items-center gap-2
                           text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <FiEdit2 className="w-4 h-4" /> Edit Profile
              </button>
            )}
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div {...fadeInUp(0.1)} className="flex border-b border-gray-700 overflow-x-auto">
          {["profile", "experience", "education", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium capitalize transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? "text-blue-400 border-b-2 border-blue-400" 
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Profile Details */}
        {activeTab === "profile" && (
          <>
            <motion.div {...fadeInUp(0.2)} 
              className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                         rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <FiUser /> Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <FiUser />, label: "Full Name", name: "name", value: profileData.name, color: "blue" },
                  { icon: <FiBriefcase />, label: "Role", name: "title", value: profileData.title, color: "green" },
                  { icon: <FiMail />, label: "Email", name: "email", value: profileData.email, color: "purple" },
                  { icon: <FiPhone />, label: "Phone", name: "phone", value: profileData.phone, color: "pink" },
                  { icon: <FiMapPin />, label: "Location", name: "location", value: profileData.location, color: "yellow" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-4 transition-transform"
                  >
                    <div className={`p-3 bg-${item.color}-600/20 rounded-lg text-${item.color}-400`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name={item.name}
                          value={item.value}
                          onChange={handleInputChange}
                          className="text-white font-medium bg-gray-800 p-2 rounded w-full mt-1"
                        />
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
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
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FiBriefcase /> Skills & Expertise
                </h3>
                {isEditing && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add new skill"
                      className="bg-gray-800 text-white p-2 rounded text-sm"
                    />
                    <button 
                      onClick={handleAddSkill}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                      <FiPlus />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm 
                               hover:bg-blue-600/30 transition-colors shadow-sm hover:shadow-md"
                  >
                    {skill}
                    {isEditing && (
                      <button 
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <FiTrash2 className="w-3 h-3" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <motion.div {...fadeInUp(0.2)} 
            className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                       rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FiBriefcase /> Work Experience
              </h3>
              <button 
                onClick={handleAddExperience}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
              >
                <FiPlus /> Add Experience
              </button>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="border-l-2 border-blue-500 pl-4 py-2 relative"
                >
                  {isEditing && (
                    <button 
                      onClick={() => handleRemoveExperience(exp.id)}
                      className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  )}
                  
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                        className="text-white font-semibold bg-gray-800 p-2 rounded w-full"
                        placeholder="Company Name"
                      />
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                        className="text-blue-400 bg-gray-800 p-2 rounded w-full"
                        placeholder="Position"
                      />
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => handleExperienceChange(exp.id, 'period', e.target.value)}
                        className="text-gray-400 bg-gray-800 p-2 rounded w-full text-sm"
                        placeholder="Period (e.g., 2020 - 2022)"
                      />
                      <textarea
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                        className="text-gray-300 bg-gray-800 p-2 rounded w-full text-sm"
                        placeholder="Description"
                        rows="3"
                      />
                    </div>
                  ) : (
                    <>
                      <h4 className="text-white font-semibold">{exp.company}</h4>
                      <p className="text-blue-400">{exp.position}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                      <p className="text-gray-300 mt-2 text-sm">{exp.description}</p>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Education Section - FIXED */}
        {activeTab === "education" && (
          <motion.div {...fadeInUp(0.2)} 
            className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                       rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FiBookOpen /> Education
              </h3>
              {isEditing && (
                <button 
                  onClick={handleAddEducation}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
                >
                  <FiPlus /> Add Education
                </button>
              )}
            </div>
            
            {isEditing && (
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <h4 className="text-white font-medium mb-3">Add New Education</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={newEducation.institution}
                    onChange={(e) => handleEducationChange('institution', e.target.value)}
                    className="bg-gray-700 text-white p-2 rounded text-sm"
                    placeholder="Institution Name"
                  />
                  <input
                    type="text"
                    value={newEducation.degree}
                    onChange={(e) => handleEducationChange('degree', e.target.value)}
                    className="bg-gray-700 text-white p-2 rounded text-sm"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    value={newEducation.period}
                    onChange={(e) => handleEducationChange('period', e.target.value)}
                    className="bg-gray-700 text-white p-2 rounded text-sm"
                    placeholder="Period (e.g., 2015 - 2019)"
                  />
                  <input
                    type="text"
                    value={newEducation.grade}
                    onChange={(e) => handleEducationChange('grade', e.target.value)}
                    className="bg-gray-700 text-white p-2 rounded text-sm"
                    placeholder="Grade/CGPA"
                  />
                </div>
                <button 
                  onClick={handleAddEducation}
                  className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                >
                  Add Education
                </button>
              </div>
            )}
            
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="border-l-2 border-green-500 pl-4 py-2 relative"
                >
                  {isEditing && (
                    <button 
                      onClick={() => handleRemoveEducation(edu.id)}
                      className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  )}
                  
                  <h4 className="text-white font-semibold">{edu.institution}</h4>
                  <p className="text-green-400">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                  {edu.grade && <p className="text-gray-300 mt-1 text-sm">Grade: {edu.grade}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Settings Section */}
        {activeTab === "settings" && (
          <motion.div {...fadeInUp(0.4)} 
            className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 
                       rounded-2xl shadow-2xl p-6 md:p-8 transform-gpu"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <FiSettings /> Account Settings
            </h3>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-gray-400 text-sm">Change Password</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-3 bg-gray-800 text-white rounded mt-1"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 bg-gray-800 text-white rounded mt-2"
                />
                <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 
                                   text-white rounded-lg transition-colors shadow-md hover:shadow-lg mt-4">
                  Update Password
                </button>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <button className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 
                                   text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Delete Account
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;