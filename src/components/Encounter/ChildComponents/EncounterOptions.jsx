import React from "react";
import { Link } from "react-router-dom";

const EncounterOptions = ({
  mode,
  encounterComplete,
  handleEncounter,
  handleAttack,
  handleRun,
  handleNextEncounter,
  currentMonster
}) => {
  return (
    <div className="encounter-options">
      {encounterComplete ? (
        <div>
          {mode !== "victory" ? (
            <p>
              Go back to the <Link to="/campsite">campsite</Link> and lick your
              wounds.
            </p>
          ) : (
            <button onClick={handleNextEncounter}>Next Encounter</button>
          )}
        </div>
      ) : (
        <>
          {mode === "initial" && (
            <button onClick={handleEncounter}>Encounter</button>
          )}
          {mode === "item" && (
            <div>
              <p>Item description goes here</p>
              <button onClick={handleEncounter}>Next Encounter</button>
            </div>
          )}
          {mode === "fight" && currentMonster && (
            <div>
              <button onClick={handleAttack}>Attack</button>
              <button onClick={handleRun}>Run</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EncounterOptions;
