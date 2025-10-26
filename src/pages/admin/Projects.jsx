import { useState, useEffect } from 'react';
import Modal from '../../components/ui/Modal';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Categories for dropdown
  const categories = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'E-commerce',
    'Digital Marketing',
    'UI/UX Design',
    'Data Analytics',
    'Cloud Solutions'
  ];

  // Status options
  const statusOptions = [
    { value: 'live', label: 'Live', color: 'bg-green-100 text-green-800' },
    { value: 'development', label: 'Development', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'launch_soon', label: 'Launch Soon', color: 'bg-blue-100 text-blue-800' }
  ];

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    status: 'development',
    description: '',
    image: null,
    imagePreview: '',
    client: '',
    duration: '',
    budget: '',
    technologies: [],
    features: [],
    challenges: '',
    solution: '',
    results: ''
  });

  useEffect(() => {
    // Load projects from localStorage on component mount
    const savedProjects = localStorage.getItem('kar_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const saveProjectsToStorage = (updatedProjects) => {
    localStorage.setItem('kar_projects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
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

  const handleArrayInput = (field, value) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: items
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      status: 'development',
      description: '',
      image: null,
      imagePreview: '',
      client: '',
      duration: '',
      budget: '',
      technologies: [],
      features: [],
      challenges: '',
      solution: '',
      results: ''
    });
    setEditingProject(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const projectData = {
      id: editingProject ? editingProject.id : Date.now(),
      ...formData,
      createdAt: editingProject ? editingProject.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedProjects;
    if (editingProject) {
      updatedProjects = projects.map(project => 
        project.id === editingProject.id ? projectData : project
      );
    } else {
      updatedProjects = [...projects, projectData];
    }

    saveProjectsToStorage(updatedProjects);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      technologies: project.technologies || [],
      features: project.features || []
    });
    setIsModalOpen(true);
  };

  const handleDelete = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== projectId);
      saveProjectsToStorage(updatedProjects);
    }
  };

  const openDetailModal = (project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const getStatusBadge = (status) => {
    const statusConfig = statusOptions.find(option => option.value === status);
    return statusConfig || statusOptions[1]; // Default to development
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects Management</h1>
          <p className="text-gray-600">Manage your project portfolio</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const statusConfig = getStatusBadge(project.status);
          return (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Image */}
              {project.imagePreview && (
                <div className="h-48 bg-gray-200">
                  <img 
                    src={project.imagePreview} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                    {statusConfig.label}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  <p><span className="font-medium">Category:</span> {project.category}</p>
                  {project.client && <p><span className="font-medium">Client:</span> {project.client}</p>}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openDetailModal(project)}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Details
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-600 hover:text-blue-700 p-1"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
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
          );
        })}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-600 mb-4">Get started by creating your first project</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
          >
            Add Your First Project
          </button>
        </div>
      )}

      {/* Add/Edit Project Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingProject ? 'Edit Project' : 'Add New Project'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Name
              </label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Client name"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Image
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
              placeholder="Brief description of the project"
            />
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
                {editingProject ? 'Update Project' : 'Save Project'}
              </button>
              {!editingProject && (
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit({ preventDefault: () => {} });
                    setShowDetailModal(true);
                    setSelectedProject({ ...formData, id: Date.now() });
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

      {/* Project Detail Modal */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="Project Details"
        size="xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <span>Category: {selectedProject.category}</span>
                <span>•</span>
                <span className={`px-2 py-1 rounded-full ${getStatusBadge(selectedProject.status).color}`}>
                  {getStatusBadge(selectedProject.status).label}
                </span>
              </div>
            </div>

            {selectedProject.imagePreview && (
              <div className="text-center">
                <img 
                  src={selectedProject.imagePreview} 
                  alt={selectedProject.title}
                  className="max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            <div className="prose max-w-none">
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                Add detailed content for this project (features, technologies, case study details, etc.)
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