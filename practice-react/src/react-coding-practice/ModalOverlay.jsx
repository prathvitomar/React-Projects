import React, { useState } from "react";

function ModalOverlay() {
  const [show, setShow] = useState(false);
  const [accept, setAccept] = useState(false);

  const handleAccept = () => {
    setAccept(true);
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {accept ? (
        <h2>Offer accepted</h2>
      ) : (
        <>
          <button onClick={() => setShow(true)}>Show Offer</button>
          {show && (
            <div
              onClick={handleClose} 
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  width: "300px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h2>Special Offer</h2>
                  <button onClick={handleClose} style={{ fontSize: "16px" }}>
                    X
                  </button>
                </div>
                <p>Get a 50% discount on your next purchase!</p>
                <button onClick={handleAccept}>Accept Offer</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ModalOverlay;
