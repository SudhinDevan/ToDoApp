import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div>

      <FontAwesomeIcon icon={faCheckCircle} onClick={()=> toggleComplete(task.id)}/>
      <FontAwesomeIcon icon={faPenToSquare} style={{ marginLeft: '0.75rem' }} onClick={() => editTodo(task.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>

      </div>
    </div>
  )
}

export default Todo

