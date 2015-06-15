'use strict';


exports.index = function*(next) {
	this.status = 200;
  this.body = {
    an : this.query.n
  };
  yield function(done) {
    setTimeout(done, 1000);
  };

};
