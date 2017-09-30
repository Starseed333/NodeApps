console.log("inside.js")


var fs = require("fs");
fs.readFile("best_things_ever1.txt","utf8", function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        console.log(array[i]);
    }
});




//data has to be called back when you string/split the array




