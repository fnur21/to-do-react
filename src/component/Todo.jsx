import React from 'react'
import { MdCancel } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import '../App.jsx';



function Todo() {
  return (
   <div  style={{display:'flex' , flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:'10px'}}>

<div>ben ilk todoyum</div>
<div>
    < MdCancel  className='todo-icons'/>
   <IoMdCreate className='todo-icons' />
</div>

</div>
  )
}

export default Todo