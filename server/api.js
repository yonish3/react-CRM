const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:3349@localhost/react_crm')

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

router.get('/clients/', function (req, res) {
    sequelize
    .query("SELECT * FROM clients")
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.get('/clients/:id', function (req, res) {
    sequelize
    .query(`SELECT * FROM clients WHERE id = ${req.params.id}`)
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.put('/clients/update', function (req, res) {
    sequelize
    .query(`UPDATE clients SET ${req.query.column} = '${req.query.update}' WHERE id = ${req.query.id}`)
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.get('/email_type/', function (req, res) {
    sequelize
    .query("SELECT * FROM email_type")
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.get('/countries/', function (req, res) {
    sequelize
    .query("SELECT * FROM countries")
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.get('/owners/', function (req, res) {
    sequelize
    .query("SELECT * FROM owners")
    .spread(function (results, metadata) {
        res.send(results)
    })
})

module.exports = router