const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');

var id = "69f89335aa9f668051576744";

if(!ObjectID.isValid(id)){
    console.log('id not valid');
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log(todos)
});

Todo.findOne({
       _id:id
}).then((todo)=>{
    console.log(todo)
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('ID not found');
    }
    console.log(todo);
}).catch((e)=>{
    console.log(e);
});