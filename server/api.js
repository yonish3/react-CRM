const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:3349@localhost/react-crm')

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

router.get('/data/', function (req, res) {
    sequelize
    .query("SELECT * FROM clients")
    .spread(function (results, metadata) {
        console.log(results.forEach(c => console.log(c.name)))
    })
})