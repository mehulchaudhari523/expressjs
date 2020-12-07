const express = require('express');
const router = express.Router();

router.get('/',(req,resp)=>{
    resp.send('Demo...!');
});

module.exports = router;