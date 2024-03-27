scores = [70, 85, 61, 90, 54]
console.log(scores)

// pop function - it removes the last element from the array
// scores.pop()

// console.log(scores)
lastScore = scores.pop()
// console.log(scores)
// console.log(lastScore)


// Push function - it adds  an element to the array

scores.push(32)
// console.log(scores)

// Shift function - it removes the first element from the array
firstScore = scores.shift()
console.log(scores)

// console.log(firstScore)

// Unshift function - it adds element from the array from the front
scores.unshift(50)
console.log(scores)


// Strings

time = 9
statement1 = "Jude goes to work at " + time + " AM" // concatenation
statement2 = `Mike goes to work at ${time} AM` // Interpolation using back ticks
console.log(statement1)
console.log(statement2)

statment3 = "My car is 'large' like an elephant"
statment4 = "My car is \"large\" like a dinnosaur";
console.log(statment3)
console.log(statment4)

// LOGICAL OPERATORS

let a = 3;
let b = 6;
let c = 8;
// console.log (a > b); // false 
// console.log (a < b); // true
// console.log (a <= c); // true
// console.log (b >= c); // false
// console.log (a == b); // false
// console.log (a != b); // true
// console.log (a == "3"); // true
// console.log (a === "3"); // false
// console.log (a === 3); // true

// console.log (a > b &&  a < c); // false
// console.log (a > 1 &&  a < c); // true
// console.log (a > b || a < c) // true

// IF STATEMENT
if (a > b) {
    console.log(" Person A is taller")
}
else if(a == b){
    console.log("Person A is the same height as Person B");
} else {
    console.log(" Person A is shorter")
}
