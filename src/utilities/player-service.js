import { useState, useEffect } from 'react';

export function usePlayer() {
  const [player, setPlayer] = useState({
    level: 1,
    constitution: 30,
    intelligence: 30,
    strength: 45,
    dexterity: 10,
    wisdom: 10,
    charisma: 10,
    currentHP: 0, 
    maxHP: 0, 
    currentMana: 0, 
    maxMana: 0, 
    attackPower: 0,
  });

  // eslint-disable-next-line

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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const maxHP = 100 + player.constitution * 10;
    const maxMana = 50 + player.intelligence * 5;
    const attackPower = player.strength * 2;

    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      maxHP,
      maxMana,
      attackPower,
    }));
  }, [player.constitution, player.intelligence, player.strength]);

  function updatePlayer(updatedPlayer) {
    setPlayer(updatedPlayer);
  }

  return { player, updatePlayer };
}
