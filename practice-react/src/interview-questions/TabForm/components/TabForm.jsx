import { useState, useEffect } from "react";
import Profile from "./Profile.jsx";
import Interests from "./Interests.jsx";
import Settings from "./Settings.jsx";
import "../../styles.css"

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "light",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let err = {};
        if (!formData.name || formData.name.length < 2) {
          err.name = "Enter Valid Name";
        }
        if (!formData.age || formData.age < 18) {
          err.age = "Enter Valid Age";
        }
        if (!formData.email) {
          err.email = "Enter Valid Email";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        let err = {};
        if (!formData.interests || formData.interests.length < 1) {
          err.interests = "Enter Select Atleast one Interest";
        }
        setErrors(err);
        return err.interests ? false : true;
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

  const ActiveTabComponent = tabs[activeTab].component;
  function handleActiveTab(index) {
    if (tabs[activeTab].validate()) {
      setActiveTab(index);
    }
  }

  function handlePrev() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      age: "",
      email: "",
      interests: [],
      theme: "light",
    });
    setActiveTab(0);
    setErrors({});
  }

  return (
    <>
      <div>
        <div className="tabs-headings">
          {tabs.length > 0 &&
            tabs.map((tab, index) => (
              <div
                onClick={() => handleActiveTab(index)}
                className="tabs"
                key={index}
              >
                {tab.name}
              </div>
            ))}
        </div>
        <div className="active-tab">
          <ActiveTabComponent
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        </div>
        <div>
          <button disabled={activeTab === 0} onClick={handlePrev}>
            Prev
          </button>
          <button disabled={activeTab === tabs.length - 1} onClick={handleNext}>
            Next
          </button>
          {activeTab === tabs.length - 1 && (
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}
