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

    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      maxHP,
      currentHP: maxHP,
      maxMana,
      currentMana: maxMana,
      attackPower,
    }));
  }, [player.constitution, player.intelligence, player.strength]);

  function updatePlayer(updatedPlayer) {
    setPlayer(updatedPlayer);
    if (playerProfile) {
      axios.put(`/api/playerprofiles/${playerProfile}`, updatedPlayer)
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
