import { useState, useEffect } from 'react'
import { displayToDo } from './toDoHandler'
import ToDo from './components/Todo'
import Add from './components/Add'

function App() {

  const [todos,setTodos]=useState([])
  const [addTodo, setAddTodo]=useState('')
  const [inputSign, setInputSign]=useState('+')
  const [change, setChange]=useState(true)
  const [isFocus, setIsFocus]=useState(true)

  useEffect(()=>{
    displayToDo(setTodos)
  },[])

  
  
  return (
    <div className="App">
      <header className='app-header'>
        {/* Tymczasowo Kuba potem zmienic na dynamicznie jak bedzie logowanie */}
        <h1>Hello, Kuba</h1>
       
        <h3>{todos.length ===0 ? 'You do not have any work today :) just plan something': 'Your tasks:'}</h3>
      </header>


    <main className='container'>
      
        
        { 
          todos.map((todo)=>
          <ToDo 
            key={todo._id} 
            id={todo._id}
            todo={todo}
            setTodos={setTodos}
            change={change}
            setChange={setChange}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
          />
          )}

        <Add 
          todos={todos} 
          addTodo={addTodo} 
          setAddTodo={setAddTodo} 
          setTodos={setTodos}
          inputSign={inputSign}
          setInputSign={setInputSign}  
        />
      
  
    </main>

    <footer className='app-footer'></footer>
    </div>
  );
}

export default App;
