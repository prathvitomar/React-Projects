import { createContext, useContext } from "react";

export const ThemeContextTwo = createContext({
    todos : [{
        id : 1,
        todo : "This is Todo message",
        completed : false
    }],
    addTodo : (todo)=> {},
    updateTodo : (id, todo)=> {},
    deleteTodo : (id)=> {},
    toggleCompleted : (id)=> {},
});

export const ThemeProvideTwo = ThemeContextTwo.Provider;

export default function useThemeTwo(){
    return useContext(ThemeContextTwo);
}