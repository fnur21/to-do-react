import React, { useState } from 'react';
import '../App.css';

function TodoCreate() {
  const [todoText, setTodoText] = useState('');

  const handleAdd = () => {
    if(todoText.trim() !== '') {
      alert(`Yeni Todo: ${todoText}`);
      setTodoText('');
    }
  };

  return (
    <div className='todo-create'>
      <input 
        className='todo-input' 
        type="text" 
        placeholder='Todo giriniz' 
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className='todo-button' onClick={handleAdd}>Todo Oluştur</button>
    </div>
  );
}

export default TodoCreate;
