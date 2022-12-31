// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name

// create a variable that holds the answer // of "firstName" + " " + "lastName"

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here? 

console.log(a + b === 23)

// What is c equal to?
var c;
console.log(c === undefined)


// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!
const input1 = prompt("First Value");
const input2 = prompt("Second Value");
const sum = Number(input1) + Number(input2);
alert(`Sum of ${input1} and ${input2} is ${sum}` )

/***********************************************************************************************************/
/**********************************Ex 4*********************************************************************/
/***********************************************************************************************************/

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

const user_age = Number(prompt("What is your age"));
if (user_age < 18) alert('Sorry, you are too young to drive this car. Powering off');
else if (user_age === 18) alert('Congratulations on your first year of driving. Enjoy the ride!');
else alert('Powering On. Enjoy the ride!')


// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}

/***********************************************************************************************************/
/**********************************Ex 5: Function***********************************************************/
/***********************************************************************************************************/


// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.


function checkDriverAge(age) {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

/***********************************************************************************************************/
/**********************************Ex 6: Arrays*************************************************************/
/***********************************************************************************************************/

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
//
// you should have at the end:
//     ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift() // Removes the first element
array.sort() // Sorts array
array.push('Kiwi') // Add kiwi to end of array

// Remove Apple from array
const indexOfApple = array.indexOf('Apples');
array.splice(indexOfApple, 1); // Delete 1 element starting at index indexOfApple

array.reverse(); // Reverse array
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
const orange = array2[1][1][0];
console.log(orange)


/***********************************************************************************************************/
/**********************************Ex 7: Objects*************************************************************/
/***********************************************************************************************************/
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const obj = { 
    username: "test", 
    password: "password"
}


// 2. Create an array which contains the object you have made above and name the array "database".
const database = [
    obj,
]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
]
