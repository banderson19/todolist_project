const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

var corsOptions = {
    origin: true,
    credentials: true
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(cors());

let todolist = require('./todolist');

//http request
app.get('/api/todolist', (req, res) => {
    console.log('this is http get request', todolist) 
    res.send(todolist)
})

app.post('/api/todolist', (req, res) => {
    console.log('this is my post request', req.body)
    todolist.push(req.body)
    res.send(todolist);
})  

// app.put('/api/recipes', (req, res) => {
//     console.log(2222, req.body)
// })

// app.delete(`/api/recipes/${id}`, (req, res) => {
//     console.log('hitting my delete request')
//     // todolist.pop.indexOf(id, 1) 
//     res.send(todolist);
// })


const port = 3010;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );