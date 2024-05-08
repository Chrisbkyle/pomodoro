const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    previousToDo: Array
})

module.exports = mongoose.model('user', userSchema)