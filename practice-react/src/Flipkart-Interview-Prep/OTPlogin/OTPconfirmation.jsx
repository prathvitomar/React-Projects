import React, { useRef, useState } from "react";
import "./styles.css";

function OTPconfirmation({ length, onSubmit }) {
  const [otp, setOtp] = useState([...Array(length).fill("")]);
  const inputRef = useRef([]);

  function handleChange(e, index) {
    const value = e.target.value;
    if(isNaN(value)){
        return;
    }
    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    let combined = newOtp.join("");

    if(combined.length === length){
        onSubmit();
        console.log(combined);
    }

    if(index < otp.length && inputRef.current[index+1]){
        inputRef.current[index+1].focus();
    }

  }

  function handleKeyDown(e, index) {
    if(e.key === "Backspace" && index>0 && inputRef.current[index-1]){
        let newOtp = [...otp];
        if(newOtp[index] !== ""){
            newOtp[index] = "";
            setOtp(newOtp)
        } else{
            newOtp[index-1] = "";
            setOtp(newOtp);
            inputRef.current[index-1].focus();
        }
    }   
  }

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {otp.map((value, i) => (
            <div key={i}>
              <input
                className="input-field"
                ref={(input) => (inputRef.current[i] = input)}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e)=>handleKeyDown(e,i)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OTPconfirmation;
