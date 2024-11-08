const express = require('express')
const app = express()
const port = 5001

// Import validations
const vPQParams = require('./funcs/validatePQP');
const vUQParams = require('./funcs/validateUQP');


/*
A query string is the portion of a URL that comes just 
after the question mark (?)
*/

// 01.http://localhost:5001/user?age=30&location=Kiev
app.get('/user', (req, res) => {
    const age = req.query.age;
    const location = req.query.location; 
    res.send(`
        Age is ${age}, <br>
        Location is ${location}<hr>
    `);
})


// 02. Handling Multiple Query Parameters
app.get('/search', (req, res) => {
    const {term, limit, page} = req.query;
    res.send(`
        Searching for: ${term}, <br>
        The Limit: ${limit}, <br>
        The Page : ${page}, <br>
    `)
})


// 03. Products with Validation
app.get('/products', vPQParams, (req, res) => {
    const {product, category, price} = req.query;
    res.send(`
        Product Name : ${product}, <br> 
        Product Category : ${category}, <br> 
        Product Price : ${price}, <br> 
    `)
})


// 04. Users with Validation
app.get('/users', vUQParams, (req, res) => {
    const {firstname, lastname, gender} = req.query;
    res.send(`
        First Name : ${firstname}, <br> 
        Last Name : ${lastname}, <br> 
        User Gender : ${gender}, <br> 
    `)
})


// 05. REF2: 
// https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
// Function to handle the root path
app.get('/posts', async function (req, res) {
    // Access
    let page = req.query.page
    let limit = req.query.limit



})


app.get('/q-string', async function(req, res) {
    const url = require('url');
    const qString = require('querystring');
    
    let rawUrl = 'http://localhost:5001/query-string?data1=Okay&data2=Good';
    let parsedUrl = url.parse(rawUrl);
    let parsedQs = qString.parse(parsedUrl.query);
    res.send(parsedQs)
});


app.listen(port, ()=> {
    console.log("Rinning on port: "+port);
})