export default function ThemeButton({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            style={{
                height: "30px",
                width: "80px",
                backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease"
            }}
        >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
}
