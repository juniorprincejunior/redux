import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../feature/todoSlice'

export default function Input() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = ()=>{
        dispatch (saveTodo({
            item : input,
            done: false,
            id : Date.now()
        }))
    }
    return (
        <div className="container" style={{display : "flex"}}>
            <input className="form-control" type="text" placeholder="enter your todo" value={input} onChange={e=>setInput(e.target.value)}/>
            <button className="btn btn-secondary" onClick={addTodo}>add</button>
        </div>
    )
}
