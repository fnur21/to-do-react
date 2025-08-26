import React from 'react'
import Todo from './Todo'

function TodoList({todos , onRemoveTodo, onUpdateTodo }) {
  return (
    <div style={{width:'100%' , margin:'30px',border:'1px solid grey', padding:'10px'}}>
     {
        todos && todos.map((todo)=>(
          <Todo key={todo.id} todo={todo} removeT={onRemoveTodo}/>
        ))
      }
        
    </div>
  )
}

export default TodoList