const express = require('express');
let router = express.Router()
const controller = require('../controllers/userController')

router.get('/user', (req, res) =>{
    res.json({message: 'hello this is the router'})
    console.log('hello this is the router')
})

module.exports =
router