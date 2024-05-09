const express = require('express');
let router = express.Router()
const controller = require('../controllers/userController')

router.get('/user', (req, res) =>{
    res.json({message: 'hello this is the router.get'})
    console.log('hello this is the router')
})
router.put('/add', (req, res) => {
    res.json({message: ''})
})

module.exports =
router