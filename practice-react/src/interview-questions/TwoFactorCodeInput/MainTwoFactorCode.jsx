import React, { useState } from 'react'
import OTPlogin from './components/OTPlogin';

function MainTwoFactorCode() {
    const length = 4, otpLoginCode = "1234";
    const [phone, setPhone] = useState("");
    const [showOTPLoginPage, setShowOTPLoginPage] = useState(false);

    function onOTPSubmit(otpCode){
        if(otpCode === otpLoginCode){
            alert("Login successful !!!")
        }
        else{
            alert("WRONG OTP !!!")
        }
    }

  return (
    <>
        <div>
            <div>
                <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <button onClick={()=> setShowOTPLoginPage(true)}>Send OTP</button>
            </div>
            {
                showOTPLoginPage && <OTPlogin length={length} onOTPSubmit={onOTPSubmit}/>
            }
        </div>
    </>
  )
}

export default MainTwoFactorCode