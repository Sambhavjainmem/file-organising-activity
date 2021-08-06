let arr = [1,2,3,true,null,'hello',function fn() { 
        console.log("Hello i am a function inside a array");
        return 10;
}]

console.log(arr[arr.length-1]);
let rval = arr[arr.length-1]();
console.log(rval);
