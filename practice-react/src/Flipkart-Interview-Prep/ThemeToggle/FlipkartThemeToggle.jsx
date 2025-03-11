import React from "react";
import './styles.css'
import useTheme from "./useTheme";

function FlipkartThemeToggle() {
  const {theme, toggleTheme} = useTheme();

  return (
    <>
      <div>
        <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
          <h1 style={{margin : '10px'}}>Toggle Theme</h1>
          <button onClick={toggleTheme}>{theme}</button>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            consequatur explicabo architecto maiores, modi nihil! Aut qui nemo
            explicabo, a obcaecati reiciendis nostrum assumenda dolores soluta
            cum perferendis temporibus quas rem eveniet! Dolor facilis delectus
            tempore illum, sequi a qui expedita fuga facere quo. Asperiores
            perspiciatis quisquam fugiat enim dicta dolorem quae dolor deserunt
            officia. Ad aliquid dolore soluta odit, perferendis sed delectus
            omnis blanditiis ratione veritatis asperiores, molestiae iste, ea
            neque placeat quos aspernatur quas! Fuga ducimus repellat esse
            omnis, adipisci nemo asperiores sint ipsa ad inventore officia saepe
            nisi corporis. Aliquid, iste quis! Earum accusamus vel facilis
            fugit.
          </p>
        </div>
      </div>
    </>
  );
}

export default FlipkartThemeToggle;
