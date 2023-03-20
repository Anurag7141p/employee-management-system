// import express
const express=require('express')

// import cors
const cors=require('cors')

// import logic
const logic=require('./services/logic')

// create server
const server=express()

// connection 
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('listening on the port 8000')
})

// api call for get allemployee details

server.get('/allemployee',(req,res)=>{
    logic.allEmployee().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api call for post employee details

server.post('/addemployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call for delete employee

server.delete('/delemployee/:id',(req,res)=>{
    logic.delEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api call for get an employee

server.get('/getanemployee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api call for update an employee

server.post('/updateemployee',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})