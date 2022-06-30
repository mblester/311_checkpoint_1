const users = require('../data/index')

const listUsers = (req, res) => {
    res.json(users)
}

const showUser = (req, res) => {
    const foundItem = users.find((item, index, arr) => item.id === +req.params.id);
    if(!foundItem){
        return res.status(404).json('User does not exist with that ID.')
    }
  res.json(foundItem)
}

const createUser = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json(users)
}

const updateUser = (req, res) => {
    const foundItem = users.findIndex((item, index, arr) => item.id === +req.params.id);
    if(foundItem < 0){
        return res.status(404).json('User does not exist with that ID.')
    }
    users[foundItem]=req.body;
    res.json(users)
}

const deleteUser = (req, res) => {
    const foundItem = users.findIndex((item, index, arr) => item.id === +req.params.id);
    if(foundItem < 0){
        return res.status(404).json('User does not exist with that ID.')
    }
    users.splice(foundItem, 1)
    res.json(users)
}

module.exports={listUsers, showUser, createUser, updateUser, deleteUser}