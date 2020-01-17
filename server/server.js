const express = require('express')
const app = express()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:3349@localhost/react-crm')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(err => {
//     console.error('Unable to connect to the database:', err);
// })


// const api = require('./api')
// app.use('/', api)

const port = 4001
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})