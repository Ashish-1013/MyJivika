
import React from 'react';
import {
  FiSearch, FiBookOpen, FiUser, FiAward, FiBriefcase,
  FiArrowRight, FiCode, FiDatabase, FiLayers, FiDollarSign,
  FiMapPin, FiClock, FiBarChart2, FiCheckCircle
} from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {
  const stats = [
    { value: "10K+", label: "Job Listings", icon: <FiBriefcase className="w-6 h-6" /> },
    { value: "500+", label: "Free Courses", icon: <FiBookOpen className="w-6 h-6" /> },
    { value: "85%", label: "Success Rate", icon: <FiAward className="w-6 h-6" /> },
    { value: "1M+", label: "Community", icon: <FiUser className="w-6 h-6" /> }
  ];

  const featuredJobs = [
    { title: "Frontend Developer", company: "TechCorp", location: "Remote", salary: "$90K-$120K", icon: <FiCode /> },
    { title: "Data Scientist", company: "DataSystems", location: "San Francisco", salary: "$110K-$150K", icon: <FiDatabase /> },
    { title: "UX Designer", company: "CreativeMinds", location: "New York", salary: "$85K-$110K", icon: <FiLayers /> }
  ];

  const courses = [
    { title: "Web Development Bootcamp", category: "Programming", duration: "8 Weeks", icon: <FiCode /> },
    { title: "Data Science Fundamentals", category: "Analytics", duration: "6 Weeks", icon: <FiDatabase /> },
    { title: "Digital Marketing Mastery", category: "Marketing", duration: "4 Weeks", icon: <FiBarChart2 /> }
  ];

  const benefits = [
    { title: "Personalized Matches", description: "AI-powered job matching tailored to your skills", icon: <FiCheckCircle /> },
    { title: "Salary Insights", description: "Real-time salary data for your position", icon: <FiDollarSign /> },
    { title: "Career Coaching", description: "1-on-1 sessions with industry experts", icon: <FiUser /> }
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="text-gray-100 overflow-x-hidden" ref={ref}>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-24 md:pt-28">
        {/* Animated Background */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900 to-cyan-900/80 z-0 py-15"
        />
        
        {/* Stars Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-15 relative z-10 mt-0 pt-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mt-0 pt-0"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech Career</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The ultimate platform to discover opportunities, learn in-demand skills, and connect with top employers.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl font-medium flex items-center gap-3 text-lg shadow-lg hover:shadow-blue-500/30"
              >
                <FiSearch className="text-xl" />
                <span>Explore Jobs</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent hover:bg-gray-800/50 border-2 border-gray-700 px-8 py-4 rounded-xl flex items-center gap-3 text-lg"
              >
                <FiBookOpen className="text-xl" />
                <span>Browse Courses</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="min-h-[40vh] py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-lg"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-400 flex justify-center mb-3 text-3xl"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold mb-2 text-center">{stat.value}</div>
                <div className="text-gray-400 text-center text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
{/* Featured Jobs */}
<section className="min-h-[70vh] py-10 bg-gradient-to-br from-gray-900 to-gray-900/50">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto mb-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
          <FiBriefcase className="w-5 h-5" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Tech Jobs
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredJobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-400/30 transition-all hover:shadow-xl flex flex-col"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-xl mb-4">
              {job.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{job.title}</h3>
            <div className="text-blue-400 mb-3">{job.company}</div>
            <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm">
              <FiMapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mb-5 text-sm">
              <FiDollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="mt-auto pt-2">
              <motion.button
                whileHover={{ x: 5 }}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium text-sm"
              >
                Apply Now <FiArrowRight className="w-3 h-3" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

{/* Popular Courses */}
<section className="min-h-[70vh] py-10 bg-gray-900/50 backdrop-blur-sm"> 
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto mb-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
          <FiBookOpen className="w-5 h-5" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Popular{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Free Courses
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-400/30 transition-all hover:shadow-xl flex flex-col"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-xl mb-4">
              {course.icon}
            </div>
            <h3 className="text-xl font-medium mb-3">{course.title}</h3>
            <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm">
              <FiBookOpen className="w-4 h-4" />
              <span>{course.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mb-5 text-sm">
              <FiClock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="mt-auto pt-2">
              <motion.button
                whileHover={{ x: 5 }}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium text-sm"
              >
                Start Learning <FiArrowRight className="w-3 h-3" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/* Benefits Section */}
      <section className="min-h-[70vh] py-16 bg-gradient-to-br from-blue-900/20 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CareerPulse</span>?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                We provide everything you need to succeed in your tech career journey.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-400/30 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-cyan-900/30 z-0" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                background: `radial-gradient(circle, rgba(56,182,255,0.3) 0%, rgba(0,0,0,0) 70%)`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-3xl p-10 md:p-12 text-center backdrop-blur-sm"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of tech professionals who accelerated their careers with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl font-medium flex items-center gap-3 text-lg mx-auto shadow-lg hover:shadow-blue-500/30"
              >
                <FiUser className="text-xl" /> 
                <span>Get Started - It's Free</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;