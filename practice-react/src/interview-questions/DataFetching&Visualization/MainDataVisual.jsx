import React, { useEffect, useState } from "react";

function MainDataVisual() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const obj = {};
        const apiData = await fetch(
          "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
        );
        const res = await apiData.text();
        const numbers = res.split("\n").map(Number).filter(Boolean);

        for (let num of numbers) {
          obj[num] = (obj[num] || 0) + 1;
        }

        setData(obj);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const maxFreq = Math.max(...Object.values(data), 10); 
  const yAxisLabels = Array.from(
    { length: Math.ceil(maxFreq / 10) + 1 },
    (_, i) => i * 10
  ).reverse(); 

  return (
    <div style={{ width: "80%", margin: "20px auto", textAlign: "center" }}>
      <h2 style={{
        marginBottom : `50px`
      }}>Histogram</h2>
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px", textAlign: "right", paddingRight: "10px" }}>
          {yAxisLabels.map((label) => (
            <div key={label} style={{ height: "30px", fontSize: "14px" }}>{label}</div>
          ))}
        </div>

        
        <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "300px", borderLeft: "2px solid black", borderBottom: "2px solid black", padding: "10px" }}>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "30px",
                  height: `${(value / maxFreq) * 300}px`,
                  backgroundColor: "blue",
                  margin: "0 auto",
                }}
              ></div>
              <p>{key}</p>
            </div>
          ))}
        </div>
      </div>
      <p>X-axis: Numbers | Y-axis: Frequency</p>
    </div>
  );
}

export default MainDataVisual;
