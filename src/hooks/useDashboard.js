import { useState, useEffect } from 'react';
import axios from 'axios';

// Create axios instance for dashboard API
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const useDashboard = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get dashboard content for users
  const getDashboardContent = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/dashboard/content');
      setContent(response.data.data);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to load dashboard content');
    } finally {
      setLoading(false);
    }
  };

  // Admin functions
  const getAdminContent = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/admin/dashboard-content');
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to load admin content');
    } finally {
      setLoading(false);
    }
  };

  const createContent = async (contentData) => {
    try {
      setLoading(true);
      const response = await api.post('/api/admin/dashboard-content', contentData);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create content');
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (id, contentData) => {
    try {
      setLoading(true);
      const response = await api.put(`/api/admin/dashboard-content/${id}`, contentData);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update content');
    } finally {
      setLoading(false);
    }
  };

  const deleteContent = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/api/admin/dashboard-content/${id}`);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete content');
    } finally {
      setLoading(false);
    }
  };

  // Settings functions
  const getSettings = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/admin/settings');
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (settingsData) => {
    try {
      setLoading(true);
      const response = await api.put('/api/admin/settings', settingsData);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  // User management
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/admin/users');
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (id, role) => {
    try {
      setLoading(true);
      const response = await api.put(`/api/admin/users/${id}/role`, { user_type: role });
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update user role');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardContent();
  }, []);

  return {
    content,
    loading,
    error,
    getDashboardContent,
    getAdminContent,
    createContent,
    updateContent,
    deleteContent,
    getSettings,
    updateSettings,
    getAllUsers,
    updateUserRole
  };
};

export default useDashboard;
