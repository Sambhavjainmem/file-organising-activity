let path = require("path");
let fs = require("fs");
// // path.join()
// input
//let inputArr = process.argv.slice(2);
//let filename = inputArr[0];
//let content = inputArr[1];
//console.log("Filename",filename)
//console.log("content",content);;
let currentpath = process.cwd();

let filePath = path.join(currentpath,"dir1");
let ext  = path.extname(filePath);
console.log(ext);
//console.log("filepath",filePath);
//fs.writeFileSync(filePath,content);