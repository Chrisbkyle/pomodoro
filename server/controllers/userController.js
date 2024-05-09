const Model = require('../schema')


 async function getUsers(req, res) {
    const request = await req.body.username
    let user;
    if(request) {
        Model.User.find(
            {username: req.body.username}
        ).then(e => 
            res.send(e)
        ).catch((err) => 
            res.send(err)
        )
    } else {
        res.send('nah')
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
        res.send('user not added'))
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
        res.send(err)
    )
}
async function deleteUsers(req, res) {
    const deleteUser = await req.body.username
    Model.User.deleteOne({username: deleteUser}).then(e => 
        res.send('deleted')
    ).catch(err => 
        res.send(err)
    )
}

module.exports= {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}