import React, { useState } from "react";
import OTPconfirmation from "./OTPconfirmation";

function FlipkartOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendOtp, setSendOtp] = useState(false);

  function handleNumber() {
    if (phoneNumber.length < 10) {
      alert("Please Enter Valid Number");
      setPhoneNumber("");
      return;
    } else {
      setSendOtp(true);
    }
  }

  function onSubmit(){

  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleNumber}>Send OTP</button>
        </div>
        <div>
          {sendOtp ? <OTPconfirmation length={4} onSubmit={onSubmit}/> : <p>Please Enter Phone Number</p>}
        </div>
      </div>
    </>
  );
}

export default FlipkartOTP;
