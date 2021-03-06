require('./config/config.js');



var express = require('express');
var bodyParser= require('body-parser');
var {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');
const _=require('lodash');

var app= express();
const port = process.env.PORT ||3000;

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

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

//GET /todos/12314
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
      return  res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
          return  res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })

});

//delete
app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
      return  res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
});


app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body= _.pick(req.body,['text','completed']);//pick these property if they exist in body
     if(!ObjectID.isValid(id)){
      return  res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt=new Date().getTime();
    }else{
        body.completed=false;
        body.completedAt=null;
    }

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});

    }).catch((e)=>{
        res.status(400).send();
    })

});

app.listen(port,()=>{
    console.log(`started up at port ${port}`);
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

