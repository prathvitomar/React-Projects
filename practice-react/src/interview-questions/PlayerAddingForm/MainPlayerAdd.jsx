import { useState } from "react";
import "./styles.css";

export default function MainPlayerAdd() {
  const [playerName, setPlayerName] = useState("");
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectPlayers, setSelectPlayers] = useState([]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setAllPlayers((prev) => [...prev, playerName]);
      setPlayerName("");
    }
  }

  function handleAdd() {
    setAllPlayers((prev) => [...prev, playerName]);
    setPlayerName("");
  }

  function handleFinalPlayer(index) {
    const newPlayer = allPlayers[index];
    setSelectPlayers((prev) => [...prev, newPlayer]);
  }

  function handleRemovePlayer(index) {
    const newArr = [...allPlayers];
    const filteredArr = newArr.filter((arr) => arr !== newArr[index]);
    console.log(filteredArr);
    setAllPlayers(filteredArr);
  }

  function handleSubmit() {
    alert(`Final Players : ${selectPlayers}`);
    setAllPlayers([]);
    setSelectPlayers([]);
  }

  return (
    <div className="App">
      <div>
        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
          }}
        >
          {selectPlayers.length > 0 && <h1>Team XI : </h1>}
          {allPlayers.length > 0 &&
            allPlayers.map((player, index) => (
              <div
                style={{
                  display: "flex",
                }}
                key={index}
              >
                <li>{player}</li>
                <button onClick={() => handleFinalPlayer(index)}>Add</button>
                <button onClick={() => handleRemovePlayer(index)}>
                  Remove
                </button>
              </div>
            ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
          }}
        >
          {selectPlayers.length > 0 && <h1>Final Players : </h1>}
          {selectPlayers.length > 0 &&
            selectPlayers.map((player, index) => (
              <div
                style={{
                  display: "flex",
                }}
                key={index}
              >
                <li>{player}</li>
              </div>
            ))}
          {selectPlayers.length > 0 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}
