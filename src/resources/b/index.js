'use strict';

var controller = require('./b.controller');
var router = require('koa-router')();

router.get('/', controller.index);
module.exports = router.routes();