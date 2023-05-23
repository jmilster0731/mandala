import React from "react";

const PlayerInfo = ({ player }) => {
  return (
    <div className="player-info">
      <p>Player Level: {player.level}</p>
      <p>Player Health: {player.currentHP}</p>
      <p>Player Attack Power: {player.attackPower}</p>
    </div>
  );
};

export default PlayerInfo;
