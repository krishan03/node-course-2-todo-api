const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {USer}=require('./../server/models/user');
const {ObjectID}=require('mongodb');

//Todo.remove({})-remove all documents

Todo.remove({}).then((result)=>{
    console.log(result);
},(e)=>{

});

// Todo.findOneAndRemove({}).then(()=>{

// },(e)=>{

// });

Todo.findByIdAndRemove('59f741803dd72a44f0d73938').then(()=>{
    console.log(todo);
},(e)=>{

});



