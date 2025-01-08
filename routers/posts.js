const foodControllers = require('../controllers/foodcontrollers');
const express = require('express');
const router = express.Router();


const data = require('../data/posts')

//index
router.get('/',foodControllers.index)

//show
router.get('/:id',foodControllers.show)

//store
router.post('/',foodControllers.store)

//update
router.put('/:id',foodControllers.update)

//modify
router.patch('/:id',foodControllers.modify)

//destroy
router.delete('/:id',foodControllers.destroy)


module.exports = router
//
