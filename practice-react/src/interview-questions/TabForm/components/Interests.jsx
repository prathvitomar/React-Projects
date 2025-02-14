import "../../styles.css";

export default function Interests({ formData, setFormData, errors }) {
    const { interests } = formData;
    function handleCheckbox(e) {
      const { name, value, checked } = e.target;
  
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, name]
          : prevData.interests.filter((interest) => interest !== name),
      }));
    }
  
    return (
      <>
        <div className="checkboxes">
          <div className="checkbox">
            <input
              type="checkbox"
              name="coding"
              checked={interests.includes("coding")}
              onChange={handleCheckbox}
            />
            <label htmlFor="">Coding</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="music"
              checked={interests.includes("music")}
              onChange={handleCheckbox}
            />
            <label htmlFor="">Music</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="javascript"
              checked={interests.includes("javascript")}
              onChange={handleCheckbox}
            />
            <label htmlFor="">Javscript</label>
          </div>
        </div>
        {errors.interests && <span className="error">{errors.interests}</span>}
      </>
    );
  }
  