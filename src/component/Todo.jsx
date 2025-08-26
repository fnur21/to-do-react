import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import '../App.jsx';
import { IoIosCheckmarkCircle } from "react-icons/io";





function Todo({todo, removeT,onUpdateTodo}) {

const {id ,content} =todo;

const[editable,setEditable]=useState(false);
const [newTodo, setNewTodo] = useState(content);

const removeTodo =()=>{
removeT(id);

}
 const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

  return (
   <div  style={{display:'flex' , flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:'10px'}}>

<div>
  {editable ? <input value={newTodo}  onChange={(e) => setNewTodo(e.target.value)}
   style={{ width: '380px' }} className='todo-input' type='text'/> : content
  }
</div>
<div>

< MdCancel  className='todo-icons' onClick={removeTodo}/>
    {
    editable ? <IoIosCheckmarkCircle className='todo-icons'/> : 
    <IoMdCreate className='todo-icons' onClick={()=> setEditable(true)} />
    }



</div>

</div>
  )
}

export default Todo