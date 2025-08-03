import { useState } from "react";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? "Login to continue your journey" : "Sign up to start learning & finding jobs"}
        </p>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Link */}
        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {/* Social Login */}
        <div className="mt-6">
          <p className="text-center text-gray-500 mb-2">or continue with</p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200">🔵 Google</button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200">🔵 LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}
