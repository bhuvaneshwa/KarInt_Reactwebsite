import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function CounterManagement() {
  const [counters, setCounters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCounter, setEditingCounter] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    number: '',
    suffix: '',
    prefix: '',
    description: '',
    icon: '',
    color: '#3B82F6',
    animationDuration: '2000',
    isActive: true,
    order: 0
  });

  // Predefined icon options
  const iconOptions = [
    { value: 'users', label: 'Users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
    { value: 'projects', label: 'Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { value: 'experience', label: 'Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 'clients', label: 'Clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { value: 'awards', label: 'Awards', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { value: 'coffee', label: 'Coffee Cups', icon: 'M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4' },
    { value: 'code', label: 'Lines of Code', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { value: 'rocket', label: 'Launches', icon: 'M12 15v5s-3-1-6-3 3-4 3-4-1-1-2-2 1-3 3-3 5 1 5 1-1 5-3 3z M12 15V8a3 3 0 00-3-3H6' }
  ];

  const colorOptions = [
    { value: '#3B82F6', label: 'Blue' },
    { value: '#10B981', label: 'Green' },
    { value: '#F59E0B', label: 'Yellow' },
    { value: '#EF4444', label: 'Red' },
    { value: '#8B5CF6', label: 'Purple' },
    { value: '#06B6D4', label: 'Cyan' },
    { value: '#84CC16', label: 'Lime' },
    { value: '#F97316', label: 'Orange' }
  ];

  useEffect(() => {
    const savedCounters = localStorage.getItem('kar_counters');
    if (savedCounters) {
      const parsedCounters = JSON.parse(savedCounters);
      parsedCounters.sort((a, b) => a.order - b.order);
      setCounters(parsedCounters);
    }
  }, []);

  const saveCountersToStorage = (updatedCounters) => {
    const countersWithOrder = updatedCounters.map((counter, index) => ({
      ...counter,
      order: index
    }));
    localStorage.setItem('kar_counters', JSON.stringify(countersWithOrder));
    setCounters(countersWithOrder);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      number: '',
      suffix: '',
      prefix: '',
      description: '',
      icon: '',
      color: '#3B82F6',
      animationDuration: '2000',
      isActive: true,
      order: counters.length
    });
    setEditingCounter(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const counterData = {
      id: editingCounter ? editingCounter.id : Date.now(),
      ...formData,
      number: parseInt(formData.number) || 0,
      animationDuration: parseInt(formData.animationDuration) || 2000,
      order: editingCounter ? editingCounter.order : counters.length,
      createdAt: editingCounter ? editingCounter.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedCounters;
    if (editingCounter) {
      updatedCounters = counters.map(counter => 
        counter.id === editingCounter.id ? counterData : counter
      );
    } else {
      updatedCounters = [...counters, counterData];
    }

    saveCountersToStorage(updatedCounters);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (counter) => {
    setEditingCounter(counter);
    setFormData({
      ...counter,
      number: counter.number.toString(),
      animationDuration: counter.animationDuration.toString()
    });
    setIsModalOpen(true);
  };

  const handleDelete = (counterId) => {
    if (window.confirm('Are you sure you want to delete this counter?')) {
      const updatedCounters = counters.filter(counter => counter.id !== counterId);
      saveCountersToStorage(updatedCounters);
    }
  };

  const toggleCounterStatus = (counterId) => {
    const updatedCounters = counters.map(counter =>
      counter.id === counterId ? { ...counter, isActive: !counter.isActive } : counter
    );
    saveCountersToStorage(updatedCounters);
  };

  const getIconPath = (iconType) => {
    const icon = iconOptions.find(opt => opt.value === iconType);
    return icon ? icon.icon : '';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Counter Management</h1>
          <p className="text-gray-600">Manage animated counters and statistics for the homepage</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Counter
        </button>
      </div>

      {/* Counters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {counters.map((counter, index) => (
          <div key={counter.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {/* Counter Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                {counter.icon && (
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: counter.color }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(counter.icon)} />
                    </svg>
                  </div>
                )}
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    counter.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {counter.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-1">
                <button
                  onClick={() => toggleCounterStatus(counter.id)}
                  className={`p-1 rounded text-xs ${
                    counter.isActive 
                      ? 'text-red-600 hover:bg-red-50' 
                      : 'text-green-600 hover:bg-green-50'
                  }`}
                  title={counter.isActive ? 'Deactivate' : 'Activate'}
                >
                  {counter.isActive ? 'Hide' : 'Show'}
                </button>
                
                <button
                  onClick={() => handleEdit(counter)}
                  className="text-blue-600 hover:bg-blue-50 p-1 rounded"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>

                <button
                  onClick={() => handleDelete(counter.id)}
                  className="text-red-600 hover:bg-red-50 p-1 rounded"
                  title="Delete"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Counter Display */}
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: counter.color }}>
                {counter.prefix}{counter.number.toLocaleString()}{counter.suffix}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{counter.title}</h3>
              {counter.description && (
                <p className="text-sm text-gray-600 line-clamp-2">{counter.description}</p>
              )}
            </div>

            {/* Counter Info */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Order: {index + 1}</span>
                <span>Duration: {counter.animationDuration}ms</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {counters.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No counters yet</h3>
          <p className="text-gray-600 mb-4">Create animated counters to showcase your achievements</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
          >
            Create Your First Counter
          </button>
        </div>
      )}

      {/* Add/Edit Counter Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingCounter ? 'Edit Counter' : 'Add New Counter'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Counter Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., Happy Clients, Projects Completed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number *
              </label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., 500, 1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prefix
              </label>
              <input
                type="text"
                name="prefix"
                value={formData.prefix}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., $, ₹"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Suffix
              </label>
              <input
                type="text"
                name="suffix"
                value={formData.suffix}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., +, %, K"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Brief description about this statistic"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icon
              </label>
              <select
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select an icon</option>
                {iconOptions.map(icon => (
                  <option key={icon.value} value={icon.value}>{icon.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {colorOptions.map(color => (
                  <option key={color.value} value={color.value}>{color.label}</option>
                ))}
              </select>
              <div className="mt-1 flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded border"
                  style={{ backgroundColor: formData.color }}
                ></div>
                <span className="text-sm text-gray-500">Preview</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Animation Duration (milliseconds)
            </label>
            <input
              type="number"
              name="animationDuration"
              value={formData.animationDuration}
              onChange={handleInputChange}
              min="500"
              max="5000"
              step="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="2000"
            />
            <p className="text-sm text-gray-500 mt-1">How long the counting animation should take (500-5000ms)</p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Active (visible on homepage)
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                resetForm();
              }}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
            >
              {editingCounter ? 'Update Counter' : 'Save Counter'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}