const mongoose = require('mongoose')

main().catch(err => console.log(err));



async function main() {
    await mongoose.connect(
        'mongodb://127.0.0.1:27017/test',
        console.log('connected')
    )
}

const kittySchema = new mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function speak() {
    const greeting = this.name ? 'Meow name is ' + this.name : 'I don\'t have a name';
    console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema)

const silence = new Kitten({name: 'Silence'});
console.log(silence.name)

const fluffy = new Kitten({name:'fluffy'});

async function addFluffy() {
    await fluffy.save();
    console.log('fluffy added')
}
addFluffy().catch(err => console.log(err))
fluffy.speak();

// fluffy.speak();