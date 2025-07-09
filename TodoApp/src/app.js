import express from 'express'

let app=express()

let todos=[
    {
        task:"Wakeup early",
        description:"Daily at 5:30am",
        isCompleted:false
    },
    {
        task:"Play Badminton",
        description:"For an hour",
        isCompleted:false
    },
    {
        task:"Read a book",
        description:"90mins daily",
        isCompleted:false
    },
    {
        task:"Drink much enough of water",
        description:"Around 4 litres",
        isCompleted:false
    },
    {
        task:"Sleep early",
        description:"Around 8 hours daily ",
        isCompleted:false
    }
]

app.get("/todos",(req,res,next)=>{
    res.status(200).send(todos)
})

app.post("/todos",(req,res,next)=>{
    let newTodo={
        task:"Play Cricket",
        description:"Play efficiently",
        isCompleted:false
    }
    todos.push(newTodo)
    res.status(201).send(newTodo)
})


export default app;