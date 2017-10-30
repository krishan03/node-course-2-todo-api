//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb'); //using object de structure


// var obj = new ObjectID();
// console.log(obj);

//Object De-structure
// var user={name:'krishan',age:25};

// var {name}=user; //object destructure
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
       return console.log('unable to connect to db');
    }
    console.log('connected to mongodb server');

   db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
       console.log('error',err)
   });

    db.collection('Todos').find({_id:new ObjectID('59f741803dd72a44f0d73938')}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
       console.log('error',err)
   });


    db.collection('Todos').find().count().then((count)=>{
    console.log(count);
   },(err)=>{
       console.log('error',err)
   });

    db.close();

});