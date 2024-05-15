const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')
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

//fire function after uesr saved to db
userSchema.post('save', function(doc, next) {
    console.log('new user was created and saved', doc)
    next();
})

//fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    console.log('user about to be created and saved', this)
    next();
})

module.exports = mongoose.model('user', userSchema)