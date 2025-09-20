import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', formData);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl"></div>
      
      <div className="relative w-full max-w-md">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-300 hover:text-white mb-6 sm:mb-8 transition-all duration-300 hover:translate-x-1 group"
        >
          <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10 rounded-3xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 ring-2 ring-white/10">
              <span className="text-2xl sm:text-3xl font-bold text-white">S</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Sign in to continue your learning journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-3">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-dark-800/60 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 transition-all duration-300 shadow-inner hover:border-white/30"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-200 mb-3">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-14 py-4 bg-dark-800/60 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 transition-all duration-300 shadow-inner hover:border-white/30"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between py-1">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-dark-800/60 border-white/30 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-300 hover:border-blue-400"
                />
                <span className="ml-3 text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">Remember me</span>
              </label>
              
              <Link 
                to="/forgot-password" 
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-all duration-300 hover:underline underline-offset-2"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-4 px-6 rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 mt-8"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  <span className="font-medium">Signing In...</span>
                </div>
              ) : (
                <span className="font-semibold tracking-wide">Sign In</span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 sm:my-10 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="px-6 text-sm font-medium text-slate-400">Or continue with</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button className="group bg-dark-800/60 border border-white/20 text-white py-3.5 px-4 rounded-xl font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <svg className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
            
            <button className="group bg-dark-800/60 border border-white/20 text-white py-3.5 px-4 rounded-xl font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <svg className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-slate-300 text-sm">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300 hover:underline underline-offset-2"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
