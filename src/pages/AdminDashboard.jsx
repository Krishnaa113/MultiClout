import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeroSectionEditor from '../components/HeroSectionEditor';
import StatsEditor from '../components/StatsEditor';
import CategoriesEditor from '../components/CategoriesEditor';
import TestimonialsEditor from '../components/TestimonialsEditor';
import SeekhoGurusEditor from '../components/SeekhoGurusEditor';
import VideoGridEditor from '../components/VideoGridEditor';
import FranchiseEditor from '../components/FranchiseEditor';
import AboutEditor from '../components/AboutEditor';
import CourseDetailEditor from '../components/CourseDetailEditor';
import VideoEditor from '../components/VideoEditor';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // Check if user is admin
    axios.get('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      if (response.data.data.user.user_type !== 'admin') {
        navigate('/admin/login');
      }
    }).catch(() => {
      navigate('/admin/login');
    });
  }, [navigate]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/home-content', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContent(response.data.data.reduce((acc, item) => {
        acc[item.section] = item.content;
        return acc;
      }, {}));
    } catch (error) {
      console.error('Error fetching content:', error);
      setMessage('Error loading content');
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async (section, sectionContent) => {
    setSaving(true);
    try {
      console.log('=== FRONTEND SAVE START ===');
      console.log('Section:', section);
      console.log('Content being sent:', sectionContent);
      console.log('Content type:', typeof sectionContent);
      
      const token = localStorage.getItem('token');
      console.log('Token exists:', !!token);
      
      const response = await axios.post(`/api/home-content/${section}`, {
        content: sectionContent
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      console.log('Save response:', response.data);
      setMessage('Content saved successfully!');
      setTimeout(() => setMessage(''), 3000);
      
      // Refresh content after successful save
      await fetchContent();
      
      // Refresh specific sections if they were the ones being saved
      if (section === 'categories' && window.refreshCategoriesContent) {
        window.refreshCategoriesContent();
      }
      if (section === 'seekho_gurus' && window.refreshSeekhoGurusContent) {
        window.refreshSeekhoGurusContent();
      }
      if (section === 'franchise' && window.refreshFranchiseContent) {
        window.refreshFranchiseContent();
      }
      if (section === 'about' && window.refreshAboutContent) {
        window.refreshAboutContent();
      }
      
      console.log('=== FRONTEND SAVE END ===');
    } catch (error) {
      console.error('Error saving content:', error);
      console.error('Error response:', error.response?.data);
      setMessage('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'hero', name: 'Hero Section', icon: '🎯' },
    { id: 'stats', name: 'Statistics', icon: '📈' },
    { id: 'categories', name: 'Categories', icon: '🏷️' },
    { id: 'testimonials', name: 'Testimonials', icon: '💬' },
    { id: 'seekho_gurus', name: 'Seekho Gurus', icon: '👨‍🏫' },
    { id: 'video_grid', name: 'Video Grid', icon: '🎥' },
    { id: 'video_management', name: 'Video Management', icon: '📹' },
    { id: 'course_detail', name: 'Course Details', icon: '📚' },
    { id: 'franchise', name: 'Franchise', icon: '🏢' },
    { id: 'about', name: 'About Us', icon: '📄' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">MultiClout Admin Panel</h1>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/admin/login');
              }}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-5 px-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2 mb-1 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3">{section.icon}</span>
                {section.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {message && (
            <div className={`mb-4 p-4 rounded-lg ${
              message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message}
            </div>
          )}

          {activeSection === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.slice(1).map((section) => (
                  <div key={section.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">{section.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold">{section.name}</h3>
                        <p className="text-sm text-gray-500">
                          {content[section.id] ? 'Content configured' : 'No content yet'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'hero' && (
            <HeroSectionEditor 
              content={content.hero || {}} 
              onSave={(content) => saveContent('hero', content)}
              saving={saving}
            />
          )}

          {activeSection === 'stats' && (
            <StatsEditor 
              content={content.stats || {}} 
              onSave={(content) => saveContent('stats', content)}
              saving={saving}
            />
          )}

          {activeSection === 'categories' && (
            <CategoriesEditor 
              content={content.categories || {}} 
              onSave={(content) => saveContent('categories', content)}
              saving={saving}
            />
          )}

          {activeSection === 'testimonials' && (
            <TestimonialsEditor 
              content={content.testimonials || {}} 
              onSave={(content) => saveContent('testimonials', content)}
              saving={saving}
            />
          )}

          {activeSection === 'seekho_gurus' && (
            <SeekhoGurusEditor 
              content={content.seekho_gurus || {}} 
              onSave={(content) => saveContent('seekho_gurus', content)}
              saving={saving}
            />
          )}

          {activeSection === 'video_grid' && (
            <VideoGridEditor 
              content={content.video_grid || {}} 
              onSave={(content) => saveContent('video_grid', content)}
              saving={saving}
            />
          )}

          {activeSection === 'course_detail' && (
            <CourseDetailEditor />
          )}

          {activeSection === 'video_management' && (
            <VideoEditor />
          )}

          {activeSection === 'franchise' && (
            <FranchiseEditor 
              content={content.franchise || {}} 
              onSave={(content) => saveContent('franchise', content)}
              saving={saving}
            />
          )}

          {activeSection === 'about' && (
            <AboutEditor 
              content={content.about || {}} 
              onSave={(content) => saveContent('about', content)}
              saving={saving}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
