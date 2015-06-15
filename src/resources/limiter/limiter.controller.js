'use strict';


var RateLimiter = require("rolling-rate-limiter");
var Redis = require("redis");
var client = Redis.createClient();

var limiter = RateLimiter({
  redis: client,
  //namespace: "NodeJSLimiter" ,// optional: allows one redis instance to handle multiple types of rate limiters. defaults to "rate-limiter-{string of 8 random characters}"
  interval: 10000,
  maxInInterval: 3,
  minDifference: 100
});


client.on("error", function (err) {
  console.log("Redis  Error " + err);
});




function limit (userId) {
  return function (done) {
     limiter(userId, function(err, timeLeft) {
      console.log(userId, timeLeft)
      if (err) {
        done(err, null)
      }  else {
        done(null, timeLeft)
      }
    });
  }
}





exports.index = function*(next) {

  var timeLeft = yield limit('Patrick');

	this.status = 200;
  this.body = { timeLeft: timeLeft };
};
