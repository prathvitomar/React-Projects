import { useState, useEffect } from "react";

export default function MainProgress2() {
    const [bars, setBars] = useState([]);

    function addBar() {
        setBars((prevBars) => [...prevBars, 0]); // Start with 0 progress
    }

    useEffect(() => {
        const intervals = bars.map((_, index) => {
            return setInterval(() => {
                setBars((prevBars) =>
                    prevBars.map((progress, i) =>
                        i === index ? Math.min(progress + 5, 100) : progress
                    )
                );
            }, 100);
        });

        return () => intervals.forEach(clearInterval);
    }, [bars.length]); // Run only when a new bar is added

    return (
        <>
            <button onClick={addBar}>Add</button>
            {bars.map((progress, index) => (
                <div key={index} style={{ marginTop: "10px", width: "100%" }}>
                    <div
                        style={{
                            height: "20px",
                            width: `${progress}%`,
                            backgroundColor: "green",
                            transition: "width 0.1s linear",
                        }}
                    />
                </div>
            ))}
        </>
    );
}
