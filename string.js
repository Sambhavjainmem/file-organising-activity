let a = 10;
//let str = "Hello I am string" + a;
//console.log(str);
str = "  Hello I am also a string  " + a;
console.log(str); 
let str1=`Hello I am a Template String ${a}`;
console.log(str1)
let chrAt4 = str1.charAt(0).toLowerCase();
console.log(chrAt4);
let s = str1.slice(4,10);
console.log(s);
console.log(str.split(" "));
console.log(str.length);
a = str.split(" ");
console.log(a.length);
console.log(str.trim());
console.log(a.join(" "));