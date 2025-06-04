import React from "react";
import "./webStyles.css";

function Web1() {
  return (
    <>
      <div className="main-div">
        <nav className="nav">
          <h2>Logo</h2>
          <div className="second-div">
            <h4 className="nav-icons">Home</h4>
            <h4 className="nav-icons">About</h4>
            <h4 className="nav-icons">Contact</h4>
            <h4 className="nav-icons">About Us</h4>
            <h4 className="menu">Menu</h4>
          </div>
        </nav>
        <div className="content">
          <div className="left">
            <h2>
              Learning from Coolest Coding Platform of <span>India.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              molestias minima, adipisci itaque reiciendis quas dolores.
              Reiciendis ex perferendis numquam nisi voluptatibus repudiandae
              consectetur quaerat incidunt ullam, mollitia modi. Eligendi.
            </p>
            <button>Explore Now</button>
          </div>
          <div className="right">
            <img className="image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Computer Science" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Web1;
