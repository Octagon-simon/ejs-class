//import express
const express = require('express')
//import ejs
const ejs = require('ejs')
//load express
const app = express()
//set port number
const port = 5000

//tell express to use ejs as our template/view engine
app.set('view engine', 'ejs')
//tell express to use pages as our views directory
app.set('views', './pages')

//make variable globally accessible
global.loggedIn = false //default value is false

//route to homepage
app.get( '/', (req, res) => {
    //send the template for the homepage
    res.render('home');
})

//route to fruits
app.get( '/fruits', (req, res) => {
    //our fruits array
    const fruitsAry = ['apple', 'mango', 'guava', 'banana', 'pineapple']
    //render the template for the fruits page & send data as json
    res.render('fruits', {fruitsAry});
})

//route to login
app.get('/login', (req, res) => {
    //user is logged in
    loggedIn = true
    //redirect to homepage
    return res.redirect('/')
})

//route to logout
app.get('/logout', (req, res) => {
    //user is logged in
    loggedIn = false
    //redirect to homepage
    return res.redirect('/')
})

app.listen(port, () =>{
    console.log("App is live")
})