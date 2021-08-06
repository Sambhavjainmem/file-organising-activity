let a =10;
function fn(){
    console.log("Hello I am a function,");
    return "hello";
}
function notToBeExported(){
    console.log("I am not EXPORTED");
}
module.exports={
    varNam:a ,
    fxt:fn
}