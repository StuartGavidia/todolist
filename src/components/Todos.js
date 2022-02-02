import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Todos(props) {
    
    let style = props.complete ? "line-through" : "none"

    const [color, setColor] = useState("")

    useEffect(() => {
        switch(props.color){
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
            default: 
                setColor("#5a5ada");
        }
    }, [])

    return (
        <div style={{backgroundColor: color}} className="todo">
            {props.complete && <h3>Completed!</h3>}
            <h1 className="todo--item" onClick={props.handleComplete} style={{textDecoration: style}}>{props.task}</h1>
            <button className="todo--delete" onClick={props.handleClick}>X</button>
        </div>
    )
}