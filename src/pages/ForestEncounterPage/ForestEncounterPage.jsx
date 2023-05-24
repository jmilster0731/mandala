import ForestMonsters from "../../Beastiary/ForestMonsters";
import Encounter from "../../components/Encounter/Encounter";

export default function ForestEncounterPage({ player, updatePlayer }) {
  return (
    <Encounter
      player={player}
      monsters={ForestMonsters}
      updatePlayer={updatePlayer}
    />
  );
}