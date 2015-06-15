'use strict';

var Model = [{
  name : 'Number0'
},{
  name : 'Number1'
}];

exports.index = function*(next) {
	this.status = 200;
  this.body = Model;
};

exports.getbyId = function*(next) {
  var id = parseInt(this.params.id);
  if(id >= 0 && id < Model.length) {
    this.status = 200;
    this.body = Model[id];
  } else {
    this.status = 404;
  }
}
