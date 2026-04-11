import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDashboard from '../hooks/useDashboard';

const Dashboard = () => {
  const { content, loading, error } = useDashboard();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user info from localStorage or API
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {user ? `Welcome back, ${user.name}!` : 'User Dashboard'}
          </h1>
          <p className="text-gray-600">
            Here's what you can do with your account
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <Link 
              key={index} 
              to={item.link || '#'} 
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{item.icon || '📊'}</span>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>

        {content.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No dashboard content available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
