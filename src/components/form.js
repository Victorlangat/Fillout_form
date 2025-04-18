import React, { useState } from 'react';
import './form.css';

const FamilyForm = () => {
  const [formData, setFormData] = useState({
    house: [],
    fatherName: '',
    motherName: '',
    username: '',
    phone: '',
    spouse: ''
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const houseOptions = ['Tikambo', 'Kipkones', 'Nairobi', 'Kimasit', 'Samuel'];

  const handleHouseChange = (e) => {
    const value = e.target.value;
    const updatedHouses = formData.house.includes(value)
      ? formData.house.filter(item => item !== value)
      : [...formData.house, value];
    
    setFormData({ ...formData, house: updatedHouses });
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

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
                  {formData.house.length > 0 
                    ? formData.house.join(', ') 
                    : 'Select House Options'}
                </button>
                {showDropdown && (
                  <div className="checkbox-options">
                    {houseOptions.map(option => (
                      <label key={option} className="checkbox-label">
                        <input
                          type="checkbox"
                          value={option}
                          checked={formData.house.includes(option)}
                          onChange={handleHouseChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
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

            {/* Spouse Name */}
            <div className="form-group">
              <label>
                Spouse Name:
                <input
                  type="text"
                  name="spouse"
                  value={formData.spouse}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

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
                <small>Format: +254********</small>
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