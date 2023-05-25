const ForestMonsters = [
    {
      name: "Ankheg",
      description: "A large, cockroach-like creature.",
      level: 1,
      constitution: 13,
      intelligence: 1,
      strength: 17,
      dexterity: 11,
      wisdom: 13,
      charisma: 6,
      currentHP: 0,
      maxHP: 0,
      currentMana: 0,
      maxMana: 0,
      attackPower: 0,
      introText: "You come across an Ankheg lurking in the forest!",
      counterAttackText: [
        "The Ankheg scuttles towards you, its sharp mandibles clacking menacingly. It strikes out at you",
        "The ground trembles as the Ankheg burrows beneath the surface. Suddenly, it bursts back out of the ground to strike, ",
        "Acidic residue oozes from the Ankheg's mandibles, leaving a trail behind it. As you maneuvered around to strike you stepped on the residue, "
      ]
    },
    {
      name: "Awakened Tree",
      description:
        "This ordinary tree seems to have been given sentience and mobility by the awaken spell or similar magic.",
      level: 2,
      constitution: 15,
      intelligence: 10,
      strength: 19,
      dexterity: 6,
      wisdom: 10,
      charisma: 7,
      currentHP: 0,
      maxHP: 0,
      currentMana: 0,
      maxMana: 0,
      attackPower: 0,
      introText: "You stumble upon an Awakened Tree standing tall in the forest!",
      counterAttackText: [
        "The branches of the Awakened Tree sway ominously, as if reaching out to you. Mesmerized you step toward the tree, and the branches suddenly strike you ",
        "The gnarled roots of the Awakened Tree grip the ground tightly, giving it a sturdy stance. You notice too late that the roots of the tree have burst out from under you ",
        "Leaves rustle on the Awakened Tree, whispering secrets of the forest. A psychic assault flood's your brain "
      ]
    },
    {
      name: "Dryad",
      description:
        "A beautiful nature spirit who has been angered by your disturbance of her forest...",
      level: 3,
      constitution: 11,
      intelligence: 14,
      strength: 10,
      dexterity: 12,
      wisdom: 15,
      charisma: 18,
      currentHP: 0,
      maxHP: 0,
      currentMana: 0,
      maxMana: 0,
      attackPower: 0,
      introText: "You encounter an enraged Dryad standing before you!",
      counterAttackText: [
        "The Dryad's eyes glow with a vibrant green, filled with anger and disdain. Vines strike out at you ",
        "The air around the Dryad crackles with an otherworldly energy. A ball of nature energy forms in her palm and she throw's it at you ",
        "Flowers and plants wither in the presence of the wrathful Dryad. The field of decay saps you of your strength "
      ]
    }
  ];
  
  // Calculate and set the monster stats
  ForestMonsters.forEach((monster) => {
    monster.maxHP = 100 + monster.constitution * 10;
    monster.currentHP = monster.maxHP;
    monster.maxMana = 50 + monster.intelligence * 5;
    monster.currentMana = monster.maxMana;
    monster.attackPower = monster.strength * 2;
  });
  
  export default ForestMonsters;
  