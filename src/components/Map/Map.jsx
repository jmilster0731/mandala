import React, { useState } from "react";
import "./Map.css";
import { Link } from "react-router-dom";

const tileDescriptions = {
  CAMPSITE: "This is the campsite area.",
  FOREST: "This is the forest area."
  // Add more descriptions for other tiles if needed
};

export default function Map({ user }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

  const getTileDescription = (id) => {
    return tileDescriptions[id] || null; // Return null if description doesn't exist
  };

  const handleTileHover = (id) => {
    const description = getTileDescription(id);
    if (description) {
      setShowTooltip(true);
      setTooltipContent(description);
    }
  };

  return (
    <div className="map-grid">
      <div
        className="map-grid-tile"
        id="1"
        onMouseEnter={() => handleTileHover("1")}
      >
        {getTileDescription("1") && (
          <div className="map-grid-tooltip">{getTileDescription("1")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="2"
        onMouseEnter={() => handleTileHover("2")}
      >
        {getTileDescription("2") && (
          <div className="map-grid-tooltip">{getTileDescription("2")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="3"
        onMouseEnter={() => handleTileHover("3")}
      >
        {getTileDescription("3") && (
          <div className="map-grid-tooltip">{getTileDescription("3")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="4"
        onMouseEnter={() => handleTileHover("4")}
      >
        {getTileDescription("4") && (
          <div className="map-grid-tooltip">{getTileDescription("4")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="5"
        onMouseEnter={() => handleTileHover("5")}
      >
        {getTileDescription("5") && (
          <div className="map-grid-tooltip">{getTileDescription("5")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="6"
        onMouseEnter={() => handleTileHover("6")}
      >
        {getTileDescription("6") && (
          <div className="map-grid-tooltip">{getTileDescription("6")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="7"
        onMouseEnter={() => handleTileHover("7")}
      >
        {getTileDescription("7") && (
          <div className="map-grid-tooltip">{getTileDescription("7")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="8"
        onMouseEnter={() => handleTileHover("8")}
      >
        {getTileDescription("8") && (
          <div className="map-grid-tooltip">{getTileDescription("8")}</div>
        )}
      </div>
      <Link to="/campsite">
        <div
          className="map-grid-tile"
          id="CAMPSITE"
          onMouseEnter={() => handleTileHover("CAMPSITE")}
        >
          {getTileDescription("CAMPSITE") && (
            <div className="map-grid-tooltip">
              {getTileDescription("CAMPSITE")}
            </div>
          )}
        </div>
      </Link>
      <Link to="/forest">
        <div
          className="map-grid-tile"
          id="FOREST"
          onMouseEnter={() => handleTileHover("FOREST")}
        >
          {getTileDescription("FOREST") && (
            <div className="map-grid-tooltip">
              {getTileDescription("FOREST")}
            </div>
          )}
        </div>
      </Link>
      <Link to="/forest">
        <div
          className="map-grid-tile"
          id="FOREST"
          onMouseEnter={() => handleTileHover("FOREST")}
        >
          {getTileDescription("FOREST") && (
            <div className="map-grid-tooltip">
              {getTileDescription("FOREST")}
            </div>
          )}
        </div>
      </Link>
      <div
        className="map-grid-tile"
        id="12"
        onMouseEnter={() => handleTileHover("12")}
      >
        {getTileDescription("12") && (
          <div className="map-grid-tooltip">{getTileDescription("12")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="13"
        onMouseEnter={() => handleTileHover("13")}
      >
        {getTileDescription("13") && (
          <div className="map-grid-tooltip">{getTileDescription("13")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="14"
        onMouseEnter={() => handleTileHover("14")}
      >
        {getTileDescription("14") && (
          <div className="map-grid-tooltip">{getTileDescription("14")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="15"
        onMouseEnter={() => handleTileHover("15")}
      >
        {getTileDescription("15") && (
          <div className="map-grid-tooltip">{getTileDescription("15")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="16"
        onMouseEnter={() => handleTileHover("16")}
      >
        {getTileDescription("16") && (
          <div className="map-grid-tooltip">{getTileDescription("16")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="17"
        onMouseEnter={() => handleTileHover("17")}
      >
        {getTileDescription("17") && (
          <div className="map-grid-tooltip">{getTileDescription("17")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="18"
        onMouseEnter={() => handleTileHover("18")}
      >
        {getTileDescription("18") && (
          <div className="map-grid-tooltip">{getTileDescription("18")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="19"
        onMouseEnter={() => handleTileHover("19")}
      >
        {getTileDescription("19") && (
          <div className="map-grid-tooltip">{getTileDescription("19")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="20"
        onMouseEnter={() => handleTileHover("20")}
      >
        {getTileDescription("20") && (
          <div className="map-grid-tooltip">{getTileDescription("20")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="21"
        onMouseEnter={() => handleTileHover("21")}
      >
        {getTileDescription("21") && (
          <div className="map-grid-tooltip">{getTileDescription("21")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="22"
        onMouseEnter={() => handleTileHover("22")}
      >
        {getTileDescription("22") && (
          <div className="map-grid-tooltip">{getTileDescription("22")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="23"
        onMouseEnter={() => handleTileHover("23")}
      >
        {getTileDescription("23") && (
          <div className="map-grid-tooltip">{getTileDescription("23")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="24"
        onMouseEnter={() => handleTileHover("24")}
      >
        {getTileDescription("24") && (
          <div className="map-grid-tooltip">{getTileDescription("24")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="25"
        onMouseEnter={() => handleTileHover("25")}
      >
        {getTileDescription("25") && (
          <div className="map-grid-tooltip">{getTileDescription("25")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="26"
        onMouseEnter={() => handleTileHover("26")}
      >
        {getTileDescription("26") && (
          <div className="map-grid-tooltip">{getTileDescription("26")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="27"
        onMouseEnter={() => handleTileHover("27")}
      >
        {getTileDescription("27") && (
          <div className="map-grid-tooltip">{getTileDescription("27")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="28"
        onMouseEnter={() => handleTileHover("28")}
      >
        {getTileDescription("28") && (
          <div className="map-grid-tooltip">{getTileDescription("28")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="29"
        onMouseEnter={() => handleTileHover("29")}
      >
        {getTileDescription("29") && (
          <div className="map-grid-tooltip">{getTileDescription("29")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="30"
        onMouseEnter={() => handleTileHover("30")}
      >
        {getTileDescription("30") && (
          <div className="map-grid-tooltip">{getTileDescription("30")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="31"
        onMouseEnter={() => handleTileHover("31")}
      >
        {getTileDescription("31") && (
          <div className="map-grid-tooltip">{getTileDescription("31")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="32"
        onMouseEnter={() => handleTileHover("32")}
      >
        {getTileDescription("32") && (
          <div className="map-grid-tooltip">{getTileDescription("32")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="33"
        onMouseEnter={() => handleTileHover("33")}
      >
        {getTileDescription("33") && (
          <div className="map-grid-tooltip">{getTileDescription("33")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="34"
        onMouseEnter={() => handleTileHover("34")}
      >
        {getTileDescription("34") && (
          <div className="map-grid-tooltip">{getTileDescription("34")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="35"
        onMouseEnter={() => handleTileHover("35")}
      >
        {getTileDescription("35") && (
          <div className="map-grid-tooltip">{getTileDescription("35")}</div>
        )}
      </div>
      <div
        className="map-grid-tile"
        id="36"
        onMouseEnter={() => handleTileHover("36")}
      >
        {getTileDescription("36") && (
          <div className="map-grid-tooltip">{getTileDescription("36")}</div>
        )}
      </div>
    </div>
  );
}
