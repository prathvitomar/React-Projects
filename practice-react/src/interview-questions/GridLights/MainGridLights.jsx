import { useState } from "react";
import GridLights from "./components/GridLights";
import "./styles.css";

export default function MainGridLights() {
  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [removingIds, setRemovingIds] = useState([]);

  function handleIds(divId) {
    if (removingIds.includes(divId)) return;
    const newIds = [...removingIds, divId];
    setRemovingIds(newIds);
    console.log(removingIds);
    if (newIds.length === ids.length) {
      removingAllIds(ids);
    }
  }

  function removingAllIds(removingIds) {
    let index = removingIds.length - 1;

    let timer = setInterval(() => {
      setRemovingIds((prev) => {
        if (prev.length === 0) {
          clearInterval(timer);
          return [];
        }
        return prev.slice(0, -1);
      });

      index--;
      if (index < 0) {
        clearInterval(timer);
      }
    }, 300);
  }

  return (
    <div className="App">
      <h1>Grid Lights</h1>
      <GridLights
        ids={ids}
        handleIds={(divId) => handleIds(divId)}
        removingIds={removingIds}
      />
    </div>
  );
}
