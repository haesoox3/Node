var fs = require('fs');
var request = require('request');

module.exports = {
	pwd: pwd,
	date: date,
	ls: ls, 
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
	curl: curl
}

function pwd(file ,done){
	done(process.cwd());
}

function date(file, done){
	done((new Date()).toString());
}

function ls(file, done){
	var output = "";
	fs.readdir('.', function(err, files) {
		files.forEach(function(file) {
			output += file.toString() + "\n";
		})
		done(output);
	});
}

function cat(args, done){
	fs.readFile(args[0], "utf8", function read(err, data) {
		if (err) throw err;
		done(data);
	});
}

function echo(args, done){
	done(args.join(" "));
}

function head(args,done){
	var count = 0;
	var contents;
	var output = "";  
	fs.readFile(args[0], "utf8", function read(err, data) {
		if (err) throw err;
		contents = data.split("\n");
		while (count < 5){
			output += contents[count] + "\n";
			count ++; 
		}
		done(output);
	});
}

function tail(args,done){
	var count = 0;
	var contents; 
	var output = "";
	fs.readFile(args[0], "utf8", function read(err, data) {
		if (err) throw err;
		contents = data.split("\n");
		while (count < 5){
			output += contents[contents.length-(5-count)] + "\n";
			count ++; 
		}
		done(output);
	});
}

function curl(args, done){
	request(args[0], function (error, response, body) {
  			done(body); // Print the HTML for the Google homepage.
  		});
}