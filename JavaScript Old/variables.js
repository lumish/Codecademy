//Lesson 1
/*Once you create (or declare) a variable as having a particular name, 
you can then call up that value by typing the variable name.
*/
// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.

// declare your variable here:
var myAge = 24;

console.log(myAge);

//Lesson 2
/* It is useful to think that any time you type the variable's name, 
you are asking the computer to swap out the variable name and swap in the value of the variable.
So the variable stores the value of the variable, whether that is a number or a string. 
As you will see soon, this makes writing long programs much easier!
*/
// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "USA";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));

//Lesson 3
// On line 2, declare a variable myName and give it your name.
myName = "Bret";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = "Br";
// On line 9, use console.log to print out the myName variable.
console.log(myName);

//Lesson 4
myColor = "Blue";
console.log(myColor.length);

//Lesson 5
// Not sure where to begin? Check the Hint!
if ("test".length < 42) {
    console.log("I finished my first course!");
} else {
    console.log("You lose.");
}