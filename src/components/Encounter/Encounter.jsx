import React, { useState } from "react";
import EncounterOptions from "./ChildComponents/EncounterOptions";
import BattleLog from "./ChildComponents/BattleLog"
import PlayerInfo from "./ChildComponents/PlayerInfo";
import useEncounterService from "../../utilities/encounter-service";
import { usePlayer } from "../../utilities/player-service"; 
import "./Encounter.css";

const Encounter = ({ player, monsters, updatePlayer }) => {
  const {
    mode,
    battleLog,
    currentMonster,
    encounterComplete,
    handleEncounter,
    calculateDamage,
    getRandomCounterAttackText,
    handleAttack,
    handleNextEncounter,
    handleRun
  } = useEncounterService(player, monsters, updatePlayer);

  return (
    <div className="encounter-container">
      <h2 className="encounter-title">
        {mode === "fight" && currentMonster && player.currentHP > 0
          ? currentMonster.name
          : "Encounter"}
      </h2>
      <div className="picture-container">{/* Placeholder for picture */}</div>
      <BattleLog
        mode={mode}
        currentMonster={currentMonster}
        battleLog={battleLog}
        encounterComplete={encounterComplete}
        player={player}
      />
      <div className="status-action-grid">
        <PlayerInfo player={player} />
        <EncounterOptions
          mode={mode}
          encounterComplete={encounterComplete}
          handleEncounter={handleEncounter}
          handleAttack={() => handleAttack(player, updatePlayer)} // Pass the player object from the hook
          handleRun={handleRun}
          handleNextEncounter={handleNextEncounter}
          currentMonster={currentMonster}
        />
      </div>
    </div>
  );
};

export default Encounter;
