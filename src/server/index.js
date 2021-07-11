const express = require('express');

// Create an app object with express
const app = express();

// mothods for app: get, post, put and delete
// call them using app.get() etc... They are essentially same as http requests

// first argument is the address
// second is the call back function get called at root dir
// refer to express documentation http://expressjs.com/en/5x/api.html#req
app.get('/', (req, res)=> {
    res.send('Hello World');
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3]);
})

app.get('/api/courses/:id',(req, res)=>{
    res.send(req.params.id);
})

// in windows cmd, use 'set PORT=5000' for setting environment variable
const port = process.env.PORT || 3000

// You always place event listener after handler
// use ` for template string
app.listen(port, ()=> console.log(`Listening on port ${port}`));