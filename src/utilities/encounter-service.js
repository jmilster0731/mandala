import { useState } from "react";

const useEncounterService = (player, monsters, updatePlayer) => {
  const [mode, setMode] = useState("initial");
  const [battleLog, setBattleLog] = useState([]);
  const [currentMonster, setCurrentMonster] = useState(null);
  const [previousCounterAttack, setPreviousCounterAttack] = useState("");
  const [encounterComplete, setEncounterComplete] = useState(false);

  const handleEncounter = () => {
    const randomNumber = Math.random();
  
    if (randomNumber < 0.8) {
      setMode("fight");
      const randomMonster =
        monsters[Math.floor(Math.random() * monsters.length)];
      setCurrentMonster(randomMonster);
      setBattleLog([
        `An encounter with ${randomMonster.name}!`,
        randomMonster.introText,
      ]);
    } else {
      setMode("item");
      setBattleLog(["You found a rare item!"]);
    }
  
    setEncounterComplete(false);
  };

  const calculateDamage = (attacker, defender) => {
    const criticalChance = Math.random();
    const damage = attacker.attackPower * (criticalChance < 0.2 ? 2 : 1);
    const newDefenderHealth = defender.currentHP - damage;
    return { damage, newDefenderHealth };
  };

  const getRandomCounterAttackText = () => {
    if (currentMonster && currentMonster.counterAttackText) {
      let randomIndex = Math.floor(
        Math.random() * currentMonster.counterAttackText.length
      );
      let counterAttack = currentMonster.counterAttackText[randomIndex];

      while (counterAttack === previousCounterAttack) {
        randomIndex = Math.floor(
          Math.random() * currentMonster.counterAttackText.length
        );
        counterAttack = currentMonster.counterAttackText[randomIndex];
      }

      setPreviousCounterAttack(counterAttack);

      return counterAttack;
    }
    return "The monster counter-attacks!";
  };

  const handleAttack = () => {
    const { damage, newDefenderHealth } = calculateDamage(player, currentMonster);
    const updatedMonster = { ...currentMonster, currentHP: newDefenderHealth };
    setCurrentMonster(updatedMonster);
  
    const attackMessage = `You attacked the monster and dealt ${damage} damage! The monster's health is now ${newDefenderHealth}.`;
    setBattleLog((prevBattleLog) => [...prevBattleLog, attackMessage]);
  
    if (newDefenderHealth <= 0) {
      const victoryMessage = `You defeated the ${currentMonster.name}!`;
      setEncounterComplete(true);
      setBattleLog([...battleLog, victoryMessage]);
      setCurrentMonster(null);
      setMode("victory");
    } else {
      const monsterAttack = calculateDamage(currentMonster, player);
      const newPlayerHealth = player.currentHP - monsterAttack.damage;
      const counterAttackMessage = `${getRandomCounterAttackText()} It dealt ${monsterAttack.damage} damage! Your health is now ${newPlayerHealth}.`;
  
      if (newPlayerHealth <= 0) {
        const defeatMessage = `You were defeated by the ${currentMonster.name}! Game over.`;
        setBattleLog([
          ...battleLog,
          counterAttackMessage,
          defeatMessage,
          "Now that you've been defeated, there's only one option left.",
        ]);
  
        if (!encounterComplete) {
          setCurrentMonster(null);
          setMode("gameover");
          setEncounterComplete(true);
        }
      } else {
        const updatedPlayer = { ...player, currentHP: newPlayerHealth };
        updatePlayer(updatedPlayer);
        setBattleLog((prevBattleLog) => [...prevBattleLog, counterAttackMessage]);
      }
    }
  };

  const handleNextEncounter = () => {
    setEncounterComplete(false);
    handleEncounter();
  };

  const handleRun = () => {
    const runMessage = "You ran away from the monster!";
    setBattleLog([...battleLog, runMessage]);
    setCurrentMonster(null);
    setBattleLog([]);
    setMode("initial");
  };

  return {
    mode,
    battleLog,
    currentMonster,
    previousCounterAttack,
    encounterComplete,
    setMode,
    setBattleLog,
    setCurrentMonster,
    setPreviousCounterAttack,
    setEncounterComplete,
    handleEncounter,
    calculateDamage,
    getRandomCounterAttackText,
    handleAttack,
    handleNextEncounter,
    handleRun
  };
};

export default useEncounterService;
