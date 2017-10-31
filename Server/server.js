var express = require('express');
var bodyParser= require('body-parser');

var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo= new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});


app.listen(3000,()=>{
    console.log('started on port 3000');
});

module.exports={app};

// var newTodo = new Todo({
//     text:'Cook dinner',
// });

// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// });

// var otherTodo = new Todo({
//     text:'Cook dinner',
//     completed:true,
//     completedAt:123
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log(e);
// });

// var user = new User({
//     email:'krishan.lbsim@gmail.com'
// });

// user.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// })

