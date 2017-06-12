var fs = require('fs');
var request = require('request');

module.exports = {
	pwd: function(file){
		process.stdout.write(process.cwd());
	},
	date: function(file){
		process.stdout.write((new Date()).toString().trim());
	},
	ls: function(){
		fs.readdir('.', function(err, files) {
			if (err) throw err;
			files.forEach(function(file) {
				process.stdout.write(file.toString() + "\n");
			})
		});
	},
	// Fix .join() to not include commas 
	echo: function(){
		var args = Array.from(arguments);
		process.stdout.write(args.join(" "));
	},
	cat: function(file){
		fs.readFile(file[0], "utf8", function read(err, data) {
			if (err) throw err;
			console.log(data);
		});
	},
	// Fix readFile so prompt comes AFTER all reading is done for HEAD and CAT and TAIL
	head: function(file){
		var count = 0;
		var contents; 
		fs.readFile(file[0], "utf8", function read(err, data) {
			if (err) throw err;
			contents = data.split("\n");
			while (count < 5){
				console.log(contents[count]);
				count ++; 
			}
		});

	},
	tail: function(file){
		var count = 0;
		var contents; 
		fs.readFile(file[0], "utf8", function read(err, data) {
			if (err) throw err;
			contents = data.split("\n");
			while (count < 5){
				console.log(contents[contents.length-(5-count)]);
				count ++; 
			}
		});
	},
	curl: function(){

	}
}