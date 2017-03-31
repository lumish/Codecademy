//Lesson 1
var speed = 65;

// Complete the condition in the ()s on line 4
if (speed > 80) {
	// Use console.log() to print "Slow down"
	console.log("Slow down");
} 
else {
	// Use console.log() to print "Drive safe"
    console.log("Drive safe");

}

//Lesson 2
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(9);

// Lesson 3
// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Bret");

// Lesson 4
/*
var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};

The var keyword declares a variable named functionName.

The keyword function tells the computer that functionName is a function and not something else.

Parameters go in the parentheses. The computer will look out for it in the code block.

The code block is the reusable code that is between the curly brackets { }. 
Each line of code inside { } must end with a semi-colon.

The entire function ends with a semi-colon.

To use the function, we call the function by just typing the function's name, 
and putting a parameter value inside parentheses after it. 
The computer will run the reusable code with the specific parameter value substituted into the code.
*/

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)

var foodDemand = function (food)
{
    console.log("I want to eat" + " " + food);
}

foodDemand ("Ice cream")

// Lesson 5
// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

var greeting = function (name) {
    console.log(name);
};

greeting("Bret")
