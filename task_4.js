const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');
// use static files like image,js or css
app.use(express.static('public'));

app.get('/img',(req,resp)=>{
    resp.render('img_demo_1');
});

app.listen(3000);