var fs = require('fs');

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
		//console.log(args);
		process.stdout.write(args.join(" "));
	},
	cat: function(file){
		fs.readFile(file[0], "utf8", function read(err, data) {
			if (err) throw err;
			console.log(data);
		});
	},
	head: function(file){

	},
	tail: function(file){

	}
}