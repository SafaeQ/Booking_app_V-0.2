const ownerRouter = require('express').Router();

const {
    getOwner,
    getOwner_byId,
    add_owner,
    update_owner,
    delete_owner
} = require('../controllers/owner.controller')

ownerRouter.get('/owners', getOwner)
ownerRouter.get('/owner/:id', getOwner_byId)
ownerRouter.post('/add-owner', add_owner)
ownerRouter.put('/owner/:id/update', update_owner)
ownerRouter.delete('/owner/:id/delete', delete_owner)

module.exports = ownerRouter