import React, { useState } from 'react';

const SeekhoGurusEditor = ({ content, onSave, saving }) => {
  const [title, setTitle] = useState(content.title || '');
  const [subtitle, setSubtitle] = useState(content.subtitle || '');
  const [gurus, setGurus] = useState(content.gurus || [
    { name: '', title: '', description: '', image: '', expertise: '' },
    { name: '', title: '', description: '', image: '', expertise: '' },
    { name: '', title: '', description: '', image: '', expertise: '' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      title,
      subtitle,
      gurus
    });
  };

  const addGuru = () => {
    setGurus([...gurus, { name: '', title: '', description: '', image: '', expertise: '' }]);
  };

  const removeGuru = (index) => {
    setGurus(gurus.filter((_, i) => i !== index));
  };

  const updateGuru = (index, field, value) => {
    const newGurus = [...gurus];
    newGurus[index][field] = value;
    setGurus(newGurus);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Seekho Gurus Editor</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Section Headers</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Main Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Learn from the best"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle/Description
              </label>
              <textarea
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Our expert instructors bring years of industry experience..."
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Gurus</h3>
            <button
              type="button"
              onClick={addGuru}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Guru
            </button>
          </div>
          
          <div className="space-y-4">
            {gurus.map((guru, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={guru.name}
                      onChange={(e) => updateGuru(index, 'name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Dr. Rajesh Kumar"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title/Position
                    </label>
                    <input
                      type="text"
                      value={guru.title}
                      onChange={(e) => updateGuru(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Senior Business Consultant"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expertise
                  </label>
                  <input
                    type="text"
                    value={guru.expertise}
                    onChange={(e) => updateGuru(index, 'expertise', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Business Strategy, Marketing, Finance"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={guru.description}
                    onChange={(e) => updateGuru(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description about the guru..."
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    value={guru.image}
                    onChange={(e) => updateGuru(index, 'image', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter image URL"
                  />
                </div>
                
                {gurus.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeGuru(index)}
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

export default SeekhoGurusEditor;
