//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb'); //using object de structure





MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
       return console.log('unable to connect to db');
    }
    console.log('connected to mongodb server');
    //deleteMAny

    db.collection('Todos').deleteMany({text:'Eat Brunch'}).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    });
    //deleteOne

    db.collection('Todos').deleteOne({text:'Eat Brunch'}).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    });

    //Fidn and delete

    db.collection('Todos').findOneAndDelete({text:'Eat Brunch'}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    },(err)=>{
        console.log(err);
    });
    
    db.close();

});