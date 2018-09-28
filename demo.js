var fs = require('fs');

 var dirName = process.argv[2] ;

 fs.mkdirSync("./" + dirName); // mkdir $1
 process.chdir("./" + dirName); // cd $1
 fs.mkdirSync('css'); // mkdir css
 fs.mkdirSync('js'); // mkdir js

 fs.writeFileSync("./index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>"); // echo "" >> index.html
 fs.writeFileSync("css/style.css", "h1{color: red;}"); // echo "" >> css/style.css
 fs.writeFileSync("./js/main.js", "var string = 'Hello World';alert(string)"); // echo "" >> js/main.js

 process.exit(0); // exit 0