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

    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //    return console.log('unable to insert into db',err);
    // }

    // console.log(JSON.stringify(result.ops,undefined,2));
    // });


    
    // db.collection('Users').insertOne({
    //     name:'Krishan',
    //     age:26,
    //     location:'Delhi'
    // },(err,result)=>{
    //     if(err){
    //    return console.log('unable to insert into db',err);
    // }

    // console.log(JSON.stringify(result.ops,undefined,2));
    // });

      // db.collection('Users').insertOne({
    //     name:'Krishan',
    //     age:26,
    //     location:'Delhi'
    // },(err,result)=>{
    //     if(err){
    //    return console.log('unable to insert into db',err);
    // }

    // console.log(JSON.stringify(result.ops,undefined,2));
    // });


    db.close();

});