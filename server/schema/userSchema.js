const mongoose = require('mongoose')
const {Schema} = mongoose
const { isEmail } = require('validator')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username Missing']
    },
    password: {
        type: String,
        required: [true, 'Password Missing'],
        minlength: [6, 'Minimum password length is 6 charaters']
    },
    email: {
        type: String,
        required: [, 'Email Missing'],
        validate: [isEmail, 'Please enter a valid email']
    },
    previousToDo: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('user', userSchema)