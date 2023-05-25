import React from "react";

const PlayerInfo = ({ player }) => {
  return (
    <div className="player-info">
      <p>Player Level: {player.level}</p>
      <p>Player Health: {player.currentHP}</p>
      <p>Player Attack Power: {player.attackPower}</p>
      <p>Player Exp: {player.currentExperience} / {player.requiredExperience}</p>
    </div>
  );
};

export default PlayerInfo;
