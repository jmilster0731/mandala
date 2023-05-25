import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePlayer(playerProfile) {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        if (playerProfile) {
          const response = await axios.get(`/api/playerprofiles/profile/${playerProfile}`);
          const playerData = response.data;
          setPlayer(playerData);
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [playerProfile]);

  useEffect(() => {
    const maxHP = 100 + player.constitution * 10;
    const maxMana = 50 + player.intelligence * 5;
    const attackPower = player.strength * 2;
    const requiredExperience = 10 * player.level;

    if (player.currentExperience >= requiredExperience) {
      const levelIncrease = Math.floor(player.currentExperience / requiredExperience);
      const newLevel = player.level + levelIncrease;
      const unassignedStatPoints = player.unassignedStatPoints + levelIncrease;
      const skillPoints = player.skillPoints + levelIncrease;
      const newCurrentExperience = player.currentExperience % requiredExperience;
      const newConstitution = player.constitution + levelIncrease;
      const newStrength = player.strength + levelIncrease;

      setPlayer((prevPlayer) => {
        const updatedPlayer = {
          ...prevPlayer,
          level: newLevel,
          unassignedStatPoints,
          skillPoints,
          constitution: newConstitution,
          strength: newStrength,
          maxHP,
          maxMana,
          attackPower,
          requiredExperience,
          currentExperience: newCurrentExperience,
        };

        return updatedPlayer;
      });
    } else {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        maxHP,
        maxMana,
        attackPower,
        requiredExperience,
      }));
    }
  }, [player.constitution, player.intelligence, player.strength, player.level, player.currentExperience]);

  function updatePlayer(updatedPlayer) {
    if (updatedPlayer.currentHP === undefined) {
      updatedPlayer.currentHP = player.currentHP;
    }

    if (updatedPlayer.currentMana === undefined) {
      updatedPlayer.currentMana = player.currentMana;
    }

    setPlayer(updatedPlayer);

    if (playerProfile) {
      axios
        .put(`/api/playerprofiles/${playerProfile}`, updatedPlayer)
        .then(() => {
          console.log('Player profile updated successfully');
        })
        .catch((error) => {
          console.error('Error updating player profile:', error);
        });
    }
  }

  return { player, updatePlayer };
}
