import ThemeButton from "./components/ThemeButton";
import useTheme from "./hooks/useTheme.js";

export default function MainTheme() {
    const [theme, toggleTheme] = useTheme();

    return (
        <div style={{
            height: "100vh",
            width: "100%",
            backgroundColor: theme,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
        }}>
            <h1
            style={{
                marginRight: "10px",
            }}
            >Theme Changer</h1>
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
}
