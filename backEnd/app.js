const express= require('express');
const router = require('./modules/router');
const app = express();

app.use(router);

app.listen(3000,()=>{
    console.log('server is running:http://localhost:3000');
})