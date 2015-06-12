'use strict';

var request = require('supertest');
var expect = require('chai').expect;
var should = require('should');


describe('GET /', function(){

  var agent = request('http://localhost:7777/hello')

  it('should respond with 403', function(done){
    agent.get('/').expect(403, done);
  });
});
