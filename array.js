let arr = [1,2,3,4,5] ;
console.log(arr);
for(let i = 0 ; i < arr.length; i++){
    console.log(i, arr[i]);
}
let a = [1,3,4,5,6];
console.log(a);
a.pop();
console.log(a);
a.push(18);
console.log(a);
a.shift();
console.log(a);
a.unshift(11);
console.log(a);
let sl = a.slice(1,3);
console.log("sliced",sl);
console.log(a);
let sp = a.splice(2,3);
console.log(sp);
console.log(a);
let idx = a.indexOf(11);
console.log(idx);
let incl = a.includes(11);
console.log(incl);
