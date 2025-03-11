import React from "react";

function Settings({ error, formData, setFormData }) {
  function handleChange(e) {
    setFormData(prev => ({...prev, theme : e.target.id}))
  }

  return (
    <>
      <div>
        <div>
          <h2>Setting</h2>
          <div>
            <label htmlFor="">Setting</label>
            <div>
            <div>
              <span>Light</span>
              <input type="radio" name="theme" id="light" onChange={handleChange} checked/>
            </div>
            <div>
              <span>Dark</span>
              <input type="radio" name="theme" id="dark" onChange={handleChange} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
