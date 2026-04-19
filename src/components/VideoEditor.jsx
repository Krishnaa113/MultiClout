import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Save, Plus, Trash2, Eye, Edit2, Star, ToggleLeft, ToggleRight, Search, Filter } from 'lucide-react';

const VideoEditor = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [editingVideo, setEditingVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [stats, setStats] = useState(null);

  const categories = ['All', 'Digital Marketing', 'Business & Startup', 'Communication', 'Technology', 'Finance', 'Productivity', 'AI Tools'];
  const languages = ['Hindi', 'English', 'Hinglish'];

  useEffect(() => {
    fetchVideos();
    fetchStats();
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [currentPage, selectedCategory, searchTerm]);

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        setMessage('Please log in to access video management');
        setLoading(false);
        return;
      }
      
      const params = new URLSearchParams({
        page: currentPage,
        limit: '20',
        ...(selectedCategory !== 'All' && { category: selectedCategory }),
        ...(searchTerm && { search: searchTerm })
      });
      
      const response = await axios.get(`/api/videos/admin/all?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVideos(response.data.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setMessage('Error fetching videos. Please check your authentication.');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      const response = await axios.get('/api/videos/admin/stats', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Don't show error message for stats failure, just log it
    }
  };

  const handleSave = async (videoData) => {
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      console.log('Saving video data:', videoData); // Debug log
      
      // Validate required fields
      const requiredFields = ['title', 'description', 'thumbnail', 'videoUrl', 'duration', 'category', 'language', 'views', 'rating', 'author', 'date', 'section'];
      const missingFields = requiredFields.filter(field => {
        const value = videoData[field];
        if (!value) return true;
        if (typeof value === 'string') return value.trim() === '';
        if (Array.isArray(value)) return value.length === 0;
        return false;
      });
      
      if (missingFields.length > 0) {
        setMessage(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setSaving(false);
        return;
      }
      
      if (editingVideo) {
        await axios.put(`/api/videos/${editingVideo._id}`, videoData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage('Video updated successfully!');
      } else {
        await axios.post('/api/videos', videoData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage('Video created successfully!');
      }
      
      fetchVideos();
      setEditingVideo(null);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving video:', error);
      setMessage('Error saving video');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (videoId) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;
    
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/videos/${videoId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Video deleted successfully!');
      fetchVideos();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting video:', error);
      setMessage('Error deleting video');
    }
  };

  const toggleFeatured = async (videoId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/videos/${videoId}/featured`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Video featured status updated!');
      fetchVideos();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error toggling featured:', error);
      setMessage('Error updating featured status');
    }
  };

  const getDefaultVideoData = () => ({
    title: '',
    description: '',
    thumbnail: '',
    videoUrl: '',
    duration: '',
    category: 'All',
    language: 'English',
    views: '0',
    rating: 4.0,
    author: '',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    tags: [],
    section: '',
    order: 0,
    featured: false,
    isActive: true
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Video Management</h2>
        <button
          onClick={() => setEditingVideo(getDefaultVideoData())}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add New Video
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {/* Statistics */}
      {stats && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Video Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalVideos}</div>
              <div className="text-sm text-gray-500">Total Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.totalViews}</div>
              <div className="text-sm text-gray-500">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.categories?.length || 0}</div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {videos.filter(v => v.featured).length}
              </div>
              <div className="text-sm text-gray-500">Featured</div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <Filter size={20} className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Videos List */}
      {!editingVideo && (
        <VideoEditorForm
          videoData={editingVideo}
          onSave={handleSave}
          onCancel={() => setEditingVideo(null)}
          saving={saving}
        />
      )}

      {videos.length > 0 && !editingVideo && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thumbnail</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {videos.map((video) => (
                  <tr key={video._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="h-16 w-20 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <div className="font-medium text-gray-900">{video.title}</div>
                        <div className="text-sm text-gray-500">by {video.author}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {video.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{video.language}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{video.views}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{video.rating.toFixed(1)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleFeatured(video._id)}
                        className={`p-2 rounded-lg transition-colors ${
                          video.featured 
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                        title={video.featured ? 'Unfeature' : 'Feature'}
                      >
                        {video.featured ? <ToggleLeft size={16} /> : <ToggleRight size={16} />}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.open(`/video/${video._id}`, '_blank')}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="View Video"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => setEditingVideo(video)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                          title="Edit Video"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(video._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete Video"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const VideoEditorForm = ({ videoData, onSave, onCancel, saving }) => {
  const [formData, setFormData] = useState(videoData || {
    title: '',
    description: '',
    thumbnail: '',
    videoUrl: '',
    duration: '',
    category: 'Digital Marketing',
    language: 'Hindi',
    views: '',
    rating: '',
    author: '',
    date: '',
    tags: [],
    section: '',
    order: 0,
    featured: false,
    isActive: true
  });

  useEffect(() => {
    if (videoData) {
      setFormData(videoData);
    }
  }, [videoData]);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {videoData && videoData._id ? 'Edit Video' : 'Create New Video'}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => updateFormData('title', e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Author *</label>
          <input
            type="text"
            value={formData.author || ''}
            onChange={(e) => updateFormData('author', e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => updateFormData('description', e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={4}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL *</label>
          <input
            type="url"
            value={formData.thumbnail || ''}
            onChange={(e) => updateFormData('thumbnail', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Video URL *</label>
          <input
            type="url"
            value={formData.videoUrl || ''}
            onChange={(e) => updateFormData('videoUrl', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="https://example.com/video.mp4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
          <input
            type="text"
            value={formData.duration || ''}
            onChange={(e) => updateFormData('duration', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="12:45"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
          <select
            value={formData.category || 'All'}
            onChange={(e) => updateFormData('category', e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="All">All</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Business & Startup">Business & Startup</option>
            <option value="Communication">Communication</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Productivity">Productivity</option>
            <option value="AI Tools">AI Tools</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language *</label>
          <select
            value={formData.language || 'English'}
            onChange={(e) => updateFormData('language', e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Hinglish">Hinglish</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Views *</label>
          <input
            type="text"
            value={formData.views || ''}
            onChange={(e) => updateFormData('views', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="10K"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating (0-5) *</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={formData.rating || 4.0}
            onChange={(e) => updateFormData('rating', parseFloat(e.target.value))}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section *</label>
          <input
            type="text"
            value={formData.section || ''}
            onChange={(e) => updateFormData('section', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Trending Now"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date *</label>
        <input
          type="text"
          value={formData.date || ''}
          onChange={(e) => updateFormData('date', e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Apr 12, 2026"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
          <input
            type="number"
            min="0"
            value={formData.order || 0}
            onChange={(e) => updateFormData('order', parseInt(e.target.value))}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.featured || false}
              onChange={(e) => updateFormData('featured', e.target.checked)}
              className="rounded"
            />
            Featured Video
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.isActive !== false}
              onChange={(e) => updateFormData('isActive', e.target.checked)}
              className="rounded"
            />
            Active
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} />
          {saving ? 'Saving...' : 'Save Video'}
        </button>
      </div>
    </form>
  );
};

export default VideoEditor;
