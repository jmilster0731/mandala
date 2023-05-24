import "./Map.css";
import { Link } from "react-router-dom";

//expandable list of tile descriptions to pull from if map grid tiles get named
const tileDescriptions = {
  CAMPSITE: "This is the campsite area.",
  FOREST: "This is the forest area."
};

// a list of the 36 tiles as needed
const mapGridTiles = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "CAMPSITE",
  "FOREST",
  "FOREST",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36"
];


export default function Map() {
  const getTileDescription = (id) => {
    return tileDescriptions[id] || null; // Return null if description doesn't exist
  };

  const handleTileHover = (id) => {
    const description = getTileDescription(id);
    if (description) {
      // TODO: Figure this line out because this is still here because for some reason my hover wasn't working without it; even though it's not actually doing anything?!?
    }
  };

  const renderMapGridTile = (tileId) => {
    const tileDescription = getTileDescription(tileId);
    const isNumber = !isNaN(parseInt(tileId));

    const tileContent = (
      <div
        className="map-grid-tile"
        id={tileId}
        onMouseEnter={() => handleTileHover(tileId)}
      >
        {tileDescription && (
          <div className="map-grid-tooltip">
            {tileDescription}
          </div>
        )}
      </div>
    );

    return isNumber ? (
      tileContent
    ) : (
      <Link to={`/${tileId.toLowerCase()}`} key={tileId}>
        {tileContent}
      </Link>
    );
  };

  return (
    <div className="map-grid">
      {mapGridTiles.map((tileId) => renderMapGridTile(tileId))}
    </div>
  );
}