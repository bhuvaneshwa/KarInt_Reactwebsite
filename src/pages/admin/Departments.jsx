import { useState, useEffect } from 'react';
import Modal from '../../components/ui/Modal';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    imagePreview: '',
    keyFeatures: [],
    responsibilities: [],
    teamSize: '',
    headOfDepartment: '',
    established: '',
    location: ''
  });

  const [featureInput, setFeatureInput] = useState('');

  useEffect(() => {
    // Load departments from localStorage on component mount
    const savedDepartments = localStorage.getItem('kar_departments');
    if (savedDepartments) {
      setDepartments(JSON.parse(savedDepartments));
    }
  }, []);

  const saveDepartmentsToStorage = (updatedDepartments) => {
    localStorage.setItem('kar_departments', JSON.stringify(updatedDepartments));
    setDepartments(updatedDepartments);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData(prev => ({
        ...prev,
        keyFeatures: [...prev.keyFeatures, featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      keyFeatures: prev.keyFeatures.filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: null,
      imagePreview: '',
      keyFeatures: [],
      responsibilities: [],
      teamSize: '',
      headOfDepartment: '',
      established: '',
      location: ''
    });
    setFeatureInput('');
    setEditingDepartment(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const departmentData = {
      id: editingDepartment ? editingDepartment.id : Date.now(),
      ...formData,
      createdAt: editingDepartment ? editingDepartment.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedDepartments;
    if (editingDepartment) {
      updatedDepartments = departments.map(dept => 
        dept.id === editingDepartment.id ? departmentData : dept
      );
    } else {
      updatedDepartments = [...departments, departmentData];
    }

    saveDepartmentsToStorage(updatedDepartments);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (department) => {
    setEditingDepartment(department);
    setFormData({
      ...department,
      keyFeatures: department.keyFeatures || [],
      responsibilities: department.responsibilities || []
    });
    setIsModalOpen(true);
  };

  const handleDelete = (departmentId) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      const updatedDepartments = departments.filter(dept => dept.id !== departmentId);
      saveDepartmentsToStorage(updatedDepartments);
    }
  };

  const openDetailModal = (department) => {
    setSelectedDepartment(department);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Departments Management</h1>
          <p className="text-gray-600">Manage your company departments and teams</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Department
        </button>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div key={department.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Department Image */}
            {department.imagePreview && (
              <div className="h-48 bg-gray-200">
                <img 
                  src={department.imagePreview} 
                  alt={department.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Department Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {department.title}
                </h3>
                {department.teamSize && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {department.teamSize} members
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {department.description}
              </p>
              
              {/* Key Features Tags */}
              {department.keyFeatures && department.keyFeatures.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {department.keyFeatures.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {department.keyFeatures.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        +{department.keyFeatures.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-500 mb-4">
                {department.headOfDepartment && (
                  <p><span className="font-medium">Head:</span> {department.headOfDepartment}</p>
                )}
                {department.established && (
                  <p><span className="font-medium">Established:</span> {department.established}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => openDetailModal(department)}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  View Details
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(department)}
                    className="text-blue-600 hover:text-blue-700 p-1"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(department.id)}
                    className="text-red-600 hover:text-red-700 p-1"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {departments.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No departments yet</h3>
          <p className="text-gray-600 mb-4">Get started by creating your first department</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
          >
            Add Your First Department
          </button>
        </div>
      )}

      {/* Add/Edit Department Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingDepartment ? 'Edit Department' : 'Add New Department'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., Web Development, Marketing, HR"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Size
              </label>
              <input
                type="text"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., 15, 8-10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Head of Department
              </label>
              <input
                type="text"
                name="headOfDepartment"
                value={formData.headOfDepartment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Department head name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Established
              </label>
              <input
                type="text"
                name="established"
                value={formData.established}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., 2020, January 2021"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            {formData.imagePreview && (
              <div className="mt-2">
                <img 
                  src={formData.imagePreview} 
                  alt="Preview" 
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Brief description of the department and its role"
            />
          </div>

          {/* Key Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Features
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Add a key feature or capability"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addFeature();
                  }
                }}
              />
              <button
                type="button"
                onClick={addFeature}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
            
            {/* Features Tags */}
            {formData.keyFeatures.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.keyFeatures.map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center gap-2"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
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
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
              >
                {editingDepartment ? 'Update Department' : 'Save Department'}
              </button>
              {!editingDepartment && (
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit({ preventDefault: () => {} });
                    setShowDetailModal(true);
                    setSelectedDepartment({ ...formData, id: Date.now() });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Save & Add Details
                </button>
              )}
            </div>
          </div>
        </form>
      </Modal>

      {/* Department Detail Modal */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="Department Details"
        size="xl"
      >
        {selectedDepartment && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedDepartment.title}</h2>
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                {selectedDepartment.teamSize && <span>Team Size: {selectedDepartment.teamSize}</span>}
                {selectedDepartment.established && (
                  <>
                    <span>•</span>
                    <span>Established: {selectedDepartment.established}</span>
                  </>
                )}
              </div>
            </div>

            {selectedDepartment.imagePreview && (
              <div className="text-center">
                <img 
                  src={selectedDepartment.imagePreview} 
                  alt={selectedDepartment.title}
                  className="max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            <div className="prose max-w-none">
              <p className="text-gray-700">{selectedDepartment.description}</p>
            </div>

            {selectedDepartment.keyFeatures && selectedDepartment.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDepartment.keyFeatures.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                Add detailed content for this department (team structure, projects, goals, etc.)
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium">
                Add Detailed Content
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}