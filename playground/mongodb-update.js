//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb'); //using object de structure





MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
       return console.log('unable to connect to db');
    }
    console.log('connected to mongodb server');
   
   db.collection('Todos').findOneAndUpdate({"_id" : ObjectID("59f748da778f85eee2e44fca")},{
       $set:{
           completed:false
       }
   },{
       returnOriginal:false
   }).then((result)=>{
    console.log(result);
   });

    
    
    db.close();

});