const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const database = {
    users: [
        {
            id: '5',
            name: 'Mohammed',
            password:'1234',
            email: 'wattk308@gmail.com',
        },
        {
            id: '3',
            name:'Abed',
            password:'1234',
            email:'abed@gmail.com',
        },
        {
            id: '1',
            name:'Ahmad',
            password:'1234',
            email:'ahmad@gmail.com',
        },
        {
            id: '4',
            name:'Ahmad',
            password:'1234',
            email:'ahmad@gmail.com',
        },
        {
            id: '2',
            name:'Ahmad',
            password:'1234',
            email:'ahmad@gmail.com',
        },

    ]
};

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send(database.users);
});

//users Controller
app.post('/auth/signin/:email',(req,res,next)=>{
    const {email} = req.params;
    const {password} = req.body;
    console.log(password)
    database.users.forEach((user)=>{
        if (user.email===email && user.password === password){
            res.json(user);
            return;
        }
    })
res.status(404);
});

//server controller
app.get('/servers/all',(req,res)=>{
    res.json(database.users);
});




app.delete('/users/delete/:userId',(req,res)=>{
    const {userId} = req.params;
    const index = database.users.findIndex(user=>{
       return user.id === userId;
    });

    database.users = database.users.filter((row,j)=>j!==index);

    res.json(database.users);
});




app.listen(4000,() => {
    console.log('app is running on port 3000');
});
