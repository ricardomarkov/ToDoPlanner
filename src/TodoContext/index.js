import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext= React.createContext();

function TodoProvider({children}){
    const {
        item: todos,
        storeItem: storeTodo,
        loading,
        error
        }=useLocalStorage('TODOPLANNER_V1',[]);
        const [filterValue, setFilterValue] = React.useState('');
        const [openModal, setOpenModal]=React.useState(false);
        const completedTodos = todos.filter(todo =>!!todo.completed).length;
        const totalTodos= todos.length;
        const filteredTodos=todos.filter(
        (todo)=>{
            const todoText=todo.text.toLowerCase();
            const filterText=filterValue.toLowerCase();
            return todoText.includes(filterText);
        }
    )
const submitTodo = (text)=>{
    const newTodos=[...todos];
    newTodos.push({
        text,
        completed: false,
    })
    storeTodo(newTodos);
}

    const completeTodo = (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
        (todo)=> todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        storeTodo(newTodos);
    }
    const deleteTodo= (text)=>{
        const newTodos=[...todos];
        const todoIndex = newTodos.findIndex(
        (todo)=> todo.text === text);
        newTodos.splice(todoIndex, 1);
        storeTodo(newTodos);
    }

    return(
        <TodoContext.Provider value= {{
            loading,
            error,
            completedTodos,
            totalTodos,
            filterValue,
            setFilterValue,
            filteredTodos,
            submitTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };