const Model = require('../schema')

const handleError = (err) => {
    console.log(err.message, err.code)
    let error = { email: '', password: ''};

    if (err.message.includes('user validation failed')){
        console.log(err)
    }
}

 async function getUsers(req, res) {

    let user = await req.body.username
    let password = await req.body.password

    if(!user)  {
        res.status(404).send('No User Requested')
    } else if (!password) {
        res.status(404).send('No Password Entered')
    } else {
        Model.User.findOne(
            {username: user}
        ).then(e => {
            if(!e) {
                res.status(404).send('User Not Found')
            } else if(password != e.password) {
                res.status(400).send('Password not valid')
            } else {
                res.send(e)
            }
        }).catch((err) => 
            // res.send(err)
            handleError(err)
        )
    }
}

function addUsers(req, res) {
    const newUser = new Model.User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        previousToDo: req.body.previousToDo
    })
    newUser.save(
    ).then(e => 
        res.send('user added')
    ).catch(err => 
        // res.send(err)
        handleError(err))
}
async function updateUsers(req, res) {
    const editUser = await req.body.username;
    const newArray = await req.body.previousToDo
    Model.User.updateOne(
        {username: editUser}, 
        {previousToDo: newArray}
    ).then(e => 
        res.send(e)
    ).catch(err => 
        // res.send(err)
        handleError(err)
    )
}
async function deleteUsers(req, res) {
    const deleteUser = await req.body.username
    Model.User.deleteOne({username: deleteUser}).then(e => 
        res.send('deleted')
    ).catch(err => 
        // res.send(err)
        handleError(err)
    )
}

module.exports= {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}