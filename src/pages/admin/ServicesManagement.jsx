import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Modal from '../../components/ui/Modal';

export default function ServicesManagement() {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    image: null,
    imagePreview: '',
    icon: '',
    price: '',
    duration: '',
    features: [],
    technologies: [],
    category: '',
    isActive: true,
    order: 0
  });

  const [featureInput, setFeatureInput] = useState('');
  const [technologyInput, setTechnologyInput] = useState('');

  const serviceCategories = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'Digital Marketing',
    'UI/UX Design',
    'Graphic Design',
    'Consulting',
    'Maintenance & Support'
  ];

  useEffect(() => {
    // Load services from localStorage on component mount
    const savedServices = localStorage.getItem('kar_services');
    if (savedServices) {
      const parsedServices = JSON.parse(savedServices);
      // Sort by order
      parsedServices.sort((a, b) => a.order - b.order);
      setServices(parsedServices);
    }
  }, []);

  const saveServicesToStorage = (updatedServices) => {
    // Update order based on array index
    const servicesWithOrder = updatedServices.map((service, index) => ({
      ...service,
      order: index
    }));
    localStorage.setItem('kar_services', JSON.stringify(servicesWithOrder));
    setServices(servicesWithOrder);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
        features: [...prev.features, featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addTechnology = () => {
    if (technologyInput.trim()) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, technologyInput.trim()]
      }));
      setTechnologyInput('');
    }
  };

  const removeTechnology = (index) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      shortDescription: '',
      image: null,
      imagePreview: '',
      icon: '',
      price: '',
      duration: '',
      features: [],
      technologies: [],
      category: '',
      isActive: true,
      order: services.length
    });
    setFeatureInput('');
    setTechnologyInput('');
    setEditingService(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceData = {
      id: editingService ? editingService.id : Date.now(),
      ...formData,
      order: editingService ? editingService.order : services.length,
      createdAt: editingService ? editingService.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedServices;
    if (editingService) {
      updatedServices = services.map(service => 
        service.id === editingService.id ? serviceData : service
      );
    } else {
      updatedServices = [...services, serviceData];
    }

    saveServicesToStorage(updatedServices);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      ...service,
      features: service.features || [],
      technologies: service.technologies || []
    });
    setIsModalOpen(true);
  };

  const handleDelete = (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(service => service.id !== serviceId);
      saveServicesToStorage(updatedServices);
    }
  };

  const toggleServiceStatus = (serviceId) => {
    const updatedServices = services.map(service =>
      service.id === serviceId ? { ...service, isActive: !service.isActive } : service
    );
    saveServicesToStorage(updatedServices);
  };

  const openDetailModal = (service) => {
    setSelectedService(service);
    setShowDetailModal(true);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(services);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    saveServicesToStorage(items);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
          <p className="text-gray-600">Manage your service offerings and ordering</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Service
        </button>
      </div>

      {/* Services List with Drag & Drop */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Services (Drag to reorder)</h2>
          <p className="text-sm text-gray-600">The order here determines how services appear on your website</p>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="services">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="p-4">
                {services.map((service, index) => (
                  <Draggable key={service.id} draggableId={service.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`bg-gray-50 rounded-lg p-4 mb-3 border transition-all ${
                          snapshot.isDragging ? 'shadow-lg rotate-2' : 'hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {/* Drag Handle */}
                          <div {...provided.dragHandleProps} className="cursor-grab active:cursor-grabbing">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            </svg>
                          </div>

                          {/* Service Image */}
                          {service.imagePreview && (
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={service.imagePreview} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}

                          {/* Service Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                service.isActive 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {service.isActive ? 'Active' : 'Inactive'}
                              </span>
                              {service.price && (
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                  ₹{service.price}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                              {service.shortDescription || service.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>Category: {service.category}</span>
                              {service.duration && <span>Duration: {service.duration}</span>}
                              <span>Order: {index + 1}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleServiceStatus(service.id)}
                              className={`p-2 rounded-lg ${
                                service.isActive 
                                  ? 'text-red-600 hover:bg-red-50' 
                                  : 'text-green-600 hover:bg-green-50'
                              }`}
                              title={service.isActive ? 'Deactivate' : 'Activate'}
                            >
                              {service.isActive ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              )}
                            </button>
                            
                            <button
                              onClick={() => openDetailModal(service)}
                              className="text-primary hover:bg-primary/10 p-2 rounded-lg"
                              title="View Details"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>

                            <button
                              onClick={() => handleEdit(service)}
                              className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
                              title="Edit"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>

                            <button
                              onClick={() => handleDelete(service.id)}
                              className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                              title="Delete"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Empty State */}
        {services.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services yet</h3>
            <p className="text-gray-600 mb-4">Get started by creating your first service</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
            >
              Add Your First Service
            </button>
          </div>
        )}
      </div>

      {/* Add/Edit Service Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingService ? 'Edit Service' : 'Add New Service'}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., Web Development, Mobile Apps"
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
                {serviceCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (₹)
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., 50,000 or Starting from 25,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., 2-3 weeks, 1-2 months"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Image
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

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short Description *
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Brief description for cards and listings"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Detailed description for service pages"
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Features
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Add a service feature"
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
            
            {formData.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.features.map((feature, index) => (
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

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={technologyInput}
                onChange={(e) => setTechnologyInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Add a technology"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTechnology();
                  }
                }}
              />
              <button
                type="button"
                onClick={addTechnology}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
            
            {formData.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm flex items-center gap-2"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTechnology(index)}
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
                {editingService ? 'Update Service' : 'Save Service'}
              </button>
              {!editingService && (
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit({ preventDefault: () => {} });
                    setShowDetailModal(true);
                    setSelectedService({ ...formData, id: Date.now() });
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

      {/* Service Detail Modal */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="Service Details"
        size="xl"
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <span>Category: {selectedService.category}</span>
                {selectedService.price && (
                  <>
                    <span>•</span>
                    <span>Price: ₹{selectedService.price}</span>
                  </>
                )}
                {selectedService.duration && (
                  <>
                    <span>•</span>
                    <span>Duration: {selectedService.duration}</span>
                  </>
                )}
              </div>
            </div>

            {selectedService.imagePreview && (
              <div className="text-center">
                <img 
                  src={selectedService.imagePreview} 
                  alt={selectedService.title}
                  className="max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            <div className="prose max-w-none">
              <p className="text-gray-700">{selectedService.description || selectedService.shortDescription}</p>
            </div>

            {selectedService.features && selectedService.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.features.map((feature, index) => (
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

            {selectedService.technologies && selectedService.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                Add detailed content for this service (pricing plans, process, case studies, etc.)
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