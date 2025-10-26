import { useState, useEffect } from 'react';
import Modal from '../../../components/ui/Modal';

export default function LeadershipManagement() {
  const [leaders, setLeaders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLeader, setEditingLeader] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [leaderToDelete, setLeaderToDelete] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    bio: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: '',
    specializations: [],
    image: null,
    imagePreview: '',
    isActive: true,
    isFeatured: false,
    joinedDate: '',
    education: '',
    achievements: []
  });

  const [specializationInput, setSpecializationInput] = useState('');
  const [achievementInput, setAchievementInput] = useState('');

  const departments = [
    'Executive Leadership',
    'Technology',
    'Sales & Marketing',
    'Operations',
    'Human Resources',
    'Finance',
    'Business Development',
    'Customer Success',
    'Product Management',
    'Design & Creative'
  ];

  useEffect(() => {
    const savedLeaders = localStorage.getItem('kar_leadership');
    if (savedLeaders) {
      setLeaders(JSON.parse(savedLeaders));
    }
  }, []);

  const saveLeadersToStorage = (updatedLeaders) => {
    localStorage.setItem('kar_leadership', JSON.stringify(updatedLeaders));
    setLeaders(updatedLeaders);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      department: '',
      bio: '',
      email: '',
      phone: '',
      linkedin: '',
      experience: '',
      specializations: [],
      image: null,
      imagePreview: '',
      isActive: true,
      isFeatured: false,
      joinedDate: '',
      education: '',
      achievements: []
    });
    setSpecializationInput('');
    setAchievementInput('');
    setEditingLeader(null);
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

  const addSpecialization = () => {
    if (specializationInput.trim() && !formData.specializations.includes(specializationInput.trim())) {
      setFormData(prev => ({
        ...prev,
        specializations: [...prev.specializations, specializationInput.trim()]
      }));
      setSpecializationInput('');
    }
  };

  const removeSpecialization = (index) => {
    setFormData(prev => ({
      ...prev,
      specializations: prev.specializations.filter((_, i) => i !== index)
    }));
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      setFormData(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievementInput.trim()]
      }));
      setAchievementInput('');
    }
  };

  const removeAchievement = (index) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.position.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const leaderData = {
      ...formData,
      id: editingLeader ? editingLeader.id : Date.now(),
      createdAt: editingLeader ? editingLeader.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let updatedLeaders;
    if (editingLeader) {
      updatedLeaders = leaders.map(leader => 
        leader.id === editingLeader.id ? leaderData : leader
      );
    } else {
      updatedLeaders = [...leaders, leaderData];
    }

    saveLeadersToStorage(updatedLeaders);
    setIsModalOpen(false);
    resetForm();
  };

  const openEditModal = (leader = null) => {
    if (leader) {
      setFormData({
        ...leader,
        specializations: leader.specializations || [],
        achievements: leader.achievements || []
      });
      setEditingLeader(leader);
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const handleDelete = (leader) => {
    setLeaderToDelete(leader);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedLeaders = leaders.filter(leader => leader.id !== leaderToDelete.id);
    saveLeadersToStorage(updatedLeaders);
    setIsDeleteModalOpen(false);
    setLeaderToDelete(null);
  };

  const toggleLeaderStatus = (leaderId, field) => {
    const updatedLeaders = leaders.map(leader =>
      leader.id === leaderId ? { ...leader, [field]: !leader[field] } : leader
    );
    saveLeadersToStorage(updatedLeaders);
  };

  const featuredLeaders = leaders.filter(leader => leader.isFeatured && leader.isActive);
  const activeLeaders = leaders.filter(leader => leader.isActive);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leadership Team</h1>
          <p className="text-gray-600">Manage leadership profiles and team members</p>
        </div>
        <button
          onClick={() => openEditModal()}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium"
        >
          Add Leader
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-primary">{leaders.length}</div>
          <div className="text-sm text-gray-600">Total Leaders</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-green-600">{activeLeaders.length}</div>
          <div className="text-sm text-gray-600">Active Leaders</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-blue-600">{featuredLeaders.length}</div>
          <div className="text-sm text-gray-600">Featured Leaders</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-purple-600">
            {new Set(leaders.map(l => l.department)).size}
          </div>
          <div className="text-sm text-gray-600">Departments</div>
        </div>
      </div>

      {/* Leaders Grid */}
      {leaders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader) => (
            <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Leader Image */}
              <div className="relative h-48 bg-gray-200">
                {leader.imagePreview ? (
                  <img 
                    src={leader.imagePreview} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}

                {/* Status Badges */}
                <div className="absolute top-2 right-2 flex gap-2">
                  {leader.isFeatured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    leader.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {leader.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Leader Info */}
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-primary font-medium">{leader.position}</p>
                  <p className="text-sm text-gray-600">{leader.department}</p>
                </div>

                {leader.bio && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{leader.bio}</p>
                )}

                {leader.specializations.length > 0 && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {leader.specializations.slice(0, 3).map((spec, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {spec}
                        </span>
                      ))}
                      {leader.specializations.length > 3 && (
                        <span className="text-xs text-gray-500">+{leader.specializations.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}

                {leader.experience && (
                  <div className="mb-3 text-sm">
                    <span className="font-medium text-gray-700">Experience: </span>
                    <span className="text-gray-600">{leader.experience}</span>
                  </div>
                )}

                {/* Contact Info */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  {leader.email && (
                    <a href={`mailto:${leader.email}`} className="hover:text-primary">
                      <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  )}
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      LinkedIn
                    </a>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleLeaderStatus(leader.id, 'isActive')}
                      className={`text-xs px-2 py-1 rounded ${
                        leader.isActive ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {leader.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => toggleLeaderStatus(leader.id, 'isFeatured')}
                      className={`text-xs px-2 py-1 rounded ${
                        leader.isFeatured ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {leader.isFeatured ? 'Unfeature' : 'Feature'}
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(leader)}
                      className="text-primary hover:text-primary/80"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(leader)}
                      className="text-red-500 hover:text-red-700"
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
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No leaders</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your first leader.</p>
          <div className="mt-6">
            <button
              onClick={() => openEditModal()}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium"
            >
              Add Leader
            </button>
          </div>
        </div>
      )}

      {/* Add/Edit Leader Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={editingLeader ? 'Edit Leader' : 'Add New Leader'}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position/Title *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., CEO, CTO, Director"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
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
                placeholder="email@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="+1 (555) 123-4567"
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
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., 10+ years, 5-8 years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Joined Date
              </label>
              <input
                type="date"
                name="joinedDate"
                value={formData.joinedDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Brief biography and background..."
            />
            <p className="text-sm text-gray-500 mt-1">
              Characters: {formData.bio.length}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Education
            </label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Educational background and qualifications..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specializations
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={specializationInput}
                onChange={(e) => setSpecializationInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Add a specialization"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addSpecialization();
                  }
                }}
              />
              <button
                type="button"
                onClick={addSpecialization}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
            
            {formData.specializations.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.specializations.map((spec, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {spec}
                    <button
                      type="button"
                      onClick={() => removeSpecialization(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Achievements
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
            
            {formData.achievements.length > 0 && (
              <div className="space-y-2">
                {formData.achievements.map((achievement, index) => (
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

          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Active</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Featured</span>
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium"
            >
              {editingLeader ? 'Update Leader' : 'Add Leader'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Leader"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Are you sure you want to delete <strong>{leaderToDelete?.name}</strong>? This action cannot be undone.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}