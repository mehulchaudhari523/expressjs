const express = require('express');
const app = express();

app.get('/:id',(req,resp)=>{
    resp.send('params is: '+req.params.id);
});

app.listen(3000);