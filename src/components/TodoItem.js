import React from 'react'
import { useDispatch } from 'react-redux'

import { setCheck, deleteTodo} from '../feature/todoSlice'

import { useState } from 'react'

export default function TodoItem({name, done, id}) {
const dispatch = useDispatch()

const handelCheck = ()=>{
    dispatch(setCheck(id))
}

const hande = ()=>{
    dispatch(deleteTodo(id))
}



    return (
        <div style={{height: "40px", marginTop: '10px', borderBottomColor: "black"}} class="form-check container">
        <input  class="form-check-input" type="checkbox" value="" id={done} checked={done} onChange={handelCheck}/>
        <label  class="form-check-label" for={done}>
          <div style={{display:"flex"}}>
          {name}

         
          
          </div>
  

        </label>
        <button className="btn btn-success"  style={{float :"right", height : "40px"}} onClick={hande}>delete</button>
      </div>
    )
}
