import React, { useEffect, useState } from "react";
import "./PlayerProfilesPage.css";
import CreatePlayerProfile from "./childComponents/CreatePlayerProfile";
import axios from "axios";

export default function PlayerProfilesPage({ user, setPlayerProfile, currentPlayerProfile }) {
  const [playerProfiles, setPlayerProfiles] = useState([]);

  useEffect(() => {
    const fetchPlayerProfiles = async () => {
      try {
        const response = await axios.get(`/api/playerprofiles/${user._id}`);
        const data = response.data;
        setPlayerProfiles(data);
      } catch (error) {
        console.error("Error fetching player profiles:", error);
      }
    };
    fetchPlayerProfiles();
  }, [user._id]);

  const handleDeleteProfile = async (profileId) => {
    try {
      await axios.delete(`/api/playerprofiles/${profileId}`);
      // Remove the deleted profile from the state
      setPlayerProfiles((prevProfiles) =>
        prevProfiles.filter((profile) => profile._id !== profileId)
      );
    } catch (error) {
      console.error("Error deleting player profile:", error);
    }
  };

  const handleCreateProfile = (newProfileData) => {
    setPlayerProfiles((prevProfiles) => [...prevProfiles, newProfileData]);
  };

  if (playerProfiles.length === 0) {
    return (
      <div className="player-profile-container">
        <h1>No player profiles found.</h1>
        <CreatePlayerProfile user={user} />
      </div>
    );
  }

  let createProfileComponent = null;
  if (playerProfiles.length < 5) {
    createProfileComponent = <CreatePlayerProfile user={user} onCreateProfile={handleCreateProfile} />;
  }

  return (
    <div className="player-profile-container">
      <h1>Player Profiles</h1>
      <div className="profile-list-container">
      {playerProfiles.map((profile) => (      
          <div
          className={`profile-list-object ${currentPlayerProfile === profile._id ? "selected" : ""}`}
          key={profile._id}
        >
            <div className="profile-list-title-container">
              <div className="profile-list-lable">{profile.name}</div>
              <div className="profile-list-level">
                <div className="profile-list-lable"> LEVEL </div>
                <div className="profile-list-stat"> {profile.level} </div>
              </div>
              <br />
              <div className="profile-list-level">
                <div className="profile-list-lable"> EXP </div>
                <div className="profile-list-stat"> {profile.currentExperience} / {profile.requiredExperience} </div>
              </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> HP </div>
              <div className="profile-list-stat"> {profile.currentHP} / {profile.maxHP} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> MP </div>
              <div className="profile-list-stat"> {profile.currentMana} / {profile.maxMana} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> CON </div>
              <div className="profile-list-stat"> {profile.constitution} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> INT </div>
              <div className="profile-list-stat"> {profile.intelligence} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> STR </div>
              <div className="profile-list-stat"> {profile.strength} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> DEX </div>
              <div className="profile-list-stat"> {profile.dexterity} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> WIS </div>
              <div className="profile-list-stat"> {profile.wisdom} </div>
            </div>
            <div className="profile-list-stat-container">
              <div className="profile-list-lable"> CHA </div>
              <div className="profile-list-stat"> {profile.charisma} </div>
            </div>
            <div className="profile-list-stat-container">
              <button onClick={() => setPlayerProfile(profile._id)}>
                Select
              </button>
              <button onClick={() => handleDeleteProfile(profile._id)}>
                Delete
              </button>
            </div>
            
          </div>
        ))
      }
      </div>
      {createProfileComponent}
    </div>
  );
}
