import React from 'react'
import {nanoid} from 'nanoid'
import { addTodoToBase } from '../toDoHandler'

const Add = ({todos, addTodo,setAddTodo, setTodos,inputSign,setInputSign}) => {
    const submitByEnter = (e)=>{
        if(addTodo.length===0 || addTodo==='') return
        
        if(e.key==='Enter'){
            const newTodo = [...todos,{
                _id: nanoid(),
                text: addTodo
            }]

            setTodos(newTodo)
            addTodoToBase(setTodos, addTodo, setAddTodo)
            setAddTodo('')
            return
        }
    }
    
    return (
    <div className='add-new-todo'>
        <input 
            type='text' 
            value={addTodo.length === 0 ? inputSign: addTodo}
            onClick={()=>setInputSign('')}
            onChange={(e)=>setAddTodo(e.target.value)}
            onBlur={()=>setInputSign('+')}
            onKeyDown={submitByEnter}
            className='add-new'
        />

    </div>
  )
}

export default Add