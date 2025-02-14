import "../../styles.css";

export default function Settings({ formData, setFormData, errors }) {
    const { theme } = formData;
    function handleTheme(e) {
      setFormData((prevData) => ({
        ...prevData,
        theme: e.target.name,
      }));
    }
  
    return (
      <>
        <div>
          <div>
            <input
              type="radio"
              name="light"
              checked={theme === "light"}
              onChange={handleTheme}
            />
            <label>Light</label>
          </div>
          <div>
            <input
              type="radio"
              name="dark"
              value={theme}
              checked={theme === "dark"}
              onChange={handleTheme}
            />
            <label>Dark</label>
          </div>
        </div>
      </>
    );
  }
  