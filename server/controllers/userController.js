const schema = require('../schema/userSchema')

function getUsers(req, res) {
    console.log('this is to fetch accounts')
}

function addUsers(req, res) {
    console.log('this is to add user accounts')
}

function updateUsers(req, res) {
    console.log('this is to update a users account/infomation')
}

module.exports= {
    getUsers,
    addUsers,
    updateUsers
}