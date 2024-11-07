import React, { useState } from "react";

function AnnoyingSignupForm() {
  const [step, setStep] = useState(1); // To track which step the user is on
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    const userData = { name, email, dob, password };
    console.log(userData); // Submit user data (just logging here)
    setIsSuccess(true); // Show success screen after submitting
  };

  const handleNext = () => {
    if (step === 1 && name) {
      setStep(2);
    } else if (step === 2 && email) {
      setStep(3);
    } else if (step === 3 && dob) {
      setStep(4);
    } else if (step === 4 && password) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (isSuccess) {
    return <h1>Signup Successful! Thank you for signing up.</h1>;
  }

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <div>
            <button onClick={handleNext} disabled={!name}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Enter Your Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext} disabled={!email}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Enter Your Date of Birth</h2>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext} disabled={!dob}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Step 4: Enter Your Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext} disabled={!password}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnnoyingSignupForm;
