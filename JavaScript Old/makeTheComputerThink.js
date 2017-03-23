//Lesson 1
//console.log() will take whatever is inside the parentheses and log it to the console below your code.
//That's why it's called console.log()!
//This is commonly called printing out.
console.log(2*5)
console.log("Hello")

//Lesson 2
/*List of comparison operators:
> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to
*/
// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

//Lesson 3 
if ("Bret".length < 7) {
    console.log("your name is not very long");
}
//An if statement is made up of the if keyword, a condition like we've seen before, and a pair of curly braces { }. 
//If the answer to the condition is yes, the code inside the curly braces will run.

//Lesson 4
if ("bret".length <= 7) 
{
    console.log("You have a short name");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("You have a long name");
}
//Just like before, if the condition is true, then only the code inside the first pair of curly braces will run. 
//Otherwise, the condition is false, so only the code inside the second pair of curly braces after the else keyword will run.

//Lesson 6
// Remember, the order and punctuation matter.
// If you get an error, check carefully, line by line.
// If you're really stuck, click "Stuck? Get a hint!"
if (5 > 6)
{
    console.log("The condition is true");
}
else
{
    console.log("The condition is false");
}

//Lesson 7
// The computer doesn't worry about extra spaces between words or brackets
// It just cares about the order of where things are placed
// and that you have used the right characters (){}[]"";

// For extra help, a program called a 'linter' is checking your code
// and will put a red 'x' next to the first line that contains errors

if (10 === 10)
{
    console.log("You got a true!");
} else {
    console.log("You got a false!");
}