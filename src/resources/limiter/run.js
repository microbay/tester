var request = require('superagent');

setInterval(function(){
  request.get('http://localhost:9000/limiter').end(function(err,res){
    console.log('9000', res.body)
  });
  request.get('http://localhost:7777/hello').end(function(err,res){
    if(err) {
      console.log('7777', err.status)
    } else {
      console.log('7777', res.body)
    }
  });
}, 1000);
