import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Save, Plus, Trash2, Copy, Eye, Edit2, ChevronDown, ChevronUp } from 'lucide-react';

const CourseDetailEditor = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/admin/course-details', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(response.data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setMessage('Error fetching courses');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (courseData) => {
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      if (editingCourse) {
        await axios.put(`/api/admin/course-details/${editingCourse._id}`, courseData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage('Course updated successfully!');
      } else {
        await axios.post('/api/admin/course-details', courseData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage('Course created successfully!');
      }
      
      fetchCourses();
      setEditingCourse(null);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving course:', error);
      setMessage('Error saving course');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/admin/course-details/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Course deleted successfully!');
      fetchCourses();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting course:', error);
      setMessage('Error deleting course');
    }
  };

  const handleDuplicate = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`/api/admin/course-details/${courseId}/duplicate`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Course duplicated successfully!');
      fetchCourses();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error duplicating course:', error);
      setMessage('Error duplicating course');
    }
  };

  const toggleSection = (courseId, sectionIndex) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${courseId}-${sectionIndex}`]: !prev[`${courseId}-${sectionIndex}`]
    }));
  };

  const getDefaultCourseData = () => ({
    trainingProgramId: courses.length + 1,
    programName: '',
    hero: {
      title: '',
      subtitle: '',
      description: '',
      badge: 'Bestseller',
      rating: 4.8,
      ratingsCount: '0',
      studentsCount: '0',
      instructor: '',
      lastUpdated: new Date().toLocaleDateString('en-US', { year: '2-digit', month: '2-digit' }),
      language: 'English',
      previewImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      currentPrice: '',
      originalPrice: '',
      discountText: 'Limited time offer',
      guaranteeText: '30-Day Money-Back Guarantee'
    },
    learningPoints: [''],
    courseContent: {
      totalSections: '0',
      totalLectures: '0',
      totalLength: '0h 0m',
      sections: []
    },
    requirements: [''],
    description: '',
    courseIncludes: {
      videoHours: '0',
      articles: '0',
      downloadableResources: '0',
      accessOnDevices: true,
      lifetimeAccess: true,
      certificate: true
    }
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
        <h2 className="text-2xl font-bold text-gray-800">Course Detail Management</h2>
        <button
          onClick={() => setEditingCourse(getDefaultCourseData())}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add New Course
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {/* Courses List */}
      {!editingCourse && (
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Program {course.trainingProgramId}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">{course.programName}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{course.hero?.title}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>Price: {course.pricing?.currentPrice}</span>
                    <span>Students: {course.hero?.studentsCount}</span>
                    <span>Rating: {course.hero?.rating}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(`/course/${course.trainingProgramId}`, '_blank')}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    title="View Course"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => setEditingCourse(course)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                    title="Edit Course"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDuplicate(course._id)}
                    className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                    title="Duplicate Course"
                  >
                    <Copy size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    title="Delete Course"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Course Content Preview */}
              {course.courseContent?.sections && course.courseContent.sections.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-700 mb-2">Course Content:</h4>
                  <div className="space-y-2">
                    {course.courseContent.sections.map((section, index) => (
                      <div key={index} className="bg-gray-50 rounded p-3">
                        <div 
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleSection(course._id, index)}
                        >
                          <span className="font-medium text-gray-700">{section.title}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{section.lectures} lectures • {section.duration}</span>
                            {expandedSections[`${course._id}-${index}`] ? 
                              <ChevronUp size={16} /> : <ChevronDown size={16} />
                            }
                          </div>
                        </div>
                        {expandedSections[`${course._id}-${index}`] && section.lectureItems && (
                          <div className="mt-2 pl-4 space-y-1">
                            {section.lectureItems.map((item, itemIndex) => (
                              <div key={itemIndex} className="text-sm text-gray-600 flex justify-between">
                                <span>{item.title}</span>
                                <span>{item.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Course Editor */}
      {editingCourse && (
        <CourseEditorForm
          courseData={editingCourse}
          onSave={handleSave}
          onCancel={() => setEditingCourse(null)}
          saving={saving}
        />
      )}
    </div>
  );
};

const CourseEditorForm = ({ courseData, onSave, onCancel, saving }) => {
  const [formData, setFormData] = useState(courseData);

  const updateFormData = (path, value) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const addArrayItem = (path) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      const arrayKey = keys[keys.length - 1];
      if (arrayKey === 'learningPoints' || arrayKey === 'requirements') {
        current[arrayKey].push('');
      } else if (arrayKey === 'sections') {
        current[arrayKey].push({
          title: '',
          lectures: '0',
          duration: '0m',
          isExpanded: false,
          lectureItems: []
        });
      }
      
      return newData;
    });
  };

  const removeArrayItem = (path, index) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]].splice(index, 1);
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {formData._id ? 'Edit Course' : 'Create New Course'}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Training Program ID
          </label>
          <input
            type="number"
            value={formData.trainingProgramId}
            onChange={(e) => updateFormData('trainingProgramId', parseInt(e.target.value))}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Program Name
          </label>
          <input
            type="text"
            value={formData.programName}
            onChange={(e) => updateFormData('programName', e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Hero Section</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.hero?.title || ''}
            onChange={(e) => updateFormData('hero.title', e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
          <textarea
            value={formData.hero?.subtitle || ''}
            onChange={(e) => updateFormData('hero.subtitle', e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.hero?.description || ''}
            onChange={(e) => updateFormData('hero.description', e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows={4}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Badge</label>
            <input
              type="text"
              value={formData.hero?.badge || ''}
              onChange={(e) => updateFormData('hero.badge', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
            <input
              type="text"
              value={formData.hero?.instructor || ''}
              onChange={(e) => updateFormData('hero.instructor', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <input
              type="text"
              value={formData.hero?.language || ''}
              onChange={(e) => updateFormData('hero.language', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Pricing</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Price</label>
            <input
              type="text"
              value={formData.pricing?.currentPrice || ''}
              onChange={(e) => updateFormData('pricing.currentPrice', e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
            <input
              type="text"
              value={formData.pricing?.originalPrice || ''}
              onChange={(e) => updateFormData('pricing.originalPrice', e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
        </div>
      </div>

      {/* Learning Points */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">What You'll Learn</h4>
        {formData.learningPoints?.map((point, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={point}
              onChange={(e) => {
                const newPoints = [...formData.learningPoints];
                newPoints[index] = e.target.value;
                updateFormData('learningPoints', newPoints);
              }}
              className="flex-1 p-2 border rounded-lg"
              placeholder="Learning point"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('learningPoints', index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('learningPoints')}
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <Plus size={18} /> Add Learning Point
        </button>
      </div>

      {/* Requirements */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Requirements</h4>
        {formData.requirements?.map((requirement, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={requirement}
              onChange={(e) => {
                const newRequirements = [...formData.requirements];
                newRequirements[index] = e.target.value;
                updateFormData('requirements', newRequirements);
              }}
              className="flex-1 p-2 border rounded-lg"
              placeholder="Requirement"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('requirements', index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('requirements')}
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <Plus size={18} /> Add Requirement
        </button>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Course Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => updateFormData('description', e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={6}
          required
        />
      </div>

      {/* Course Content */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Course Content</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Sections</label>
            <input
              type="text"
              value={formData.courseContent?.totalSections || ''}
              onChange={(e) => updateFormData('courseContent.totalSections', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Lectures</label>
            <input
              type="text"
              value={formData.courseContent?.totalLectures || ''}
              onChange={(e) => updateFormData('courseContent.totalLectures', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Length</label>
            <input
              type="text"
              value={formData.courseContent?.totalLength || ''}
              onChange={(e) => updateFormData('courseContent.totalLength', e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="e.g., 22h 15m"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {formData.courseContent?.sections?.map((section, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h5 className="font-medium text-gray-700">Section {index + 1}</h5>
                <button
                  type="button"
                  onClick={() => removeArrayItem('courseContent.sections', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => {
                      const newSections = [...formData.courseContent.sections];
                      newSections[index].title = e.target.value;
                      updateFormData('courseContent.sections', newSections);
                    }}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lectures</label>
                  <input
                    type="text"
                    value={section.lectures}
                    onChange={(e) => {
                      const newSections = [...formData.courseContent.sections];
                      newSections[index].lectures = e.target.value;
                      updateFormData('courseContent.sections', newSections);
                    }}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    value={section.duration}
                    onChange={(e) => {
                      const newSections = [...formData.courseContent.sections];
                      newSections[index].duration = e.target.value;
                      updateFormData('courseContent.sections', newSections);
                    }}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('courseContent.sections')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <Plus size={18} /> Add Section
          </button>
        </div>
      </div>

      {/* Course Includes */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Course Includes</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Video Hours</label>
            <input
              type="text"
              value={formData.courseIncludes?.videoHours || ''}
              onChange={(e) => updateFormData('courseIncludes.videoHours', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Articles</label>
            <input
              type="text"
              value={formData.courseIncludes?.articles || ''}
              onChange={(e) => updateFormData('courseIncludes.articles', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Downloadable Resources</label>
            <input
              type="text"
              value={formData.courseIncludes?.downloadableResources || ''}
              onChange={(e) => updateFormData('courseIncludes.downloadableResources', e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.courseIncludes?.accessOnDevices || false}
              onChange={(e) => updateFormData('courseIncludes.accessOnDevices', e.target.checked)}
              className="rounded"
            />
            Access on mobile and TV
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.courseIncludes?.lifetimeAccess || false}
              onChange={(e) => updateFormData('courseIncludes.lifetimeAccess', e.target.checked)}
              className="rounded"
            />
            Full lifetime access
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.courseIncludes?.certificate || false}
              onChange={(e) => updateFormData('courseIncludes.certificate', e.target.checked)}
              className="rounded"
            />
            Certificate of completion
          </label>
        </div>
      </div>

      {/* Action Buttons */}
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
          {saving ? 'Saving...' : 'Save Course'}
        </button>
      </div>
    </form>
  );
};

export default CourseDetailEditor;
