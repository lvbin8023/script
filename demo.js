var fs = require('fs');

 var dirName = process.argv[2] ;

 fs.mkdirSync("./" + dirName); // mkdir $1
 process.chdir("./" + dirName); // cd $1
 fs.mkdirSync('css'); // mkdir css
 fs.mkdirSync('js'); // mkdir js

 fs.writeFileSync("./index.html", ""); // echo "" >> index.html
 fs.writeFileSync("css/style.css", ""); // echo "" >> css/style.css
 fs.writeFileSync("./js/main.js", ""); // echo "" >> js/main.js

 process.exit(0); // exit 0