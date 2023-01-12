const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('./model/config');
const user = require('./router/userRouter');
const port = 5000;


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use('/',user);


app.listen(port, ()=>{
    console.log(`server is running on port no ${port}`);
});