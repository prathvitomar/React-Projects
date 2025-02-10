
import { useEffect } from "react";
import { useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#121212";
        document.body.style.color = theme === "light" ? "#000" : "#fff";
    }, [theme]);

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }

    return [theme, toggleTheme];
}
