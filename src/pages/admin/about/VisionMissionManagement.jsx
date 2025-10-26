import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function VisionMissionManagement() {
  const [visionMission, setVisionMission] = useState({
    vision: {
      title: '',
      content: '',
      points: [],
      image: null,
      imagePreview: ''
    },
    mission: {
      title: '',
      content: '',
      points: [],
      image: null,
      imagePreview: ''
    },
    coreValues: [],
    whyChooseUs: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSection, setEditSection] = useState('vision');
  const [pointInput, setPointInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [reasonInput, setReasonInput] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('kar_vision_mission');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setVisionMission({
        vision: {
          title: parsedData.vision?.title || '',
          content: parsedData.vision?.content || '',
          points: parsedData.vision?.points || [],
          image: null,
          imagePreview: parsedData.vision?.imagePreview || ''
        },
        mission: {
          title: parsedData.mission?.title || '',
          content: parsedData.mission?.content || '',
          points: parsedData.mission?.points || [],
          image: null,
          imagePreview: parsedData.mission?.imagePreview || ''
        },
        coreValues: parsedData.coreValues || [],
        whyChooseUs: parsedData.whyChooseUs || []
      });
    }
  }, []);

  const saveDataToStorage = (updatedData) => {
    const dataToStore = {
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('kar_vision_mission', JSON.stringify(dataToStore));
    setVisionMission(updatedData);
  };

  const handleTextChange = (section, field, value) => {
    setVisionMission(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleImageUpload = (section, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setVisionMission(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            image: file,
            imagePreview: e.target.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addPoint = (section) => {
    if (pointInput.trim()) {
      setVisionMission(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          points: [...prev[section].points, pointInput.trim()]
        }
      }));
      setPointInput('');
    }
  };

  const removePoint = (section, index) => {
    setVisionMission(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        points: prev[section].points.filter((_, i) => i !== index)
      }
    }));
  };

  const addCoreValue = () => {
    if (valueInput.trim()) {
      setVisionMission(prev => ({
        ...prev,
        coreValues: [...prev.coreValues, valueInput.trim()]
      }));
      setValueInput('');
    }
  };

  const removeCoreValue = (index) => {
    setVisionMission(prev => ({
      ...prev,
      coreValues: prev.coreValues.filter((_, i) => i !== index)
    }));
  };

  const addReason = () => {
    if (reasonInput.trim()) {
      setVisionMission(prev => ({
        ...prev,
        whyChooseUs: [...prev.whyChooseUs, reasonInput.trim()]
      }));
      setReasonInput('');
    }
  };

  const removeReason = (index) => {
    setVisionMission(prev => ({
      ...prev,
      whyChooseUs: prev.whyChooseUs.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    saveDataToStorage(visionMission);
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
          <h1 className="text-2xl font-bold text-gray-900">Vision & Mission</h1>
          <p className="text-gray-600">Manage company vision, mission, and core values</p>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vision Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Our Vision</h2>
            <button
              onClick={() => openEditModal('vision')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="space-y-4">
            {visionMission.vision.imagePreview && (
              <div className="text-center">
                <img 
                  src={visionMission.vision.imagePreview} 
                  alt="Vision"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {visionMission.vision.title || 'Vision Title'}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {visionMission.vision.content || 'Add your company vision statement...'}
              </p>

              {visionMission.vision.points.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 text-sm">Key Points:</h4>
                  {visionMission.vision.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Our Mission</h2>
            <button
              onClick={() => openEditModal('mission')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="space-y-4">
            {visionMission.mission.imagePreview && (
              <div className="text-center">
                <img 
                  src={visionMission.mission.imagePreview} 
                  alt="Mission"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {visionMission.mission.title || 'Mission Title'}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {visionMission.mission.content || 'Add your company mission statement...'}
              </p>

              {visionMission.mission.points.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 text-sm">Key Points:</h4>
                  {visionMission.mission.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values & Why Choose Us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Core Values</h2>
            <button
              onClick={() => openEditModal('coreValues')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          {visionMission.coreValues.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visionMission.coreValues.map((value, index) => (
                <div key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-3 rounded-lg text-sm font-medium text-center">
                  {value}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">Add your core values...</p>
          )}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Why Choose Us</h2>
            <button
              onClick={() => openEditModal('whyChooseUs')}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Edit
            </button>
          </div>

          {visionMission.whyChooseUs.length > 0 ? (
            <div className="space-y-3">
              {visionMission.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{reason}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">Add reasons why clients should choose you...</p>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`Edit ${editSection === 'vision' ? 'Vision' : 
               editSection === 'mission' ? 'Mission' : 
               editSection === 'coreValues' ? 'Core Values' : 'Why Choose Us'}`}
        size="lg"
      >
        <div className="space-y-6">
          {(editSection === 'vision' || editSection === 'mission') && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {editSection === 'vision' ? 'Vision' : 'Mission'} Title
                </label>
                <input
                  type="text"
                  value={visionMission[editSection].title}
                  onChange={(e) => handleTextChange(editSection, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={`Your ${editSection} title`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {editSection === 'vision' ? 'Vision' : 'Mission'} Statement
                </label>
                <textarea
                  value={visionMission[editSection].content}
                  onChange={(e) => handleTextChange(editSection, 'content', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={`Write your ${editSection} statement...`}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Characters: {visionMission[editSection].content.length}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(editSection, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {visionMission[editSection].imagePreview && (
                  <div className="mt-2">
                    <img 
                      src={visionMission[editSection].imagePreview} 
                      alt="Preview" 
                      className="w-48 h-24 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Points
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={pointInput}
                    onChange={(e) => setPointInput(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Add a key point"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addPoint(editSection);
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => addPoint(editSection)}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
                  >
                    Add
                  </button>
                </div>
                
                {visionMission[editSection].points.length > 0 && (
                  <div className="space-y-2">
                    {visionMission[editSection].points.map((point, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                        <span className="text-sm">{point}</span>
                        <button
                          type="button"
                          onClick={() => removePoint(editSection, index)}
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
            </>
          )}

          {editSection === 'coreValues' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Core Values
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Add a core value"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCoreValue();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addCoreValue}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
              
              {visionMission.coreValues.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {visionMission.coreValues.map((value, index) => (
                    <div key={index} className="flex items-center justify-between bg-primary/10 text-primary px-3 py-2 rounded-md">
                      <span className="text-sm">{value}</span>
                      <button
                        type="button"
                        onClick={() => removeCoreValue(index)}
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

          {editSection === 'whyChooseUs' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why Choose Us
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={reasonInput}
                  onChange={(e) => setReasonInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Add a reason to choose your company"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addReason();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addReason}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
              
              {visionMission.whyChooseUs.length > 0 && (
                <div className="space-y-2">
                  {visionMission.whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center justify-between bg-green-50 text-green-700 px-3 py-2 rounded-md">
                      <span className="text-sm">{reason}</span>
                      <button
                        type="button"
                        onClick={() => removeReason(index)}
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