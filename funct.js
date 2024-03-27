// Older Javascript way of writing functions
// function sayHi(){
//     console.log('Hello World!')
// }

// sayHi();

// the below code fragment can
// function sayHi2(name){
//     console.log ('Hello there,' + name);
// }
// sayHi2('Inyang');

// Modern JavaScript way of writing functions - ARROW FUNCTIONS
const sayHi3 = (name) => {
    console.log ('Hello there,' + name);
}
sayHi3('Ukpong')

const whatCar = ({brand = "Honda", color}) => {
    console.log('This is the ' + brand + " brand with a color of " + color);
}
// whatCar('Lexus', 'Blue');
// whatCar({color: 'blue', brand: 'Honda'})


const sumUpValues = ({x, y}) => {
    let c = x + y;
    return c;
}

console.log(sumUpValues({x: 6, y: 5}))

const fullName = ({firstname, lastname}) =>{
    return firstname + ' ' + lastname;
}
console.log({fullName: "Queenie", lastname: "Ukpong"})

const scores = [20, 30, 68, 12]
const sumUpScores =  (scores) => {
    let sum = 0;
    for (let score of scores){
        // sum = sum + score // 1
        sum += score; // 2
    }
    return sum;
}

console.log(sumUpScores(scores))


//Spread Operators
const sumUpScoresV2 = (...scores) => {
    return scores.reduce((total, score) => total + score, 0);
}

console.log(sumUpScoresV2(...scores))

const totalScore = sumUpScores(scores);
console.log("SumFunc result: " + totalScore)


//arrow functions = a consice way to write function expressions good for simple functions
//that you use only once  
//(parameters) => some code 


const hello = (name, age) => {
    console.log('Hello ${name}')
    console.log('You are ${age} years old')};

hello("Bro", 25);//call or invoke function



const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element)

console.log(total)



// const hello = () => console.log('hello there')

// hello() //call or invoke function