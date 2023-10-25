import React from 'react'
import "./todo.css"
import {useState} from "react";
import "../../App.css"
function Todolist(props) {
  const [listTodo,setListTodo]=useState([]);
  
  return (
    <div className='main'>

    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
          props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
    </div>
  )
}

export default Todolist