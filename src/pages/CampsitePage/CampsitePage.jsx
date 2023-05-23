import React from "react";
import "./CampsitePage.css";

const CampsitePage = ({ player, updatePlayer }) => {
  const handleRest = () => {
    const updatedPlayer = {
      ...player,
      currentHP: player.maxHP,
      currentMana: player.maxMana
    };
    updatePlayer(updatedPlayer);
  };

  const renderRestButton = () => {
    if (
      player.currentHP === player.maxHP &&
      player.currentMana === player.maxMana
    ) {
      return (
        <button className="rest-button" disabled>
          You are already fully rested! Feel free to sit and enjoy the ambiance
          though...
        </button>
      );
    }

    return (
      <button onClick={handleRest} className="rest-button">
        Knowing you're among friends, you may now rest...
      </button>
    );
  };

  return (
    <div className="campsite-bg-splash">
      <h2>Welcome to the Adventurer's Campsite</h2>
      <img src="https://i.imgur.com/QGLC4lk.jpg" alt="" />
      <div className="campsite-flavor-text-container">
        <p>
          As you return to the campsite, you are greeted by the sight of your
          fellow adventurers gathered around a warm campfire. The atmosphere is
          lively, filled with laughter, camaraderie, and the shared excitement
          of each person's unique journey.
        </p>
        <p>
          You find a spot to settle down, joining the circle of adventurers. The
          crackling fire casts dancing shadows on the surrounding trees,
          creating a cozy ambiance. The campfire's warm glow illuminates the
          faces of your companions as they eagerly share their tales of triumph,
          discovery, and even the occasional mishap.
        </p>
        {renderRestButton()}
      </div>
    </div>
  );
};

export default CampsitePage;