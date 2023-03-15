import axios from 'axios'

const API_URL = 'http://127.0.0.1:3001'

const displayToDo = (setTodos)=>{
    axios
    .get(`${API_URL}/todos`)
    .then(({data})=>
        setTodos(data)
    )
    .catch((err)=>{console.log(err);})
}

const addTodoToBase = (setTodos, addTodo, setAddTodo)=>{
    axios
    .post(`${API_URL}/todos/new`, {"text":addTodo})
    .then(()=>{
        setAddTodo('')
        displayToDo(setTodos)

    }).catch((err)=>console.log(err.message))

}
const deleteTodo = (id, setTodos)=>{    
    axios
    .delete(`${API_URL}/todos/delete/${id}`)
    .then(()=>{
        displayToDo(setTodos)
    }).catch((err)=>console.log(err.message))
}
const updaterTodo = (id,text,setTodos)=>{
    axios
    .patch(`${API_URL}/todos/update/${id}`, {"text":text})
    .then(()=>{
        // console.log(text)
        displayToDo(setTodos)
    
    }).catch((err)=>console.log(err.message))

}
const completeTodo = (id,setTodos)=>{
    axios
    .get(`${API_URL}/todos/complete/${id}`)
    .then(()=>{
        displayToDo(setTodos)
    
    }).catch((err)=>console.log(err.message))
}
export {displayToDo, addTodoToBase, deleteTodo,updaterTodo,completeTodo}