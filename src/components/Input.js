import React from 'react'
import { useState } from 'react'
import Todos from './Todos'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'

export default function Input() {

    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrentTodo] = useState("") 
    const [listItems, setListItems] = useState([])

    function removeFromList(id) {
        setTodos(prevTodos => {
            return prevTodos.filter((value) => {
                return value.id != id
            })
        })
    }

    useEffect(() => {

        setListItems(prevListItems => {
            return todos.map(todo => {
                return <Todos id={todo.id} handleClick={() => removeFromList(todo.id)} task={todo.value}/>
            })
        })
    }, [todos])

    function handleChange(event) {
        const {value} = event.target
        setCurrentTodo(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTodos(prevTodos => {
            return [...prevTodos, {
                value: currentTodo,
                id: nanoid()
            }]
        })
        setCurrentTodo("")
    }

    return (
        <div className="input">
            <form className="input--form" onSubmit={handleSubmit}>
                <input className="input--text" type="text" value={currentTodo} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            <div className="todos">
                {listItems}
            </div>
        </div>
    )
}