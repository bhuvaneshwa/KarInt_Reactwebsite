import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function WhoWeAreManagement() {
  const [companyInfo, setCompanyInfo] = useState({
    title: '',
    subtitle: '',
    description: '',
    story: '',
    founded: '',
    employees: '',
    location: '',
    headquarters: '',
    image: null,
    imagePreview: '',
    values: [],
    achievements: [],
    certifications: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSection, setEditSection] = useState('basic');
  const [valueInput, setValueInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');
  const [certificationInput, setCertificationInput] = useState('');

  useEffect(() => {
    const savedCompanyInfo = localStorage.getItem('kar_company_info');
    if (savedCompanyInfo) {
      const parsedInfo = JSON.parse(savedCompanyInfo);
      setCompanyInfo({
        ...parsedInfo,
        values: parsedInfo.values || [],
        achievements: parsedInfo.achievements || [],
        certifications: parsedInfo.certifications || []
      });
    }
  }, []);

  const saveCompanyInfoToStorage = (updatedInfo) => {
    localStorage.setItem('kar_company_info', JSON.stringify(updatedInfo));
    setCompanyInfo(updatedInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyInfo(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addValue = () => {
    if (valueInput.trim()) {
      setCompanyInfo(prev => ({
        ...prev,
        values: [...prev.values, valueInput.trim()]
      }));
      setValueInput('');
    }
  };

  const removeValue = (index) => {
    setCompanyInfo(prev => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index)
    }));
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      setCompanyInfo(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievementInput.trim()]
      }));
      setAchievementInput('');
    }
  };

  const removeAchievement = (index) => {
    setCompanyInfo(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const addCertification = () => {
    if (certificationInput.trim()) {
      setCompanyInfo(prev => ({
        ...prev,
        certifications: [...prev.certifications, certificationInput.trim()]
      }));
      setCertificationInput('');
    }
  };

  const removeCertification = (index) => {
    setCompanyInfo(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    const updatedInfo = {
      ...companyInfo,
      updatedAt: new Date().toISOString()
    };
    saveCompanyInfoToStorage(updatedInfo);
    setIsModalOpen(false);
  };

  const openEditModal = (section) => {
    setEditSection(section);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Who We Are</h1>
          <p className="text-gray-600">Manage company information and story</p>
        </div>
      </div>

      {/* Company Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
            <button
              onClick={() => openEditModal('basic')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="space-y-4">
            {companyInfo.imagePreview && (
              <div className="text-center">
                <img 
                  src={companyInfo.imagePreview} 
                  alt="Company"
                  className="w-32 h-32 mx-auto object-cover rounded-lg"
                />
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {companyInfo.title || 'Your Company Name'}
              </h3>
              {companyInfo.subtitle && (
                <p className="text-primary font-medium mb-2">{companyInfo.subtitle}</p>
              )}
              <p className="text-gray-600 text-sm">
                {companyInfo.description || 'Add a compelling description of your company...'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Founded:</span>
                <p className="text-gray-600">{companyInfo.founded || 'Not set'}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Employees:</span>
                <p className="text-gray-600">{companyInfo.employees || 'Not set'}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Location:</span>
                <p className="text-gray-600">{companyInfo.location || 'Not set'}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">HQ:</span>
                <p className="text-gray-600">{companyInfo.headquarters || 'Not set'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Our Story</h2>
            <button
              onClick={() => openEditModal('story')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="text-gray-600 text-sm">
            {companyInfo.story ? (
              <p className="line-clamp-6">{companyInfo.story}</p>
            ) : (
              <p className="italic">Tell your company's story, how it started, your journey, and what makes you unique...</p>
            )}
          </div>
        </div>
      </div>

      {/* Values, Achievements, Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Values */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Our Values</h2>
            <button
              onClick={() => openEditModal('values')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          {companyInfo.values.length > 0 ? (
            <div className="space-y-2">
              {companyInfo.values.map((value, index) => (
                <div key={index} className="bg-primary/10 text-primary px-3 py-2 rounded-md text-sm">
                  {value}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">Add your company values...</p>
          )}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Achievements</h2>
            <button
              onClick={() => openEditModal('achievements')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          {companyInfo.achievements.length > 0 ? (
            <div className="space-y-2">
              {companyInfo.achievements.map((achievement, index) => (
                <div key={index} className="bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm">
                  {achievement}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">Add your company achievements...</p>
          )}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Certifications</h2>
            <button
              onClick={() => openEditModal('certifications')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          {companyInfo.certifications.length > 0 ? (
            <div className="space-y-2">
              {companyInfo.certifications.map((cert, index) => (
                <div key={index} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm">
                  {cert}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">Add your certifications...</p>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`Edit ${editSection === 'basic' ? 'Basic Information' : 
               editSection === 'story' ? 'Company Story' : 
               editSection === 'values' ? 'Company Values' :
               editSection === 'achievements' ? 'Achievements' : 'Certifications'}`}
        size="lg"
      >
        <div className="space-y-6">
          {editSection === 'basic' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={companyInfo.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tagline/Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={companyInfo.subtitle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your company tagline"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Founded Year
                  </label>
                  <input
                    type="text"
                    name="founded"
                    value={companyInfo.founded}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="e.g., 2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="text"
                    name="employees"
                    value={companyInfo.employees}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="e.g., 50+, 100-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={companyInfo.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="e.g., Mumbai, India"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Headquarters
                  </label>
                  <input
                    type="text"
                    name="headquarters"
                    value={companyInfo.headquarters}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Main office location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {companyInfo.imagePreview && (
                  <div className="mt-2">
                    <img 
                      src={companyInfo.imagePreview} 
                      alt="Preview" 
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Description
                </label>
                <textarea
                  name="description"
                  value={companyInfo.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Brief description of your company..."
                />
              </div>
            </>
          )}

          {editSection === 'story' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Story
              </label>
              <textarea
                name="story"
                value={companyInfo.story}
                onChange={handleInputChange}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Tell your company's story - how it started, your journey, challenges overcome, and what makes you unique..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Characters: {companyInfo.story.length}
              </p>
            </div>
          )}

          {editSection === 'values' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Values
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Add a company value"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addValue();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addValue}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
              
              {companyInfo.values.length > 0 && (
                <div className="space-y-2">
                  {companyInfo.values.map((value, index) => (
                    <div key={index} className="flex items-center justify-between bg-primary/10 text-primary px-3 py-2 rounded-md">
                      <span className="text-sm">{value}</span>
                      <button
                        type="button"
                        onClick={() => removeValue(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {editSection === 'achievements' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Achievements
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={achievementInput}
                  onChange={(e) => setAchievementInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Add an achievement"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addAchievement();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addAchievement}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
              
              {companyInfo.achievements.length > 0 && (
                <div className="space-y-2">
                  {companyInfo.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between bg-green-50 text-green-700 px-3 py-2 rounded-md">
                      <span className="text-sm">{achievement}</span>
                      <button
                        type="button"
                        onClick={() => removeAchievement(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {editSection === 'certifications' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certifications & Awards
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={certificationInput}
                  onChange={(e) => setCertificationInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Add a certification or award"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCertification();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addCertification}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
              
              {companyInfo.certifications.length > 0 && (
                <div className="space-y-2">
                  {companyInfo.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between bg-blue-50 text-blue-700 px-3 py-2 rounded-md">
                      <span className="text-sm">{cert}</span>
                      <button
                        type="button"
                        onClick={() => removeCertification(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}