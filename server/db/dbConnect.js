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
let get = {}
function insertData() {
    user.insertMany({username: 'rStar', password: 'password', email: 'octopus\'sGarden@inthe.shade', previousToDo: ['I dont remember enough', 'of the words', 'i shouldve picked paul']})
}
// insertData()
async function findData() {
    get = await user.find({username: 'rStar'})
}
findData().then(e => console.log(get))

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     email: String,
//     previousToDo: Array
// })
// const user = mongoose.model('user', userSchema);

// const ringo = new user({
//     username: 'rStar',
//     password: 'password',
//     email: 'octopus\'sGarden@inthe.shade',
//     previousToDo: ["I'd like to be", "Under the sea", "In an Octopus's garden"]
// })

// async function addUser() {
//     await ringo.save();
//     console.log('ringo added')
// }

// addUser()