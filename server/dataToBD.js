const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:3349@localhost/react_crm')

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

let data = require('../src/data.json')

let ownersObj = {}
let ownersArry = []
let countryObj = {}
let countryArry = []
let emailTypeObj = {}
let emailTypeArry = []

let ownerCounter = 0
let countryCounter = 0
let emailTypeCounter = 0

for (let i = 0; i < data.length; i++) {
    if(!ownersObj[data[i].owner] && ownersObj[data[i].owner] != 0){
        ownersObj[data[i].owner] = ownerCounter + 1
        ownersArry[ownerCounter] = data[i].owner
        ownerCounter++

    }
    if(!countryObj[data[i].country]  && countryObj[data[i].country] != 0){
        countryObj[data[i].country] = countryCounter + 1
        countryArry[countryCounter] = data[i].country
        countryCounter++
    }
    if(!emailTypeObj[data[i].emailType]  && emailTypeObj[data[i].emailType] != 0 ){
        emailTypeObj[data[i].emailType] = emailTypeCounter + 1
        emailTypeArry[emailTypeCounter] = data[i].emailType
        emailTypeCounter++
    }
}

for (i=0; i<ownersArry.length; i++) {
    sequelize
    .query(`INSERT INTO owners (o_name) VALUES('${ownersArry[i]}')`)
    .then(function (result) {
        console.log(result)
    })
}

for (i=0; i<countryArry.length; i++) {
    sequelize
    .query(`INSERT INTO countries (country) VALUES('${countryArry[i]}')`)
    .then(function (result) {
        console.log(result)
    })
}

for (i=0; i<emailTypeArry.length; i++) {
    sequelize
    .query(`INSERT INTO email_type (e_type) VALUES('${emailTypeArry[i]}')`)
    .then(function (result) {
        console.log(result)
    })
}

for (let i = 0; i < data.length; i++) {
        sequelize
        .query(`INSERT INTO clients (c_name, email, firstContact, sale_status, email_type, owner, country) 
                VALUES('${data[i].name}', '${data[i].email}', NOW(), ${data[i].sold}, ${emailTypeObj[data[i].emailType]},${ownersObj[data[i].owner]},${countryObj[data[i].country]})`)
        .then(function (result) {
            console.log(result)
        })
}
