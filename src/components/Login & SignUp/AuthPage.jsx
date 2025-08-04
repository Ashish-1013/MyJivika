import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiLock, 
  FiUser, 
  FiEye, 
  FiEyeOff, 
  FiArrowRight,
  FiPhone, 
  FiHelpCircle, 
  FiCheckCircle,
  FiBriefcase
} from 'react-icons/fi';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!isLogin) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
              <FiCheckCircle className="text-xl" />
              <span>{isLogin ? 'Login successful!' : 'Account created successfully!'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Panel - Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                    C
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    CareerPulse
                  </h2>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {isLogin ? 'Welcome back' : 'Create account'}
                </h3>
                <p className="text-gray-400 mb-8">
                  {isLogin ? 'Sign in to continue your journey' : 'Join us to start your career path'}
                </p>

                {/* Social Login */}
                <div className="flex gap-4 mb-8">
                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  >
                    <FaGoogle className="text-xl" />
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.button>
                </div>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-gray-900/80 text-gray-400 text-sm">
                      or continue with email
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-1"
                    >
                      <label className="text-gray-400 text-sm">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <FiUser />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700/50'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                    </motion.div>
                  )}

                  <div className="space-y-1">
                    <label className="text-gray-400 text-sm">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FiMail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700/50'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                  </div>

                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-1"
                    >
                      <label className="text-gray-400 text-sm">Phone (optional)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <FiPhone />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-1">
                    <label className="text-gray-400 text-sm">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FiLock />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full bg-gray-800/50 border ${errors.password ? 'border-red-500' : 'border-gray-700/50'} rounded-lg pl-10 pr-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder={isLogin ? "Enter your password" : "Create a password (min 6 chars)"}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-blue-400"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-xs">{errors.password}</p>}
                  </div>

                  {isLogin && (
                    <div className="flex justify-between items-center">
                      <label className="flex items-center space-x-2 text-gray-400 text-sm">
                        <input type="checkbox" className="rounded bg-gray-700/50 border-gray-600 text-blue-500 focus:ring-blue-500" />
                        <span>Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 transition-all mt-6"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        {isLogin ? 'Sign In' : 'Create Account'} 
                        <FiArrowRight />
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button 
                    onClick={toggleAuthMode}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel - Welcome */}
          <div className={`hidden lg:flex lg:w-1/2 flex-col justify-center p-12 ${isLogin ? 'bg-gradient-to-br from-blue-900/80 to-blue-800/80' : 'bg-gradient-to-br from-gray-800 to-gray-700/80'}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {isLogin ? 'New here?' : 'Welcome back!'}
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {isLogin ? 'Join our community and discover amazing opportunities to grow your career with personalized recommendations.' : 'Sign in to access your personalized dashboard and continue your career journey.'}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAuthMode}
                className="border-2 border-white/80 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </motion.button>
            </motion.div>

            {/* Features List */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              {[
                { icon: <FiBriefcase className="text-xl" />, text: "Job Matching" },
                { icon: <FiUser className="text-xl" />, text: "Profile Builder" },
                { icon: <FiHelpCircle className="text-xl" />, text: "Career Guidance" },
                { icon: <FiCheckCircle className="text-xl" />, text: "Skill Assessment" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
