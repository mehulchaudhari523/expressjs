const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send("Hello World..!!");
});
app.get('/test', function(req, res){
    res.send("Test..");
 });

 app.post('/', function(req, res){
    res.send('POST route on things.');
 });

 app.all('/all', function(req, res){
    res.send("All Method");
 });
 app.listen(3000);