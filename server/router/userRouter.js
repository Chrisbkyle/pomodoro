const express = require('express');
let router = express.Router()
const controller = require('../controllers/userController')

router.post('/user', (req, res) =>{
    controller.getUsers(req, res);
})
router.post('/add', (req, res) => {
    controller.addUsers(req, res);
})
router.delete('/delete', (req, res) => {
    controller.deleteUsers(req, res);
})
router.post('/edit', (req, res) => {
    controller.updateUsers(req, res);
})

module.exports =
router