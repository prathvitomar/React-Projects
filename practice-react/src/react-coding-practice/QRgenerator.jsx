import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRgenerator() {
  const [name, setName] = useState("");
  const [qr, setQr] = useState("");

  const generateQr = () =>{
    setQr(name);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={generateQr}>Generate QR Code</button>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={qr}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </>
  );
}

export default QRgenerator;
