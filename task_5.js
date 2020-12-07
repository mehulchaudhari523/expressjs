const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/',(req,resp)=>{
    resp.render('form_1');    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/',(req,resp)=>{
    console.log(req.body);
    resp.send('submited...!');
});

app.listen(3000);