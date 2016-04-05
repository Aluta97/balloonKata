//store them in array
var set = "4 sets of red, 3 sets of blue, 3 sets of yellow";

// spliting my first line
var newSet = set.split(",");

console.log(newSet);


var arr = [];

newSet.forEach(function(ab) {
  arr.push(ab.split("sets of"));
});

console.log(arr);

var ar = [];

arr.forEach(function(as) {

  ar.push(Number(as[0] * 3)+ " "+ as[1]);
});
console.log(ar); //balloons ordered;

//how much do each balloons cost

var price = "R4 for red, R5 for blue, and R5.50 for yellow";

var newPrice = price.split(",");

 console.log(newPrice);

array = [];

newPrice.forEach(function(al){
  array.push(al.replace("R", "")
                .replace("for", ",")
                .replace("and", "")
                .split(",")
            );
});

 console.log(array);

// each balloon :
