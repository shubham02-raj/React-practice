import React from 'react'
import { FaTrashCan } from "react-icons/fa6";


const TodoList = (props) => {
  return (
    <li className='list-item'>
        {props.item}
      <span className='icons icon-delete' onClick={(e) => {
        props.deleteItem(props.index)
      }}>
        <FaTrashCan />
      </span>
    </li>
  )
}

export default TodoList
