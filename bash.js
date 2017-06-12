var commands = require('./commands');

// Output a prompt
var prompt = 'prompt > ';
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(" "); // remove the newline
  commands[cmd[0]](cmd.splice(1), done);
});

var done = function(output){
	process.stdout.write(output);
	process.stdout.write('\n'+prompt);
}