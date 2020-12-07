const express = require('express');
const app = express();

// template view

app.set('view engine','pug');
app.set('views','./views');

app.get('/template',(req,resp)=>{
    resp.render('first_view',{
        text_title : 'Hello World..!',
    });
});

app.listen(3000);