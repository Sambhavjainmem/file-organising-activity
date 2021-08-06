let fs = require("fs");
let path = require("path");
let inputDir = process.argv.slice(2)[0];
let allentities = fs.readdirSync(inputDir);
