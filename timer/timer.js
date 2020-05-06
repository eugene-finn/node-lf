var http = require('http');

// var pause = process.argv[2],
//   spacetime = process.argv[3];

var pause = process.env.PAUSE,
  spacetime = process.env.SPACE;

console.log(pause, spacetime);


http.createServer(function (req, res) {
  console.log('HTTP server running');

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hello student from Loftschool!</h1>');

  // начать повторы с интервалом pause
  var timerId = setTimeout(function tick() {

    var d = new Date();
    var n = d.getTime();

    console.log(n);
    timerId = setTimeout(tick, pause);
  }, pause);

  // через spacetime остановить повторы
  setTimeout(function () {
    clearInterval(timerId);

    var d = new Date();
    var n = d.getUTCDate();

    console.log('стоп', n);

  }, spacetime);

}).listen(8080);