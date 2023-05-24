import React, { useState } from 'react';
import axios from 'axios';

const CreatePlayerProfile = ({ user, onCreateProfile }) => {
  const defaultValues = {
    name: '',
    level: 1,
    constitution: 20,
    intelligence: 20,
    strength: 20,
    dexterity: 20,
    wisdom: 20,
    charisma: 20,
    currentHP: 0,
    maxHP: 0,
    currentMana: 0,
    maxMana: 0,
    attackPower: 0,
    currentExperience: 0,
    requiredExperience: 0,
    skillPoints: 0,
    unassignedStatPoints: 0,
  };

  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/playerprofiles', { ...formData, user: user._id });
      console.log('Player profile created:', response.data);
      onCreateProfile(response.data);
    } catch (error) {
      console.error('Error creating player profile:', error);
    }
  };

  const shouldHideField = (fieldName) => {
    if (fieldName === 'name') {
      return false; // Always show the "name" field
    }
    return formData[fieldName] === defaultValues[fieldName];
  };

  return (
    <div>
      <h2>Create Player Profile</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((fieldName) => {
          if (shouldHideField(fieldName)) {
            return null; // Hide the input field
          }

          return (
            <div key={fieldName}>
              <label htmlFor={fieldName}>{fieldName}:</label>
              <input type={fieldName === 'name' ? 'text' : 'number'} id={fieldName} name={fieldName} value={formData[fieldName]} onChange={handleChange} />
            </div>
          );
        })}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePlayerProfile;
