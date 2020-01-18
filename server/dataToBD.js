const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:3349@localhost/react_crm')

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

let data = require('../src/data.json')


let ownersObj = {}
let countryObj = {}
let emailTypeObj = {}

let ownerCounter = 0
let countryCounter = 0
let emailTypeCounter = 0

for (let i = 0; i < data.length; i++) {
    if(!ownersObj[data[i].owner] && ownersObj[data[i].owner] != 0){
        ownersObj[data[i].owner] = ownerCounter 
        ownerCounter++
    }
    if(!countryObj[data[i].country]  && countryObj[data[i].country] != 0){
        countryObj[data[i].country] = countryCounter
        countryCounter++
    }
    if(!emailTypeObj[data[i].emailType]  && emailTypeObj[data[i].emailType] != 0 && data[i].emailType){
        emailTypeObj[data[i].emailType] = emailTypeCounter
        emailTypeCounter++
    }
}


for (const key in ownersObj) {
    if (ownersObj.hasOwnProperty(key)) {
        sequelize
        .query(`INSERT INTO owners (o_name) VALUES('${key}')`)
        .then(function (result) {
            console.log(result)
        }) 
    }
}


for (const key in countryObj) {
    if (countryObj.hasOwnProperty(key)) {
        sequelize
        .query(`INSERT INTO countries (country) VALUES('${key}')`)
        .then(function (result) {
            console.log(result)
        })
    }
}

for (const key in emailTypeObj) {
    if (emailTypeObj.hasOwnProperty(key)) {
        sequelize
        .query(`INSERT INTO email_type (e_type) VALUES('${key}')`)
        .then(function (result) {
            console.log(result)
        })
    }
}

for (let i = 0; i < data.length; i++) {

    if (data[i].emailType) {
        sequelize
        .query(`INSERT INTO clients (c_name, email, firstContact, sale_status, email_type, owner, country) 
                VALUES('${data[i].name}', '${data[i].email}', NOW(), ${data[i].sold}, '${data[i].emailType}','${data[i].owner}', '${data[i].country}')`)
        .then(function (result) {
            console.log(result)
        })
    }else{
        sequelize
        .query(`INSERT INTO clients (c_name, email, firstContact, sale_status, email_type, owner, country) 
                VALUES('${data[i].name}', '${data[i].email}', NOW(), ${data[i].sold}, null,'${data[i].owner}', '${data[i].country}')`)
        .then(function (result) {
            console.log(result)
        })
    }

}
