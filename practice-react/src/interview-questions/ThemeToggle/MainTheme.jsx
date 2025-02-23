import React from "react";
import useTheme from "./hook/useTheme.js";
import "./styles.css"

function MainTheme() {
  const {theme, toggleTheme} = useTheme();
  console.log(theme)

  return (
    <>
      <div className="center-div">
        <div className="title">
          <h1>Toggle Theme</h1>
          <span style={{
            cursor: 'pointer'
          }} onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            voluptatum molestias eum aspernatur similique harum delectus,
            tempora accusantium voluptatem aliquid officia corrupti illum, cum
            praesentium qui repudiandae veniam. Dolores, repellendus minima in
            veritatis quasi inventore voluptatem dolorum. Recusandae quibusdam
            quod nemo, repellendus, saepe veritatis officia impedit enim nulla,
            corporis nesciunt.
          </p>
        </div>
      </div>
    </>
  );
}

export default MainTheme;
