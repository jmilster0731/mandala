import React, { useEffect, useState } from "react";
import "./PlayerProfilesPage.css";
import CreatePlayerProfile from "./childComponents/CreatePlayerProfile";
import axios from "axios";

export default function PlayerProfilesPage({ user }) {
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
  }, []);

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

  return (
    <div className="player-profile-container">
      <h1>Player Profiles</h1>
      {playerProfiles.map((profile) => (
        <div key={profile._id}>
          <h2>{profile.name}</h2>
          <p>Level: {profile.level}</p>
          <button onClick={() => handleDeleteProfile(profile._id)}>Delete</button>
        </div>
      ))}
      <CreatePlayerProfile user={user} onCreateProfile={handleCreateProfile} />
    </div>
  );
}
