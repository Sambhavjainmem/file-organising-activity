let fs = require("fs");
let content  = fs.readFileSync("f1.txt");



console.log("content : " + content);



fs.writeFileSync("abc.txt","Hum Aaaj Khush Nhi Hai");
fs.appendFileSync("abc.txt","Bhai Khush Kyu Nhi Hai");
fs.unlinkSync("abc.txt");
console.log("File removed");
let matter = fs.readFileSync("abc.txt");
console.log(matter);