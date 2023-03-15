require('dotenv').config()

const express = require('express')
const Todo = require('./model/Todo')
const {conn} = require('./dbConn/connDb')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())


conn().then(()=>{
    app.listen(PORT, ()=>{console.log(`Server works on PORT: ${PORT}`)})
}).catch((e)=>{ console.log(e.message)})

app.get('/todos', async (req,res)=>{
    try{
        const todos = await Todo.find()
        res.json(todos)
    }catch(e){
        console.log(e.message)
        res.status(500).json({message: 'Internal server error' })
    }
})
app.post('/todos/new', async (req,res)=>{
    try{
        const newTodo = await new Todo({text: req.body.text })
        await newTodo.save()
        res.status(201).json(newTodo)
    }catch(e){
        console.log(e.message)
        res.status(500).json({message: 'Internal server error'})
    }


})
app.delete('/todos/delete/:id', async(req,res)=>{
    try{
        const DeletedTodo = await Todo.findByIdAndDelete(req.params.id)
        res.json({DeletedTodo})
    }catch(e){
        res.status(500).json({message: 'Internal server error'})
    }
})
app.patch('/todos/update/:id', async(req,res)=>{
    try{
       const updateTodo = await Todo.findById(req.params.id)
        

       updateTodo.text = req.body.text
        // res.status(200).json({message: 'Data updated'})
        await updateTodo.save()
        res.status(200).json(updateTodo)
        
    }catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
    
})
app.get('/todos/complete/:id', async(req,res)=>{
    try{
        const cTodo = await Todo.findById(req.params.id)

        cTodo.completed = !cTodo.completed
        await cTodo.save()

        res.status(200).json(cTodo)

    }catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
})
