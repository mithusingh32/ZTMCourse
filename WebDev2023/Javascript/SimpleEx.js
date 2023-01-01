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

/***********************************************************************************************************/
/**********************************Scope Ex 1***************************************************************/
/***********************************************************************************************************/
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
    // a = 3
}
q1();

//#2
var a = 0;
function q2() {
    a = 5;
}
q2();
function q22() {
    alert(a);
    // a = 5
}
q22();

//#3
function q3() {
    window.a = "hello";
}
q3();

function q32() {
    alert(a);
    // a = hello
}
q32();
//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
    // a = test
}
q4();
//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
    // a = 5
}
alert(a);
// a = 2

/***********************************************************************************************************/
/***************************Advanced Control Flow Ex 1******************************************************/
/***********************************************************************************************************/

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    return winBattle() ? 10 : 1; 
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
    // undefined
//#3 return value when moveCommand("back");
    // you arrived home
//#4 return value when moveCommand("right");
    // you found a river
//#5 return value when moveCommand("left");
    // undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


/***********************************************************************************************************/
/***************************ES5 & ES6 Ex 1******************************************************/
/***********************************************************************************************************/

// change everything below to the newer Javascript!

// let + const
// var a = 'test';
let a1 = 'test'
// var b = true;
const b1 = true;
// var c = 789;
const c1 = 789;
a1 = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age1       : 50,
    eyeColor  : "blue"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;
const {firstName, lastName, age1, eyeColor} = person;

// Object properties
var a2 = 'test';
var b2 = true;
var c2 = 789;

// var okObj = {
//     a: a,
//     b: b,
//     c: c
// };

var okObj = {
    a2,
    b2,
    c2
};

// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in NYC. last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

/***********************************************************************************************************/
/***************************Advanced Functions Ex 1******************************************************/
/***********************************************************************************************************/

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
// state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an 
// inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) 
// into callable as f(a)(b)(c).
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// Currying doesn’t call a function. It just transforms it.
// It's useful for extensibilty. It's like template functions almost
const multilyBy5 = curriedMultiply(5);
multilyBy5(10) // Returns 50

// PIPE is simple — it combines n functions. It’s a pipe flowing left-to-right, 
// calling each function with the output of the last one.
// reverse(get6Characters(uppercase(getName({ name: 'Buckethead' })))) turns into 
// pipe(
//   getName,
//   uppercase,
//   get6Characters,
//   reverse 
// )({ name: 'Buckethead' })

// Compose is the same as Pipe, but in reverse. 
// const double = x => x * 2
// const square = x => x * x

// function composition
// var output_final = compose(square, double)(2);
// Order of operation: 2 -> double(2) -> square(double(2))

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum1 = (a, b) => a + b; 

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// returns 13

//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// returns 31

//Currying: What does the last line return?
const sum3 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
const add5 = curriedSum1(5)
add5(12)
// returns 17 

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5_1 = (num) => num + 5;
compose(add1, add5_1)(10)
// returns 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. 
//                         It must only depend on its input elements.

/***********************************************************************************************************/
/***************************Advanced Arrays Ex 1******************************************************/
/***********************************************************************************************************/
// Complete the below questions using this array:
const array1 = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = [];
array1.forEach((x) => {
    newArray.push({
        ...x,
        username: x.username + '!',
    })
});
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const newArray2 = array1.map(x => {
    return {
        ...x,
        username: x.username + '?',
    }
});
console.log(newArray2);

//Filter the array to only include users who are on team: red
const filteredArray = array1.filter(x => x.team === 'red');
console.log(filteredArray);

//Find out the total score of all users using reduce
const totalScore = array1.reduce((accumulator, val) => {
    return accumulator + val.score;
}, 0)
console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum.map((num, i) => {
    return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newArray3 =  array1.map(x => {
    return {
        ...x, 
        items: x.items.map(x => x + '!')
    }
})
console.log(newArray3);


/***********************************************************************************************************/
/***************************Advanced Objects Ex 1******************************************************/
/***********************************************************************************************************/

//Evaluate these:
//#1
[2] === [2]
{} === {}

// Both are false because the data structures are not the same exact one. They are 2 different structures located at 
// 2 different memory locations. 

//#2 what is the value of property a for each object.
const object1 = { a: 5 };  // object1 = { a: 5 }
const object2 = object1;   // Object2 refers to object1
const object3 = object2;   // Object3 also refers to object1 
const object4 = { a: 5};   // Object4 is a new object 
object1.a = 4; // a = 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal { 
    constructor(name, type, color) {
        this.name = name; 
        this.type = type;
        this.color = color; 
    }
}

class Mammal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color)
        this.sound;
    }
    
    makeSound() {
        console.log(`${type} makes ${sound} sound`)
    }
}

const cow = new Mammal("joe", "cow", "white", "moo");
cow.makeSound();

/***********************************************************************************************************/
/***************************ES7  Ex 1******************************************************/
/***********************************************************************************************************/
// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const ans1 = dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John'))

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powOf100 = (x) => x**100; 

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
powOf100(10000) // Return infinity. For large numbers you will need to use floats or another type
// You should use: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
// Research for yourself why you get this result

/***********************************************************************************************************/
/***************************ES8 Ex 1******************************************************/
/***********************************************************************************************************/
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(4);
let rabbit = '🐇'.padStart(4);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// Removes whitespace and then adds inie equal signs at the end

// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
Object.entries(obj).map(value => value.join(" ")).join(' ')

/***********************************************************************************************************/
/***************************ES10 Ex 1******************************************************/
/***********************************************************************************************************/
// We can flatten arrays by using flat(NumOfLayersToFaltten)
const nonFlatArray = [1,2,3,[4,[5,6]]]
nonFlatArray.flat(); // [1,2,3,4,[5,6]]
nonFlatArray.flat(3); // [1,2,3,4,5,6] 

const nonFlatArray1 = [1,2,3,[4,[5,6]]]
nonFlatArray1.flatMap(x => x); // Flattens the array dept of 1 and then iterates through it 

// We can convert an arrya of keys-values to an object: 
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries); //  Object { foo: "bar", baz: 42 }

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flatMap(x => x.join(' ')).join(' '))


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity))


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
userEmail3.trimStart().trimEnd();


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
//Solution
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)

/***********************************************************************************************************/
/***************************Advanced Loops Ex 1******************************************************/
/***********************************************************************************************************/

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i];
        }
    }
    return highest
}

function biggestNumberInArray2(arr) {
    let highest = 0;
    arr.forEach(item => {
        if (highest < item) {
            highest = item;
        }
    })
    return highest;
}

function biggestNumberInArray3(arr) {
    let highest = 0;
    for (item of arr) {
        if (highest < item) {
            highest = item;
        }
    }
    return highest;
}


biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket) {
        if (item === lookingFor) {
            return `${lookingFor} is in your basket`
        }
    }
    return 'that does not exist in your basket'
}
