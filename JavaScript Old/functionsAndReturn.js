// Lesson 1
/*
Don't Repeat Yourself (D.R.Y)
The D.R.Y. principle is really important in programming. No repeating!

Any time you find yourself typing the same thing, 
but modifying only one small part, you can probably use a function.

The 'small part' that you find yourself modifying will be the parameter. 
And the part that you keep repeating will be the code in the reusable block - the code inside { }.
*/

var orangeCost = function (orange)
{
    console.log(orange * 5);
}

orangeCost(5)

//Lesson 2 
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(6)
console.log(newNumber);

//Lesson 3
// Define quarter here.
var quarter = function (number)
{
    return (number / 4);
}



if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//Lesson 4
