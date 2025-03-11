import React from "react";

function Profile({ error, formData, setFormData }) {
  function handleChange(e) {
    console.log(e)
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div>
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {error.name && <span>{error.name}</span>}
        </div>
        <div>
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
          {error.age && <span>{error.age}</span>}
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {error.email && <span>{error.email}</span>}
        </div>
      </div>
    </>
  );
}

export default Profile;
