import "../../styles.css";

export default function Profile({ formData, setFormData, errors }) {
    const { name, age, email } = formData;
    function handleFormData(e) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  
    return (
      <>
        <div className="tab">
          <label htmlFor="">Profile</label>
          <input
            className="input-field"
            type="text"
            name="name"
            value={name}
            onChange={handleFormData}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            className="input-field"
            type="number"
            name="age"
            value={age}
            onChange={handleFormData}
          />
          {errors.age && <span className="error">{errors.age}</span>}
          <input
            className="input-field"
            type="email"
            name="email"
            value={email}
            onChange={handleFormData}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </>
    );
  }
  