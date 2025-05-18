import { selector } from "recoil";
import { todo } from "../atoms/todo";

export const totalTodos = selector({
    key : 'totalTodoState',
    get : ({get})=>{
        const todos = get(todo);
        return todos.length;
    }
})