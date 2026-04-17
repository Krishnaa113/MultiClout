import React, { useState, useEffect } from 'react';

const AboutEditor = ({ content, onSave, saving }) => {
  const [heroContent, setHeroContent] = useState({
    title: '',
    subtitle: '',
    badge: ''
  });
  
  const [story, setStory] = useState({
    title: '',
    subtitle: '',
    description1: '',
    description2: '',
    stats: []
  });
  
  const [features, setFeatures] = useState([]);
  const [skills, setSkills] = useState([]);

  // Initialize with content when component mounts
  useEffect(() => {
    if (content) {
      setHeroContent(content.hero || {
        title: "India's No.1\nBusiness Hub.",
        subtitle: '"We work as a ray of light in darkness so that you can choose the right career path with absolute clarity."',
        badge: 'Legacy of Excellence'
      });
      
      setStory(content.story || {
        title: 'Earn and Learn\nAt The Same Time.',
        subtitle: 'Multiclout is a premier organization providing unparalleled information on education and network marketing.',
        description1: 'We believe in total financial independence through practical skill development. In this rapidly transforming digital era, you just need to know how to start a company or how to build a lucrative career as a freelancer.',
        description2: 'By making yourself a highly-skilled professional, we ensure you stay ahead of the curve.',
        stats: [
          { label: 'Module Courses', value: '70+' },
          { label: 'Practical Focus', value: '100%' }
        ]
      });
      
      setFeatures(content.features || [
        {
          title: "Personal Branding",
          desc: "Build a magnetic online presence and establish yourself as an authority in your niche.",
          icon: "user"
        },
        {
          title: "Sales Improvement",
          desc: "Master high-ticket closing and psychological strategies to rapidly scale your conversions.",
          icon: "trending"
        },
        {
          title: "Brand Launching",
          desc: "Deploy go-to-market strategies that capture immediate attention and market share.",
          icon: "rocket"
        },
        {
          title: "Product Innovation",
          desc: "Learn to identify gaps in the market and design products that sell themselves.",
          icon: "lightbulb"
        },
        {
          title: "Revenue Growth",
          desc: "Unlock scalable financial structures tailored for freelance and modern digital agencies.",
          icon: "dollar"
        },
        {
          title: "Creating Future Leaders",
          desc: "Develop impressive communication, critical thinking, and time-management skills.",
          icon: "star"
        },
        {
          title: "Viral Marketing",
          desc: "Execute campaigns designed for algorithmic growth across modern social networks.",
          icon: "share"
        }
      ]);
      
      setSkills(content.skills || [
        { title: 'Personality', desc: 'Build an impressive and magnetic personality.', icon: 'trophy', color: 'white' },
        { title: 'Speaking', desc: 'Master the art of high-impact communication.', icon: 'mic', color: 'dark' },
        { title: 'Time Mgt.', desc: 'Optimize routines for maximum productivity.', icon: 'clock', color: 'primary' },
        { title: 'Growth', desc: 'Step consistently into high-earning environments.', icon: 'rocket', color: 'white' }
      ]);
    }
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      hero: heroContent,
      story,
      features,
      skills
    });
  };

  const updateFeature = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  const updateSkill = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const updateStoryStat = (index, field, value) => {
    const newStats = [...story.stats];
    newStats[index][field] = value;
    setStory({ ...story, stats: newStats });
  };

  const addFeature = () => {
    setFeatures([...features, { title: '', desc: '', icon: 'star' }]);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    setSkills([...skills, { title: '', desc: '', icon: 'star', color: 'white' }]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const addStoryStat = () => {
    setStory({ ...story, stats: [...story.stats, { label: '', value: '' }] });
  };

  const removeStoryStat = (index) => {
    setStory({ ...story, stats: story.stats.filter((_, i) => i !== index) });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">About Us Page Editor</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <textarea
                value={heroContent.title}
                onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="India's No.1\nBusiness Hub."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <textarea
                value={heroContent.subtitle}
                onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Quote or subtitle text..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Badge Text</label>
              <input
                type="text"
                value={heroContent.badge}
                onChange={(e) => setHeroContent({...heroContent, badge: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Legacy of Excellence"
              />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Story Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <textarea
                value={story.title}
                onChange={(e) => setStory({...story, title: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={2}
                placeholder="Earn and Learn\nAt The Same Time."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <input
                type="text"
                value={story.subtitle}
                onChange={(e) => setStory({...story, subtitle: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Company description..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description 1</label>
              <textarea
                value={story.description1}
                onChange={(e) => setStory({...story, description1: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="First paragraph description..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description 2</label>
              <textarea
                value={story.description2}
                onChange={(e) => setStory({...story, description2: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Second paragraph description..."
              />
            </div>
          </div>
          
          {/* Story Stats */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-md font-semibold">Stats</h4>
              <button
                type="button"
                onClick={addStoryStat}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Stat
              </button>
            </div>
            <div className="space-y-4">
              {story.stats.map((stat, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => updateStoryStat(index, 'label', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Module Courses"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Value</label>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => updateStoryStat(index, 'value', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="70+"
                      />
                    </div>
                  </div>
                  {story.stats.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStoryStat(index)}
                      className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <button
              type="button"
              onClick={addFeature}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Feature
            </button>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => updateFeature(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Feature title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Icon (emoji)</label>
                    <input
                      type="text"
                      value={feature.icon}
                      onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="user, trending, rocket, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={feature.desc}
                      onChange={(e) => updateFeature(index, 'desc', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Feature description"
                    />
                  </div>
                </div>
                {features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Skills Grid</h3>
            <button
              type="button"
              onClick={addSkill}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Skill
            </button>
          </div>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={skill.title}
                      onChange={(e) => updateSkill(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Skill title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Icon (emoji)</label>
                    <input
                      type="text"
                      value={skill.icon}
                      onChange={(e) => updateSkill(index, 'icon', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="trophy, mic, clock, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={skill.desc}
                      onChange={(e) => updateSkill(index, 'desc', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Skill description"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                    <select
                      value={skill.color}
                      onChange={(e) => updateSkill(index, 'color', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="white">White</option>
                      <option value="dark">Dark</option>
                      <option value="primary">Primary (Blue)</option>
                    </select>
                  </div>
                </div>
                {skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutEditor;
