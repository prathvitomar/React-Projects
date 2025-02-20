import React, { useRef, useState } from "react";
import "../styles.css";

function OTPlogin({ length = 4, onOTPSubmit }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  function handleChange(index, e) {
    const value = e.target.value;
    //check if value is valid
    if (isNaN(value)) {
      alert("Invalid Input");
      return;
    }
    // navigate to next input field
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp);

    
    // check if value reaches the full length
    const combinedOtp = newOtp.join("");
    if(combinedOtp.length === length){
        onOTPSubmit(combinedOtp);
    }

    if(value && index < length - 1 && inputRefs.current[index + 1]){
        inputRefs.current[index + 1].focus();
    }
  }


  function handleKeyDown(index, e) {
        if(e.key === "Backspace") {
            if(!e.target.value && inputRefs.current[index - 1] && index > 0){
                inputRefs.current[index - 1].focus();
            }
        }
  }

  return (
    <>
      <h1>Enter OTP</h1>
      {otp.map((value, index) => (
        <input
          className="input-field"
          ref={(input) => {
            inputRefs.current[index] = input;
          }}
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </>
  );
}

export default OTPlogin;
