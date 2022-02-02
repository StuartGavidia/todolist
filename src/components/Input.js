import React from 'react'
import { useState } from 'react'
import Todos from './Todos'
import { nanoid } from 'nanoid'

export default function Input() {

    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrentTodo] = useState("") 

    function removeFromList(id) {
        setTodos(prevTodos => {
            return prevTodos.filter((value) => {
                return value.id !== id
            })
        })
    }

    function handleChange(event) {
        const {value} = event.target
        setCurrentTodo(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTodos(prevTodos => {
            return [{
                value: currentTodo,
                id: nanoid(),
                complete: false,
                },
                ...prevTodos
            ]
        })
        setCurrentTodo("")
    }

    function completed(id) {
        setTodos(prevTodos=> {
            return prevTodos.map((item) => {
                if(id === item.id){
                    return {
                        ...item,
                        complete: !item.complete
                    }
                } else {
                    return item
                }
            })
        })
    }

    return (
        <div className="input">
            <form className="input--form" onSubmit={handleSubmit}>
                <input className="input--text" type="text" value={currentTodo} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            <div className="todos">
                {todos.map((todo, i) => <Todos id={todo.id} handleComplete={() => completed(todo.id)} complete={todo.complete} color={i%4} handleClick={() => removeFromList(todo.id)} task={todo.value}/>)}
            </div>
        </div>
    )
}