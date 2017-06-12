var commands = require('./commands');
// var userCommand = 'pwd';
// commands[userCommand]();

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(" "); // remove the newline
  commands[cmd[0]](cmd.splice(1));
  process.stdout.write('\nprompt > ');
});