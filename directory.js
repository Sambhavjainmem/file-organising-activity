let fs = require("fs");
//create
//fs.mkdirSync("dir1");
// delete
//fs.rmdirSync("dir1");
//path ->check if exists or not 
//let doesExists = fs.existsSync("");
//console.log("This path exist ?",doesExists);
//path ->path belongs to file or directory
//let statsOfAPath = fs.lstatSync("dir1");
//console.log("stats",statsOfAPath);
//console.log("is file? ",statsOfAPath.isFile());
//console.log("is dir?",statsOfAPath.isDirectory());
// directory -> content
//let address = "/Users/sambhavjain/Desktop/pepcoding(webd)/dir1";
//let content = fs.readdirSync(address);
//console.log("Directory content",content);
//firstParam-> srcpath, destpath
let srcpath = "/Users/sambhavjain/Desktop/pepcoding(webd)/f1.txt";
let destpath = "/Users/sambhavjain/Desktop/pepcoding(webd)/dir1/f2.txt";
fs.copyFileSync(srcpath,destpath);
let content  = fs.readFileSync("/Users/sambhavjain/Desktop/pepcoding(webd)/dir1/f2.txt");
console.log(content);