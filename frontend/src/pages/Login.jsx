import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    
    try {
      await login({
        email: formData.email,
        password: formData.password
      });
      
      navigate('/dashboard');
    } catch (error) {
      setErrors({ 
        general: error.message || 'Login failed. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '520px', height: '520px',
          background: 'radial-gradient(circle, rgba(0,184,217,0.08) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute', bottom: '0', left: '20%',
          width: '450px', height: '350px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
      </div>

      <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <img
              className="mx-auto h-16 w-auto"
              src="/logo.png"
              alt="MultiClout"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Fallback text */}
            <div style={{ display: 'none' }} className="flex flex-col leading-none">
              <div className="flex items-center">
                <span style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '26px', fontWeight: 900, color: '#1a3a5c', letterSpacing: '-1px' }}>
                  M
                </span>
                <span style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '26px', fontWeight: 900, color: '#00b8d9', letterSpacing: '-1px' }}>
                  ULTI
                </span>
                <span style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '26px', fontWeight: 900, color: '#1a3a5c', letterSpacing: '-1px' }}>
                  C
                </span>
                <span style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '26px', fontWeight: 900, color: '#00b8d9', letterSpacing: '-1px' }}>
                  LOUT
                </span>
              </div>
              <span style={{ fontSize: '9px', color: '#00b8d9', letterSpacing: '1.5px', borderTop: '1px solid #00b8d9', paddingTop: '2px' }}>
                Business | Affiliate | Network | Services
              </span>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold" style={{ color: '#1e3a5f' }}>
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm" style={{ color: '#4a5568' }}>
              Sign in to your MultiClout account
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                {errors.general}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1e3a5f' }}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm transition-colors ${
                    errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-cyan-500'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#1e3a5f' }}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm transition-colors ${
                    errors.password ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-cyan-500'
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-all duration-300"
                  style={{ 
                    backgroundColor: '#00b8d9', 
                    borderRadius: '18px',
                    boxShadow: '0 6px 18px rgba(0,184,217,0.3)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#1e3a5f';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(30,58,95,0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#00b8d9';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,184,217,0.3)';
                  }}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8 8 0 018 8 8zm-3-1h6v6h-6v-6z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/register"
                className="font-medium text-cyan-600 hover:text-cyan-500 transition-colors duration-200"
              >
                Don't have an account? Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
