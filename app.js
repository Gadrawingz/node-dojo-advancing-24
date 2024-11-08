const express = require('express')
const app = express()
const port = 5001


/*
A query string is the portion of a URL that comes just 
after the question mark (?)
*/


// http://localhost:5001/user?age=30&location=Kiev
app.get('/user', (req, res) => {
    const age = req.query.age;
    const location = req.query.location; 
    res.send(`
        Age is ${age}, <br>
        Location is ${location}<hr>
    `);
})


// Handling Multiple Query Parameters
app.get('/search', (req, res) => {
    const {term, limit, page} = req.query;
    res.send(`
        Searching for: ${term}, <br>
        The Limit: ${limit}, <br>
        The Page : ${page}, <br>
    `)
})



app.listen(port, ()=> {
    console.log("Rinning on port: "+port);
})