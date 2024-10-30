import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    mode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}