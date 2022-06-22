const express = require('express')
const { use } = require('express/lib/router')
const router = express.Router()

const userController = require('../controllers/users')

router.get('/users', userController.listUsers)
router.get('/users/:id', userController.showUser)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

module.exports=router