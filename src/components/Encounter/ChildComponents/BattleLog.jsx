import React from "react";
import { Link } from "react-router-dom";

const BattleLog = ({ mode, currentMonster, battleLog }) => {
  const renderDescription = () => {
    if (currentMonster && currentMonster.description) {
      return <p>{currentMonster.description}</p>;
    }
    return null;
  };

  const renderBattleLog = () => {
    return battleLog.map((log, index) => <p key={index}>{log}</p>);
  };

  const renderDefeatMessage = () => {
    if (mode === "gameover" && currentMonster) {
      const monsterName = currentMonster.name || "unknown monster";
      return (
        <p>
          You were defeated by a {monsterName}! Game over. Go back to the{" "}
          <Link to="/campsite">campsite</Link> to recover.
        </p>
      );
    }
    return null;
  };

  return (
    <div className="battle-log">
      {(mode === "fight" || mode === "gameover" || mode === "victory") && (
        <div>
          {renderDescription()}
          {renderBattleLog()}
        </div>
      )}
      {renderDefeatMessage()}
    </div>
  );
};

export default BattleLog;
