import React from 'react'
import { deleteTodo, updaterTodo ,completeTodo} from '../toDoHandler'
import { useState } from 'react'
import {RiEditBoxFill} from 'react-icons/ri'
import {AiFillDelete} from 'react-icons/ai'
import {FiSave} from 'react-icons/fi'


const Todo = ({id, todo,setTodos,change, setChange, isFocus, setIsFocus}) => {

const [text,setText]=useState(todo.text)


const handelDelete = (id)=>{
    deleteTodo(id,setTodos)
}
const handelEdit = (_id, id)=>{
  if(_id === id){
    console.log('changed')
    setChange(!change)
  }
}
const handleComplete = (id,setTodos)=>{

  completeTodo(id,setTodos)
}

  return (
    <div className={isFocus ? 'todo':'edit-todo'}>
      <div className='place-for-checkbox'>
        <div 
          className={todo.completed ? 'check-box checked' : 'check-box no-checked'}
          onClick={()=>handleComplete(todo._id,setTodos)}
          >{todo.completed}</div>
        </div>

        <input 
          type='text' 
          value={text} 
          disabled={change}
          onChange={(e)=>setText(e.target.value)}
          
          // className={todo.completed ? isFocus ? 'edit-content-comp' : 'content-comp' : 'content'}
          className={todo.completed ? 'content-comp' : 'content'}
          />
          {change ? 
            <button className='edit' onClick={()=>{
              handelEdit(todo._id,id)
              setIsFocus(!isFocus)
            }}><div className='pencil'><RiEditBoxFill/></div></button>
            :
            <button className='save' onClick={()=>{
                updaterTodo(id,text,setTodos)
                setChange(!change)
                setIsFocus(!isFocus)
              }
          }><div className='save-icon'><FiSave/></div></button>
          }
      
        <div 
          className='delete'
          todo={todo}
          onClick={()=>handelDelete(todo._id)}
        ><div className='del-icon'><AiFillDelete/></div></div> 
        
    </div>
  )
}

export default Todo