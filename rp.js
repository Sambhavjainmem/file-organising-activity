//input
let inputarr = process.argv.slice(2);
//console.log(inputarr);
let cmd = inputarr[0];
switch(cmd){
    case "help":
        console.log("Help implemented");
        break;
    case "tree":
        console.log("tree implemented",inputarr[1]);
        break;
    case "organize":
        console.log("organise implemented",inputarr[1]);
        break;
    default:
        console.log("Wrong command");
        break;
}