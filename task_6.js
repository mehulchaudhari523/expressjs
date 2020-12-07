const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

var url = "mongodb://localhost:27017/mydb_1";

// mongodb create db
MongoClient.connect(url,(err,db)=>{
    if (err) throw err;
    console.log('Db Connected..!!');

    app.get('category',(req,resp)=>{});
    app.post('add-category',(req,resp)=>{});
    app.put('update-category',(req,resp)=>{});
    app.delete('delete-category',(req,resp)=>{});
    
    db.close();
});

app.listen(3000);

