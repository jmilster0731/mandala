import React, { useState, useEffect } from 'react';
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
    currentExperience: 0,
    requiredExperience: 0,
    skillPoints: 0,
    unassignedStatPoints: 0,
  };

  const [formData, setFormData] = useState(defaultValues);
  const [calculatedStats, setCalculatedStats] = useState({
    maxHP: 0,
    maxMana: 0,
    attackPower: 0,
  });

  useEffect(() => {
    const calculateStats = () => {
      const { constitution, intelligence, strength } = formData;
      const maxHP = 100 + constitution * 10;
      const maxMana = 50 + intelligence * 5;
      const attackPower = strength * 2;

      setCalculatedStats({ maxHP, maxMana, attackPower });
    };

    calculateStats();
  }, [formData]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/playerprofiles', { ...formData, ...calculatedStats, user: user._id });
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
      <h2>Create a New Player Profile</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((fieldName) => {
          if (shouldHideField(fieldName)) {
            return null; // Hide the input field
          }

          return (
            <div key={fieldName} className='create-player-profile-form'>
              <label htmlFor={fieldName}>{fieldName}:</label>
              <input
                type={fieldName === 'name' ? 'text' : 'number'}
                id={fieldName}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
              />
            </div>
          );
        })}
        <div className='create-player-profile-form'>
          <label htmlFor='maxHP'>Max HP:</label>
          <input type='number' id='maxHP' name='maxHP' value={calculatedStats.maxHP} disabled />
        </div>
        <div className='create-player-profile-form'>
          <label htmlFor='maxMana'>Max Mana:</label>
          <input type='number' id='maxMana' name='maxMana' value={calculatedStats.maxMana} disabled />
        </div>
        <div className='create-player-profile-form'>
          <label htmlFor='attackPower'>Attack Power:</label>
          <input type='number' id='attackPower' name='attackPower' value={calculatedStats.attackPower} disabled />
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default CreatePlayerProfile;
