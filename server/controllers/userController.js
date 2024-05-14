const Model = require('../schema')
//handle errors
const handleError = (err) => {
    console.log(err.message, err.code)
    let errors = { 
        // username: '', 
        // password: '', 
        // email: '', 
        // previousToDo: ''
    };

    //duplicate error code
    if (err.code === 11000) {
        errors.username = 'Username already in use'
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            console.log(properties)
            errors[properties.path] = properties.message;
        })
        return errors;
    }
}

 async function getUsers(req, res) {

    let user = await req.body.username
    let password = await req.body.password

    if(!user)  {
        res.status(404).send('No User Requested')
    }  else {
        Model.User.findOne(
            {username: user}
        ).then(e => {
            if(!e) {
                res.status(404).send('User Not Found')
            } else if (!password) {
                res.status(404).send('No Password Entered')
            } else if(password != e.password) {
                res.status(400).send('Password not valid')
            } else {
                res.send(e)
            }
        }).catch((err) => 
            res.send(
                handleError(err)
            )
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
        res.send(
            handleError(err))
        )
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
        res.send(
            handleError(err)
        )
    )
}
async function deleteUsers(req, res) {
    const deleteUser = await req.body.username
    Model.User.deleteOne({username: deleteUser}).then(e => 
        res.send('deleted')
    ).catch(err => 
        res.send(
            handleError(err)
        )
        
    )
}

module.exports= {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}