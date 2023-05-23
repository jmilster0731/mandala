import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { usePlayer } from "../../utilities/player-service";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import ForestEncounterPage from "../ForestEncounterPage/ForestEncounterPage";
import CampsitePage from "../CampsitePage/CampsitePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const { player, updatePlayer } = usePlayer();

  return (
    <>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/forest"
              element={
                <ForestEncounterPage
                  player={player}
                  updatePlayer={updatePlayer}
                />
              }
            />
            <Route
              path="/campsite"
              element={
                <CampsitePage player={player} updatePlayer={updatePlayer} />
              }
            />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </>
  );
}
