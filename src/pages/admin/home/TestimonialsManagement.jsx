import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    testimonial: '',
    rating: 5,
    photo: null,
    photoPreview: '',
    email: '',
    linkedin: '',
    projectType: '',
    date: '',
    isActive: true,
    isFeatured: false,
    order: 0
  });

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'Digital Marketing',
    'UI/UX Design',
    'Consulting',
    'E-commerce',
    'Custom Software',
    'Maintenance & Support'
  ];

  useEffect(() => {
    const savedTestimonials = localStorage.getItem('kar_testimonials');
    if (savedTestimonials) {
      const parsedTestimonials = JSON.parse(savedTestimonials);
      parsedTestimonials.sort((a, b) => a.order - b.order);
      setTestimonials(parsedTestimonials);
    }
  }, []);

  const saveTestimonialsToStorage = (updatedTestimonials) => {
    const testimonialsWithOrder = updatedTestimonials.map((testimonial, index) => ({
      ...testimonial,
      order: index
    }));
    localStorage.setItem('kar_testimonials', JSON.stringify(testimonialsWithOrder));
    setTestimonials(testimonialsWithOrder);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          photo: file,
          photoPreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      company: '',
      testimonial: '',
      rating: 5,
      photo: null,
      photoPreview: '',
      email: '',
      linkedin: '',
      projectType: '',
      date: '',
      isActive: true,
      isFeatured: false,
      order: testimonials.length
    });
    setEditingTestimonial(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const testimonialData = {
      id: editingTestimonial ? editingTestimonial.id : Date.now(),
      ...formData,
      rating: parseInt(formData.rating),
      order: editingTestimonial ? editingTestimonial.order : testimonials.length,
      createdAt: editingTestimonial ? editingTestimonial.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedTestimonials;
    if (editingTestimonial) {
      updatedTestimonials = testimonials.map(testimonial => 
        testimonial.id === editingTestimonial.id ? testimonialData : testimonial
      );
    } else {
      updatedTestimonials = [...testimonials, testimonialData];
    }

    saveTestimonialsToStorage(updatedTestimonials);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      ...testimonial,
      rating: testimonial.rating.toString()
    });
    setIsModalOpen(true);
  };

  const handleDelete = (testimonialId) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updatedTestimonials = testimonials.filter(testimonial => testimonial.id !== testimonialId);
      saveTestimonialsToStorage(updatedTestimonials);
    }
  };

  const toggleTestimonialStatus = (testimonialId) => {
    const updatedTestimonials = testimonials.map(testimonial =>
      testimonial.id === testimonialId ? { ...testimonial, isActive: !testimonial.isActive } : testimonial
    );
    saveTestimonialsToStorage(updatedTestimonials);
  };

  const toggleFeatured = (testimonialId) => {
    const updatedTestimonials = testimonials.map(testimonial =>
      testimonial.id === testimonialId ? { ...testimonial, isFeatured: !testimonial.isFeatured } : testimonial
    );
    saveTestimonialsToStorage(updatedTestimonials);
  };

  const openDetailModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowDetailModal(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getAverageRating = () => {
    if (testimonials.length === 0) return 0;
    const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
    return (sum / testimonials.length).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testimonials Management</h1>
          <p className="text-gray-600">Manage client testimonials and reviews</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Testimonial
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-gray-900">{testimonials.length}</div>
          <div className="text-sm text-gray-600">Total Testimonials</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-green-600">{testimonials.filter(t => t.isActive).length}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-blue-600">{testimonials.filter(t => t.isFeatured).length}</div>
          <div className="text-sm text-gray-600">Featured</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-yellow-600">{getAverageRating()}</div>
            <div className="flex">
              {renderStars(Math.round(getAverageRating()))}
            </div>
          </div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                {testimonial.photoPreview ? (
                  <img 
                    src={testimonial.photoPreview} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  {testimonial.company && (
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-1 items-end">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="flex gap-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {testimonial.isActive ? 'Active' : 'Inactive'}
                  </span>
                  {testimonial.isFeatured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="mb-4">
              <p className="text-gray-700 text-sm line-clamp-4 italic">
                "{testimonial.testimonial}"
              </p>
            </div>

            {/* Meta Info */}
            <div className="text-xs text-gray-500 mb-4">
              {testimonial.projectType && (
                <p><span className="font-medium">Project:</span> {testimonial.projectType}</p>
              )}
              {testimonial.date && (
                <p><span className="font-medium">Date:</span> {new Date(testimonial.date).toLocaleDateString()}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => openDetailModal(testimonial)}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                View Full
              </button>
              <div className="flex gap-1">
                <button
                  onClick={() => toggleFeatured(testimonial.id)}
                  className={`p-1 rounded text-xs ${
                    testimonial.isFeatured 
                      ? 'text-yellow-600 bg-yellow-50' 
                      : 'text-gray-400 hover:bg-yellow-50 hover:text-yellow-600'
                  }`}
                  title={testimonial.isFeatured ? 'Remove from featured' : 'Add to featured'}
                >
                  <svg className="w-4 h-4" fill={testimonial.isFeatured ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
                
                <button
                  onClick={() => toggleTestimonialStatus(testimonial.id)}
                  className={`p-1 rounded text-xs ${
                    testimonial.isActive 
                      ? 'text-red-600 hover:bg-red-50' 
                      : 'text-green-600 hover:bg-green-50'
                  }`}
                  title={testimonial.isActive ? 'Deactivate' : 'Activate'}
                >
                  {testimonial.isActive ? 'Hide' : 'Show'}
                </button>
                
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="text-blue-600 hover:bg-blue-50 p-1 rounded"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>

                <button
                  onClick={() => handleDelete(testimonial.id)}
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
        ))}
      </div>

      {/* Empty State */}
      {testimonials.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No testimonials yet</h3>
          <p className="text-gray-600 mb-4">Start collecting client testimonials to build trust</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
          >
            Add Your First Testimonial
          </button>
        </div>
      )}

      {/* Add/Edit Testimonial Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Client's full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., CEO, Marketing Manager"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Company name"
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
                placeholder="client@company.com"
              />
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            {formData.photoPreview && (
              <div className="mt-2">
                <img 
                  src={formData.photoPreview} 
                  alt="Preview" 
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            )}
          </div>

          {/* Testimonial Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Testimonial *
            </label>
            <textarea
              name="testimonial"
              value={formData.testimonial}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter the client's testimonial..."
            />
            <p className="text-sm text-gray-500 mt-1">
              Characters: {formData.testimonial.length}
            </p>
          </div>

          {/* Rating and Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating *
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Good</option>
                <option value="2">2 Stars - Fair</option>
                <option value="1">1 Star - Poor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select project type</option>
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="https://linkedin.com/in/client"
              />
            </div>
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
                Featured testimonial
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
              {editingTestimonial ? 'Update Testimonial' : 'Save Testimonial'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Testimonial Detail Modal */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="Full Testimonial"
        size="lg"
      >
        {selectedTestimonial && (
          <div className="space-y-6">
            {/* Client Info */}
            <div className="flex items-center gap-4">
              {selectedTestimonial.photoPreview ? (
                <img 
                  src={selectedTestimonial.photoPreview} 
                  alt={selectedTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedTestimonial.name}</h3>
                <p className="text-gray-600">{selectedTestimonial.position}</p>
                {selectedTestimonial.company && (
                  <p className="text-gray-500">{selectedTestimonial.company}</p>
                )}
                <div className="flex mt-1">
                  {renderStars(selectedTestimonial.rating)}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "{selectedTestimonial.testimonial}"
              </p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {selectedTestimonial.projectType && (
                <div>
                  <span className="font-medium text-gray-700">Project Type:</span>
                  <p className="text-gray-600">{selectedTestimonial.projectType}</p>
                </div>
              )}
              {selectedTestimonial.date && (
                <div>
                  <span className="font-medium text-gray-700">Date:</span>
                  <p className="text-gray-600">{new Date(selectedTestimonial.date).toLocaleDateString()}</p>
                </div>
              )}
              {selectedTestimonial.email && (
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-gray-600">{selectedTestimonial.email}</p>
                </div>
              )}
              {selectedTestimonial.linkedin && (
                <div>
                  <span className="font-medium text-gray-700">LinkedIn:</span>
                  <a 
                    href={selectedTestimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}