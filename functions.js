// NAMED FUNCTION - hoists functions to the top. So you can call a function before declaring it.
function sayHello(greeting, name = "World") {
    return `${greeting} ${name}!`;
}

console.log("sayHello message:", sayHello("Hi", 'Michael'));
console.log("sayHello message:", sayHello("Awright", 'Bawbag'));
console.log("sayHello message:", sayHello("Awright"));

// ANONYMOUS FUNCTION - doesn't hoist
var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

console.log("1 + 3 with add function:", add(1, 3));


// ARROW FUNCTION - has an implicit return. Will do anything after the arrow without having to state return but for one line ONLY!
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;


console.log("Multiply 2 * 5:", multiply(2, 5));