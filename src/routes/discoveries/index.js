const express = require('express');
const actions = require('./actions');

const router = express.Router();

router.get('/', actions.findAll);

router.get('/:id', actions.findOne);

router.post('/', actions.create);

router.put('/:id', actions.update);

router.delete('/:id', actions.delete);

module.exports = router;
