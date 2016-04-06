//store them in array
var set = "4 sets of red, 3 sets of blue, 3 sets of yellow";

// spliting my first line
var newSet = set.split(",");

// console.log(newSet);


var arr = [];

newSet.forEach(function(ab) {
  var parts = ab.split("sets of");
  arr.push({
    color : parts[1],
    qty : parts[0]*3,
    numberOfSets: parts[0],
//     balloonCost : Number(parts[0]*3) + Number(parts[0])
  });  
});

console.log(arr);

 var price = "R4 for red, R5 for blue, R5.50 for yellow";

var price = price.split(",");
//     console.log(price);

var x = [];

price.forEach(function(ad){
    var parts2 = ad.replace(/R/g,"")
                   .split("for");
    x.push({
      color : parts2[1],
      qnty : parts2[0]
    });
});
      console.log(x);
