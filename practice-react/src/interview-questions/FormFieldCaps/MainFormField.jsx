import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    blood: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "name"
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value.toUpperCase(),
    }));
  }

  return (
    <div style={{ padding: "20px" }}>
      <label>
        Name: 
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <br /><br />
      <label>
        Blood Group: 
        <input
          type="text"
          name="blood"
          value={formData.blood}
          onChange={handleChange}
          placeholder="Enter blood group (e.g., O+)"
        />
      </label>
    </div>
  );
}
