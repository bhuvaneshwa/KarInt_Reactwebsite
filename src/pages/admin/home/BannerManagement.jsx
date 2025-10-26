import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function BannerManagement() {
  const [banners, setBanners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    buttonText: '',
    buttonLink: '',
    image: null,
    imagePreview: '',
    isActive: true,
    order: 0
  });

  useEffect(() => {
    const savedBanners = localStorage.getItem('kar_banners');
    if (savedBanners) {
      const parsedBanners = JSON.parse(savedBanners);
      parsedBanners.sort((a, b) => a.order - b.order);
      setBanners(parsedBanners);
    }
  }, []);

  const saveBannersToStorage = (updatedBanners) => {
    const bannersWithOrder = updatedBanners.map((banner, index) => ({
      ...banner,
      order: index
    }));
    localStorage.setItem('kar_banners', JSON.stringify(bannersWithOrder));
    setBanners(bannersWithOrder);
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

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      buttonText: '',
      buttonLink: '',
      image: null,
      imagePreview: '',
      isActive: true,
      order: banners.length
    });
    setEditingBanner(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bannerData = {
      id: editingBanner ? editingBanner.id : Date.now(),
      ...formData,
      order: editingBanner ? editingBanner.order : banners.length,
      createdAt: editingBanner ? editingBanner.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedBanners;
    if (editingBanner) {
      updatedBanners = banners.map(banner => 
        banner.id === editingBanner.id ? bannerData : banner
      );
    } else {
      updatedBanners = [...banners, bannerData];
    }

    saveBannersToStorage(updatedBanners);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setFormData(banner);
    setIsModalOpen(true);
  };

  const handleDelete = (bannerId) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      const updatedBanners = banners.filter(banner => banner.id !== bannerId);
      saveBannersToStorage(updatedBanners);
    }
  };

  const toggleBannerStatus = (bannerId) => {
    const updatedBanners = banners.map(banner =>
      banner.id === bannerId ? { ...banner, isActive: !banner.isActive } : banner
    );
    saveBannersToStorage(updatedBanners);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Banner Management</h1>
          <p className="text-gray-600">Manage homepage banners and hero sections</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Banner
        </button>
      </div>

      {/* Banners List */}
      <div className="grid grid-cols-1 gap-6">
        {banners.map((banner, index) => (
          <div key={banner.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Banner Image */}
              {banner.imagePreview && (
                <div className="md:w-1/3">
                  <img 
                    src={banner.imagePreview} 
                    alt={banner.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
              )}
              
              {/* Banner Content */}
              <div className={`p-6 ${banner.imagePreview ? 'md:w-2/3' : 'w-full'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{banner.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      banner.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {banner.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      Order: {index + 1}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleBannerStatus(banner.id)}
                      className={`p-2 rounded-lg ${
                        banner.isActive 
                          ? 'text-red-600 hover:bg-red-50' 
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title={banner.isActive ? 'Deactivate' : 'Activate'}
                    >
                      {banner.isActive ? 'Hide' : 'Show'}
                    </button>
                    
                    <button
                      onClick={() => handleEdit(banner)}
                      className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>

                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {banner.subtitle && (
                  <p className="text-lg text-primary font-medium mb-2">{banner.subtitle}</p>
                )}
                
                <p className="text-gray-600 mb-4 line-clamp-3">{banner.description}</p>
                
                {banner.buttonText && (
                  <div className="flex items-center gap-2">
                    <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                      {banner.buttonText}
                    </span>
                    {banner.buttonLink && (
                      <span className="text-sm text-gray-500">→ {banner.buttonLink}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {banners.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No banners yet</h3>
          <p className="text-gray-600 mb-4">Create your first banner to showcase on the homepage</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
          >
            Create Your First Banner
          </button>
        </div>
      )}

      {/* Add/Edit Banner Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingBanner ? 'Edit Banner' : 'Add New Banner'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Banner Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Main banner headline"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Supporting tagline"
            />
          </div>

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
              placeholder="Detailed description of your services or value proposition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                name="buttonText"
                value={formData.buttonText}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., Get Started, Contact Us"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Link
              </label>
              <input
                type="text"
                name="buttonLink"
                value={formData.buttonLink}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="/contact or external URL"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Banner Image
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
                  className="w-full max-w-md h-32 object-cover rounded-lg"
                />
              </div>
            )}
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
              {editingBanner ? 'Update Banner' : 'Save Banner'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}