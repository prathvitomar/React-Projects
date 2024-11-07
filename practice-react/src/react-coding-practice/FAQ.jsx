import React, { useEffect, useState } from "react";

function FAQ({ title, description, id, ...props }) {
  useEffect(() => {
    if(id === 1){
        setShow(true);
    }
  }, []);
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          height: "200px",
          width: "200px",
        }}
      >
        <h1>{title}</h1>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Hide" : "Show description"}
        </p>
        {show && <h3>{description}</h3>}
      </div>
    </>
  );
}

export default FAQ;
