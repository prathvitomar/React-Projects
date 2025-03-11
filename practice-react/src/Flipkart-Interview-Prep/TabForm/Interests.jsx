import React from "react";

function Interests({ error, formData, setFormData }) {
  function handleChange(e) {
    const { checked, name, value } = e.target;
    console.log(name);
    setFormData((prev) => ({
      ...prev,
      hobbies: checked ? [...prev.hobbies, name] : prev.hobbies.filter((i) => i !== name),
    }));
  }

  return (
    <>
      <div>
        <div>
          <h3>Hobbies</h3>
          <div>
            <label htmlFor="">Coding</label>
            <input type="checkbox" name="coding" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Music</label>
            <input type="checkbox" name="music" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Boxing</label>
            <input type="checkbox" name="boxing" onChange={handleChange} />
          </div>
        </div>
        {error.hobbies && <p>{error.hobbies}</p>}
      </div>
    </>
  );
}

export default Interests;
