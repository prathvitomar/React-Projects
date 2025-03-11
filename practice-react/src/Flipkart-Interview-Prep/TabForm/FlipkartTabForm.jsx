import React, { Component, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

function FlipkartTabForm() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    hobbies: [],
    theme: "light",
  });
  const config = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let err = {};
        if (formData.name.length < 4) {
          err.name = "Please Enter Longer Name";
        }
        if (formData.age < 18) {
          err.age = "Please Legal Age";
        }
        if (!formData.email.includes("com")) {
          err.email = "Please Valid Email";
        }
        setError(err);
        return err.name || err.age || err.email ? true : false;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        let err = {};
        if (!formData.hobbies.length > 0) {
          err.hobbies = "Please Select Atleast One Hobby";
        }
        setError(err);
        return err.hobbies ? true : false;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveComponent = config[currentComponent].component;

  function handleTabs(index) {
    if (!config[currentComponent].validate()) {
      setCurrentComponent(index);
    }
    console.log(error)
  }

  function handlePrev(){
    if(!config[currentComponent].validate()){
      setCurrentComponent(prev => prev - 1)
    }
  }

  function handleNext(){
    if(!config[currentComponent].validate()){
      setCurrentComponent(prev => prev + 1)
    }
  }

  function handleSubmit() {
    console.log(formData)
    setFormData({
      name: "",
      age: "",
      email: "",
      hobbies: [],
      theme: "light",
    })
    setError({})
    setCurrentComponent(0);
  }

  return (
    <>
      <div style={{ padding: "15px" }}>
        <div style={{ display: "flex" }}>
          {config.map((item, i) => (
            <div
              style={{
                display: "flex",
                padding: "15px",
                border: "1px solid black",
              }}
              key={i}
              onClick={() => handleTabs(i)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            padding: "15px",
            border: "1px solid black",
            height: "300px",
          }}
        >
          <ActiveComponent
            error={error}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>
      <div>
        <button disabled={currentComponent === 0} onClick={handlePrev}>
          Prev
        </button>
        <button
          disabled={currentComponent === config.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
        {currentComponent === config.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </>
  );
}

export default FlipkartTabForm;
