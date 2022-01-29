import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Todos(props) {
    
    const [complete, setComplete] = useState(false)
    
    let style = complete ? "line-through" : "none"

    function completed() {
        setComplete(prevComplete => {
            return !prevComplete
        })
    }

    const [color, setColor] = useState("")

    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * 5)

        switch(randomNumber){
            case 0:
                setColor("#39CCCC");
                break;
            case 1: 
                setColor("#7fdbff");
                break;
            case 2: 
                setColor("#001f3f");
                break;
            case 3:
                setColor("#008080");
                break;
            case 4:
                setColor("#7f7e4");
                break;
            default: 
                setColor("#5a5ada");
        }
    }, [])

    return (
        <div style={{backgroundColor: color}} className="todo">
            {complete && <h3>Completed!</h3>}
            <h1 className="todo--item" onClick={completed} style={{textDecoration: style}}>{props.task}</h1>
            <button className="todo--delete" onClick={props.handleClick}>X</button>
        </div>
    )
}