'use strict';


exports.index = function*(next) {
  this.status = 200;
  this.body = {
    bn : this.query.n
  };
  yield function(done) {
    setTimeout(done, 3000);
  };
};
