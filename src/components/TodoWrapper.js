import React, {useState} from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const TodoWrapper = () => {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    if (todo.trim() !== '') {
      if (!todos.some((t) => t.task === todo)) {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
      } else {
        alert('Todo already exists!');
      }
    } else {
      alert('Please enter a valid Todo!');
    }
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id===id?{...todo,completed:!todo.completed}:todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id && !todo.completed ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1 style={{textAlign:'center'}}>-Todo List-</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index) => (
         todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
         ):(
           <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
         )
      ))}
    </div>
  )
}

export default TodoWrapper
