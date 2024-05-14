const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/pomodoro'
const user = require('../schema/userSchema.js')

const mongooseOptions = {
    // useUnifiedTopology: true,
    // useNewUrlParser: true
}

main().catch(
    (err) => {
        console.log(err)
        process.exit(1)
    }
)

async function main() {
    await mongoose.connect(
        uri,
        mongooseOptions,
        console.log('connected')
    )
}