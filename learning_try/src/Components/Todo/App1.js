import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialList = [
    {id:0, title: 'Buy Milk', done: true},
    {id:1, title: 'Buy Cream', done: false},
    {id:2, title: 'Buy Sugar', done: false}, 
];


export default function App1(){

    const[todos, setTodos] = useState(initialList);

    function handleAddTodo(title){
        setTodos([...todos,
            {
                id: nextId++, title: title, done: false
            }
        ])
    };

    function handleChangeTodo(changeTodo){
        setTodos(todos.map(todo=>{
            if(todo.id === changeTodo.id){return changeTodo}else{return todo};
        }))
    };

    function handleDeleteTodo(deleteTodo){
        setTodos(todos.filter(todo=>
            todo.id !== deleteTodo))
    };

    
    return(
        
        <>
            <AddTodo onAddTodo = {handleAddTodo}/>
            <TaskList 
                todos = {todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo = {handleDeleteTodo}
            />
        </>
    )
}