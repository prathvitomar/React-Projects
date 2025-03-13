import React, { useState } from "react";

function FlipkartModal() {
  const [openModal, setOpenModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor : openModal ? 'gray' : 'white'
        }}
      >
        {openModal ? (
          <div
            style={{
              height: "300px",
              width: "300px",
              border: "1px solid black",
              backgroundColor :'white'
            }}
          >
            {isAccepted ? (
              <div
                style={{
                  height: "100%",
                }}
              >
                <span
                  style={{ cursor: "pointer", padding: "10px" }}
                  onClick={() => {
                    setOpenModal(false);
                    setIsAccepted(false);
                  }}
                >
                  X
                </span>
                <h1
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Accepted
                </h1>
              </div>
            ) : (
              <>
                <span
                  style={{ cursor: "pointer", padding: "10px" }}
                  onClick={() => {
                    setOpenModal(false);
                    setIsAccepted(false);
                  }}
                >
                  X
                </span>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p>Click Below Button to Accept Offer</p>
                  <button onClick={() => setIsAccepted(true)}>
                    Accept Offer
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <button onClick={() => setOpenModal(true)}>Open Modal</button>
        )}
      </div>
    </>
  );
}

export default FlipkartModal;
