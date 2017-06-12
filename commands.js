// var fs = require('fs');
// var request = require('request');

// module.exports = {
// 	pwd: pwd,
// 	date: date,
// 	ls: ls, 
// 	echo: echo,
// 	cat: cat,
// 	head: head,
// 	tail: tail,
// 	curl: curl
// }

// function pwd(stdin, file ,done){
// 	done(process.cwd());
// }

// function date(stdin, file, done){
// 	done((new Date()).toString());
// }

// function ls(stdin, file, done){
// 	var output = "";
// 	fs.readdir('.', function(err, files) {
// 		files.forEach(function(file) {
// 			output += file.toString() + "\n";
// 		})
// 		done(output);
// 	});
// }

// function cat(stdin, file, done){
// 	fs.readFile(file[0], "utf8", function read(err, data) {
// 		if (err) throw err;
// 		done(data);
// 	});
// }

// function echo(stdin, file, done){
// 	done(file.join(" "));
// }

// function head(stdin, file,done){
// 	var count = 0;
// 	var contents;
// 	var output = "";  
// 	fs.readFile(file[0], "utf8", function read(err, data) {
// 		if (err) throw err;
// 		contents = data.split("\n");
// 		while (count < 5){
// 			output += contents[count] + "\n";
// 			count ++; 
// 		}
// 		done(output);
// 	});
// }

// function tail(stdin, file,done){
// 	var count = 0;
// 	var contents; 
// 	var output = "";
// 	fs.readFile(file[0], "utf8", function read(err, data) {
// 		if (err) throw err;
// 		contents = data.split("\n");
// 		while (count < 5){
// 			output += contents[contents.length-(5-count)] + "\n";
// 			count ++; 
// 		}
// 		done(output);
// 	});
// }

// function curl(stdin, file, done){
// 	request(file[0], function (error, response, body) {
//   			done(body); // Print the HTML for the Google homepage.
//   		});
// }

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
	curl: curl,
	sort: sort,
	wc: wc,
	uniq: uniq
}

function pwd(file ,done){
	done(process.cwd());
}

function date(file, done){
	done((new Date()).toString());
}

function ls(file, done){
	fs.readdir('.', function(err, files) {
		done(files.join("\n"));
	});
}

function echo(file, done){
	done(file.join(" "));
}

function cat(file, done){
	fs.readFile(file[0], "utf8", function read(err, data) {
		if (err) throw err;
		done(data);
	});
}

function head(file,done){
	fs.readFile(file[0], "utf8", function read(err, data) {
		if (err) throw err;
		done(data.split("\n").slice(0, 5).join("\n"));
	});
}

function tail(file,done){
	fs.readFile(file[0], "utf8", function read(err, data) {
		if (err) throw err;
		done(data.split("\n").slice(-5).join("\n"));
	});
}

function curl(file, done){
	request(file[0], function (error, response, body) {
  			done(body); // Print the HTML for the Google homepage.
  		});
}

function sort(file, done){
	fs.readdir('.', function(err, files) {
		done(files.sort().join("\n"));
	});
}

function wc(file, done){
	fs.readFile(file[0], "utf8", function read(err, data) {
		if (err) throw err;
		done(data.split("\n").length);
	});
}

function uniq(file, done){
	fs.readFile(file[0], "utf8", function read(err, data) {
		var uniqLines = []
		if (err) throw err;
		var lineList = data.split("\n");
		lineList.forEach(function(line, i){
			if ((i===0) || (i > 0 && line !== lineList[i-1])){
				uniqLines.push(line);
			}
		});
		done(uniqLines.join('\n'));
	});
}
