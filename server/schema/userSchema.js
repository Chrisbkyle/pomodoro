const mongoose = require('mongoose')
const {Schema} = mongoose
const { isEmail, isStrongPassword } = require('validator')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username Missing']
    },
    password: {
        type: String,
        required: [true, 'Password Missing'],
        minlength: [6, 'Minimum password length is 6 charaters'],
        // validate: [isStrongPassword({minLowercase: 1, minUppercase: 1, minNumbers: 1}), 'Password must include at least one lowercase letter, one uppercase letter and one digit'],
        validate:{
            validator: function(e) {
                return isStrongPassword(e, { 
                    minLength: 6, 
                    minLowercase: 1, 
                    minUppercase: 1, 
                    minNumbers: 1, 
                    minSymbols: 0})
            },
            message: 'Password must include at least one lowercase letter, one uppercase letter and one digit'
        }
    },
    email: {
        type: String,
        required: [true, 'Email Missing'],
        validate: [isEmail, 'Please enter a valid email']
    },
    previousToDo: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('user', userSchema)