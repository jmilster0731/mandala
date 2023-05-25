import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePlayerProfile = ({ user, onCreateProfile }) => {
  const defaultValues = {
    name: "",
    level: 1,
    constitution: 20,
    intelligence: 20,
    strength: 20,
    dexterity: 20,
    wisdom: 20,
    charisma: 20,
    currentExperience: 0,
    skillPoints: 0,
    unassignedStatPoints: 0,
  };

  const [formData, setFormData] = useState(defaultValues);
  const [calculatedStats, setCalculatedStats] = useState({
    maxHP: 0,
    maxMana: 0,
    attackPower: 0,
    requiredExperience: 0,
  });

  useEffect(() => {
    const calculateStats = () => {
      const { constitution, intelligence, strength, level } = formData;
      const maxHP = 100 + constitution * 10;
      const maxMana = 50 + intelligence * 5;
      const attackPower = strength * 2;
      const requiredExperience = 10 * level;

      setCalculatedStats({ maxHP, maxMana, attackPower, requiredExperience });
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

    // Set currentHP and currentMana to their maximum values
    const { maxHP, maxMana } = calculatedStats;
    const updatedFormData = {
      ...formData,
      currentHP: maxHP,
      currentMana: maxMana,
    };

    try {
      const response = await axios.post("/api/playerprofiles", {
        ...updatedFormData,
        ...calculatedStats,
        user: user._id,
      });
      console.log("Player profile created:", response.data);
      onCreateProfile(response.data);
    } catch (error) {
      console.error("Error creating player profile:", error);
    }
  };

  const shouldHideField = (fieldName) => {
    if (fieldName === "name") {
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
            <div key={fieldName} className="create-player-profile-form">
              <label htmlFor={fieldName}>{fieldName}:</label>
              <input
                type={fieldName === "name" ? "text" : "number"}
                id={fieldName}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
              />
            </div>
          );
        })}
        <div className="create-player-profile-form">
          <input
            type="number"
            id="maxHP"
            name="maxHP"
            value={calculatedStats.maxHP}
            hidden
          />
          <input
            type="number"
            id="maxMana"
            name="maxMana"
            value={calculatedStats.maxMana}
            hidden
          />
          <input
            type="number"
            id="attackPower"
            name="attackPower"
            value={calculatedStats.attackPower}
            hidden
          />
          <input
            type="number"
            id="requiredExperience"
            name="requiredExperience"
            value={calculatedStats.requiredExperience}
            hidden
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePlayerProfile;
