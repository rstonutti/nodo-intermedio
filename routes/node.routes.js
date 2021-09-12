const { Router } = require('express');

const { 
    nodePost
} = require('../controllers/node.controllers')

const router = Router();

router.post('/', nodePost);

module.exports = router;