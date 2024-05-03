const express = require('express');
let router = express.Router()
const controller = require('../controllers')

router.post('/user', (req, res) =>{
    console.log(req)
    // console.log('hello this is the router')
})

module.exports =
router