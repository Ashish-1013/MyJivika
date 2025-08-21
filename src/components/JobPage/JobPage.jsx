import { useState } from "react";
import { FiSearch, FiMapPin, FiClock, FiBriefcase, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import jobsData from '../../jsonFile/Jobs/jobs.json';

export default function JobPage() {
  const [search, setSearch] = useState("");
  const [jobs] = useState(jobsData.jobs);

  // Filter jobs based on search
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Dream Job</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover {jobs.length} amazing opportunities that match your skills and aspirations
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="relative max-w-2xl mx-auto">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs by title, company, location, or skills..."
            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-gray-500 backdrop-blur-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Remote", "React", "Python", "Design", "Full-time", "Mumbai", "Bangalore"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearch(filter)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-blue-400/30 transition-all backdrop-blur-sm"
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <p className="text-gray-400 text-center">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          {search && ` for "${search}"`}
        </p>
      </motion.div>

      {/* Job Listings */}
      <AnimatePresence mode="wait">
        <motion.div
          key={search}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-400/30 transition-all hover:shadow-xl backdrop-blur-sm"
              >
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">
                    {job.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      {job.title}
                    </h2>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FiMapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FiBriefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FiClock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                  <div className="text-green-400 font-medium">
                    {job.salary}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 4).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 4 && (
                      <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                        +{job.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <p className="text-gray-400 text-sm mb-6">
                  Experience: {job.experience}
                </p>

                {/* Apply Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Apply Now <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or browse all jobs
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearch("")}
                className="px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
              >
                View All {jobs.length} Jobs
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Load More Button (for future pagination) */}
      {filteredJobs.length > 0 && filteredJobs.length < jobs.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-blue-400/30 transition-all"
          >
            Load More Jobs
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}