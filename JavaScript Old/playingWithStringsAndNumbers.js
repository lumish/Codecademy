//Lesson1 
/*Conditionals

If the first condition is met, execute the first code block. If it is not met, execute the code in the else block. 
See the code below for another example.
*/

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

//Lesson 2
if ("Jon".length * 2 / (2+1) === 2)
{
    console.log("The answer makes sense!");
} 
else
    console.log("Error Error Error");

//Lesson 3
// Below is an example of printing the remainder of 18/4 using modulo:
// console.log(18 % 4); 
console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

//Lesson 4
//An example of an if/else statement with modulo in the condition



if(10 % 5 === 0) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}


//Lesson 5
/* Sometimes you don't want to display the entire string, just a part of it. 
For example, in your Gmail inbox, 
you can set it to display the first 50 or so characters of each message so you can preview them. 
This preview is a substring of the original string (the entire message).

Code:

"some word".substring(x, y) where x is where you start chopping and y is where you finish chopping the original string.

The number part is a little strange. To select for the "he" in "hello", you would write this:

"hello". substring(0, 2);
Each character in a string is numbered starting from 0, like this:

0 1 2 3 4
 | | | | | 
 h e l l o
The letter h is in position 0, the letter e is in position 1, and so on.

Therefore if you start at position 0, and slice right up till position 2, you are left with just he
*/
// Be careful with the substring's letter positions!
"wonderful day".substring(3,7);

//Lesson 6
// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));