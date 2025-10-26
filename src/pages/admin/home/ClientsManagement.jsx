import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function ClientsManagement() {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    logo: null,
    logoPreview: '',
    website: '',
    email: '',
    phone: '',
    description: '',
    projectTitle: '',
    projectDescription: '',
    servicesProvided: [],
    projectValue: '',
    projectDuration: '',
    location: '',
    isActive: true,
    isFeatured: false,
    order: 0
  });

  const [serviceInput, setServiceInput] = useState('');

  // Industry options
  const industryOptions = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'E-commerce',
    'Manufacturing',
    'Real Estate',
    'Hospitality',
    'Retail',
    'Automotive',
    'Food & Beverage',
    'Non-Profit',
    'Government',
    'Consulting',
    'Other'
  ];

  useEffect(() => {
    const savedClients = localStorage.getItem('kar_clients');
    if (savedClients) {
      const parsedClients = JSON.parse(savedClients);
      parsedClients.sort((a, b) => a.order - b.order);
      setClients(parsedClients);
    }
  }, []);

  const saveClientsToStorage = (updatedClients) => {
    const clientsWithOrder = updatedClients.map((client, index) => ({
      ...client,
      order: index
    }));
    localStorage.setItem('kar_clients', JSON.stringify(clientsWithOrder));
    setClients(clientsWithOrder);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          logo: file,
          logoPreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addService = () => {
    if (serviceInput.trim()) {
      setFormData(prev => ({
        ...prev,
        servicesProvided: [...prev.servicesProvided, serviceInput.trim()]
      }));
      setServiceInput('');
    }
  };

  const removeService = (index) => {
    setFormData(prev => ({
      ...prev,
      servicesProvided: prev.servicesProvided.filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      industry: '',
      logo: null,
      logoPreview: '',
      website: '',
      email: '',
      phone: '',
      description: '',
      projectTitle: '',
      projectDescription: '',
      servicesProvided: [],
      projectValue: '',
      projectDuration: '',
      location: '',
      isActive: true,
      isFeatured: false,
      order: clients.length
    });
    setServiceInput('');
    setEditingClient(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const clientData = {
      id: editingClient ? editingClient.id : Date.now(),
      ...formData,
      order: editingClient ? editingClient.order : clients.length,
      createdAt: editingClient ? editingClient.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedClients;
    if (editingClient) {
      updatedClients = clients.map(client => 
        client.id === editingClient.id ? clientData : client
      );
    } else {
      updatedClients = [...clients, clientData];
    }

    saveClientsToStorage(updatedClients);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (client) => {
    setEditingClient(client);
    setFormData({
      ...client,
      servicesProvided: client.servicesProvided || []
    });
    setIsModalOpen(true);
  };

  const handleDelete = (clientId) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      const updatedClients = clients.filter(client => client.id !== clientId);
      saveClientsToStorage(updatedClients);
    }
  };

  const toggleClientStatus = (clientId) => {
    const updatedClients = clients.map(client =>
      client.id === clientId ? { ...client, isActive: !client.isActive } : client
    );
    saveClientsToStorage(updatedClients);
  };

  const toggleFeatured = (clientId) => {
    const updatedClients = clients.map(client =>
      client.id === clientId ? { ...client, isFeatured: !client.isFeatured } : client
    );
    saveClientsToStorage(updatedClients);
  };

  const openDetailModal = (client) => {
    setSelectedClient(client);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients Management</h1>
          <p className="text-gray-600">Manage client portfolio and showcase</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Client
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-gray-900">{clients.length}</div>
          <div className="text-sm text-gray-600">Total Clients</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-green-600">{clients.filter(c => c.isActive).length}</div>
          <div className="text-sm text-gray-600">Active Clients</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-blue-600">{clients.filter(c => c.isFeatured).length}</div>
          <div className="text-sm text-gray-600">Featured Clients</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-purple-600">{new Set(clients.map(c => c.industry)).size}</div>
          <div className="text-sm text-gray-600">Industries</div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <div key={client.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Client Logo */}
            <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
              {client.logoPreview ? (
                <img 
                  src={client.logoPreview} 
                  alt={client.company}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Client Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {client.company}
                  </h3>
                  <p className="text-sm text-gray-600">{client.industry}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    client.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {client.isActive ? 'Active' : 'Inactive'}
                  </span>
                  {client.isFeatured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              
              {client.name && (
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Contact:</span> {client.name}
                </p>
              )}

              {client.projectTitle && (
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Project:</span> {client.projectTitle}
                </p>
              )}

              {client.servicesProvided && client.servicesProvided.length > 0 && (
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {client.servicesProvided.slice(0, 2).map((service, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
                      >
                        {service}
                      </span>
                    ))}
                    {client.servicesProvided.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        +{client.servicesProvided.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-500 mb-4">
                {client.location && <p><span className="font-medium">Location:</span> {client.location}</p>}
                {client.projectValue && <p><span className="font-medium">Value:</span> ₹{client.projectValue}</p>}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => openDetailModal(client)}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  View Details
                </button>
                <div className="flex gap-1">
                  <button
                    onClick={() => toggleFeatured(client.id)}
                    className={`p-1 rounded text-xs ${
                      client.isFeatured 
                        ? 'text-yellow-600 bg-yellow-50' 
                        : 'text-gray-400 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                    title={client.isFeatured ? 'Remove from featured' : 'Add to featured'}
                  >
                    <svg className="w-4 h-4" fill={client.isFeatured ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => toggleClientStatus(client.id)}
                    className={`p-1 rounded text-xs ${
                      client.isActive 
                        ? 'text-red-600 hover:bg-red-50' 
                        : 'text-green-600 hover:bg-green-50'
                    }`}
                    title={client.isActive ? 'Deactivate' : 'Activate'}
                  >
                    {client.isActive ? 'Hide' : 'Show'}
                  </button>
                  
                  <button
                    onClick={() => handleEdit(client)}
                    className="text-blue-600 hover:bg-blue-50 p-1 rounded"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:bg-red-50 p-1 rounded"
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
      {clients.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No clients yet</h3>
          <p className="text-gray-600 mb-4">Start building your client portfolio</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
          >
            Add Your First Client
          </button>
        </div>
      )}

      {/* Add/Edit Client Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingClient ? 'Edit Client' : 'Add New Client'}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., ABC Corporation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Primary contact name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select Industry</option>
                {industryOptions.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="City, Country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="https://company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="contact@company.com"
              />
            </div>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            {formData.logoPreview && (
              <div className="mt-2">
                <img 
                  src={formData.logoPreview} 
                  alt="Preview" 
                  className="w-32 h-20 object-contain border rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Project Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Main project name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Value (₹)
                </label>
                <input
                  type="text"
                  name="projectValue"
                  value={formData.projectValue}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="e.g., 5,00,000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Brief description of the project"
              />
            </div>
          </div>

          {/* Services Provided */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services Provided
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={serviceInput}
                onChange={(e) => setServiceInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Add a service"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addService();
                  }
                }}
              />
              <button
                type="button"
                onClick={addService}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
            
            {formData.servicesProvided.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.servicesProvided.map((service, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm flex items-center gap-2"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={() => removeService(index)}
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

          {/* Status */}
          <div className="flex gap-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Active (visible on website)
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Featured client
              </label>
            </div>
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
              {editingClient ? 'Update Client' : 'Save Client'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Client Detail Modal */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="Client Details"
        size="lg"
      >
        {selectedClient && (
          <div className="space-y-6">
            <div className="text-center">
              {selectedClient.logoPreview && (
                <div className="mb-4">
                  <img 
                    src={selectedClient.logoPreview} 
                    alt={selectedClient.company}
                    className="max-w-32 max-h-20 mx-auto object-contain"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedClient.company}</h2>
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <span>Industry: {selectedClient.industry}</span>
                {selectedClient.location && (
                  <>
                    <span>•</span>
                    <span>Location: {selectedClient.location}</span>
                  </>
                )}
              </div>
            </div>

            {selectedClient.projectTitle && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project: {selectedClient.projectTitle}</h3>
                {selectedClient.projectDescription && (
                  <p className="text-gray-700 mb-3">{selectedClient.projectDescription}</p>
                )}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {selectedClient.projectValue && (
                    <div>
                      <span className="font-medium">Value:</span> ₹{selectedClient.projectValue}
                    </div>
                  )}
                  {selectedClient.projectDuration && (
                    <div>
                      <span className="font-medium">Duration:</span> {selectedClient.projectDuration}
                    </div>
                  )}
                </div>
              </div>
            )}

            {selectedClient.servicesProvided && selectedClient.servicesProvided.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedClient.servicesProvided.map((service, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(selectedClient.website || selectedClient.email) && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  {selectedClient.name && (
                    <div><span className="font-medium">Contact Person:</span> {selectedClient.name}</div>
                  )}
                  {selectedClient.email && (
                    <div><span className="font-medium">Email:</span> {selectedClient.email}</div>
                  )}
                  {selectedClient.website && (
                    <div>
                      <span className="font-medium">Website:</span> 
                      <a href={selectedClient.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        {selectedClient.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}