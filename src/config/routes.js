/**
 * Main application routes
 */

'use strict';

var mount = require('koa-mount');

module.exports = function(app) {

	// YEOMAN INJECT ROUTES BELOW
	app.use(mount('/b', require('../resources/b')));
	app.use(mount('/a', require('../resources/a')));
	app.use(mount('/users', require('../resources/users')));
	app.use(mount('/limiter', require('../resources/limiter')));
  app.use(mount('/', require('../resources/root')));


};
