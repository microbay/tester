'use strict';

var controller = require('./users.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.get('/:id', controller.getbyId);
module.exports = router.routes();
