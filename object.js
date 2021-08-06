let obj = {}
//key: value pair
let cap = {
    name : "Steve" ,
    Lastname : "Roger" ,
    friends : ["Peter","Bruce","Henry"],
    age : 34,
    sayHi : function (){
        console.log("cap say hi");
    },
    address : {
        state : "New York",
        city : "NY city"
    }
}
console.log(cap);
console.log(cap["name"]);
console.log(cap.friends[1]);
cap.sayHi();
console.log(cap.address.state);
let varname = "address";
console.log(cap[varname]);
for(let key in cap){
    console.log(key," : ",cap[key]);
}
for(let prop in cap){
    console.log(prop," ; ",cap[prop]);
}
cap.movies = ["Avergers","thor","cIVIL WAR"];
console.log(cap);
cap.age = 45;
console.log(cap);
delete cap.address.city;
console.log(cap);
