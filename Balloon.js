var set = " 4 sets of red, 3 sets of blue, and 3 sets of yellow ";

//store my statement as strings
//put my strings into two diffent arrays
//remove for, and, color.
//remove the R in the value so that i work with numbers

// use split method to put method to put my string into an  arrays

 var newSet = set.split(",");
//  console.log(newSet);

// a froEach loop and remove the of and sets

var balloons = [];

newSet.forEach(function(ab){
     balloons.push(ab.replace(" sets", "")
              .replace(" of", "")
              .replace(" and", "")
              .split(" , ")

           )


});
 console.log(balloons);

// var trim = balloons.trim();
//     console.log(trim)

//create a new loop to through my newarray
//while doing that divide my Array by 3 to get each balloons cost;

a = [];
balloons.forEach(function(ab){

      a.push(Number[ab]) * 3;
 });
    // console.log(a)

    //How much do all the balloons cost

  var priceforEach = "R4 for red, R5 for blue, and R5.50 for yellow.";

var price = priceforEach.split(",")

  // console.log(price);

aArray = [];

  price.forEach(function(fo){
      aArray.push(fo.replace("for", "")
       .replace("and", "")
       .split(",")
     )
  })

  console.log(aArray)
