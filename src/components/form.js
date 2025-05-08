import React, { useState } from 'react';
import './form.css';

const FamilyForm = () => {
  const [formData, setFormData] = useState({
    house: '',
    fatherName: '',
    motherName: '',
    username: '',
    phone: '',
    spouse: '',
    hasSpouse: null
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSpouseDropdown, setShowSpouseDropdown] = useState(false);
  const houseOptions = ['Tikambo', 'Kipkones', 'Nairobi', 'Kimasit', 'Samuel'];
  const spouseOptions = ['Has Spouse', 'No Spouse'];

  const handleHouseChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      house: prev.house === value ? '' : value
    }));
  };

  const handleSpouseStatusChange = (value) => {
    if (value === 'Has Spouse') {
      setFormData({
        ...formData,
        hasSpouse: true,
        spouse: ''
      });
    } else {
      setFormData({
        ...formData,
        hasSpouse: false,
        spouse: ''
      });
    }
    setShowSpouseDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSpouseDropdown = () => setShowSpouseDropdown(!showSpouseDropdown);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='form-body'>
      <div className="form-container">
        <div className='heading'>
          <h2>Barabiiy Family Information Form</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* House Dropdown */}
            <div className="form-group dropdown-container">
              <label>House:</label>
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  className="dropdown-button"
                  onClick={toggleDropdown}
                >
                  {formData.house || 'Select One House'}
                </button>
                {showDropdown && (
                  <div className="checkbox-options">
                    {houseOptions.map(option => (
                      <label key={option} className="checkbox-label">
                        <input
                          type="radio"
                          name="house"
                          value={option}
                          checked={formData.house === option}
                          onChange={handleHouseChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Username */}
            <div className="form-group">
              <label>
                Your Name:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Name Fields Group */}
            <div className="input-group">
              <div className="form-group">
                <label>
                  Father's Name:
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  Mother's Name:
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>

            {/* Spouse Status Dropdown */}
            <div className="form-group dropdown-container">
              <label>Spouse Status:</label>
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  className="dropdown-button"
                  onClick={toggleSpouseDropdown}
                >
                  {formData.hasSpouse === null
                    ? 'Select Spouse Status'
                    : formData.hasSpouse ? 'Has Spouse' : 'No Spouse'}
                </button>
                {showSpouseDropdown && (
                  <div className="checkbox-options">
                    {spouseOptions.map(option => (
                      <label key={option} className="checkbox-label">
                        <input
                          type="radio"
                          name="spouseStatus"
                          checked={
                            (option === 'Has Spouse' && formData.hasSpouse) ||
                            (option === 'No Spouse' && formData.hasSpouse === false)
                          }
                          onChange={() => handleSpouseStatusChange(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Conditional Spouse Name Input */}
            {formData.hasSpouse && (
              <div className="form-group">
                <label>
                  Spouse Name:
                  <input
                    type="text"
                    name="spouse"
                    value={formData.spouse}
                    onChange={handleChange}
                    required={formData.hasSpouse}
                    placeholder="Enter spouse's name"
                  />
                </label>
              </div>
            )}

            {/* Phone Number */}
            <div className="form-group">
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
                <small>Format: 07******** or 01********</small>
              </label>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FamilyForm;