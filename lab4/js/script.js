let userName = "Andrew"
let userAge = 21

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)

var userPets = ["Cat", "Dog"]
var userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
var everyDaySpendingPerPet = 6
var daysSurvived = 0
console.log("userPets: " + userPets, "userBalance: " + userBalance, "everyDaySpendingPerPet: " + everyDaySpendingPerPet, "daysSurvived: " + daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")


userPets.push("Hamster");
console.log("userPets: " + userPets, "userBalance: " + userBalance, "everyDaySpendingPerPet: " + everyDaySpendingPerPet, "daysSurvived: " + daysSurvived)

userPets.pop();
console.log("userPets: " + userPets, "userBalance: " + userBalance, "everyDaySpendingPerPet: " + everyDaySpendingPerPet, "daysSurvived: " + daysSurvived)

everyDaySpendingPerPet = 2.4

/*
function nameVertical(name) {
    console.log(name)
    var i = 0;
    while (i < name.length) {
    console.log(name[i]);
    i++;
    }
}*/
function nameVertical(name) {

    console.log(name);
    let nameLength = name.length;

    for (i = 0; i < nameLength; i++) {
        console.log(name[i]);
    }
}

// Sarah for example
nameVertical("Sarah")

/*
function code(n) {
    return (n < 100) ? "Not a valid code" : (n > 600) ? "Not a valid code" : (n > 99 && n < 200 ) ? "Informational responses" : (n > 199 && n < 300 ) ? "Successful responses" : (n > 299 && n < 400 ) ? "Redirection messages" : (n > 399 && n < 500 ) ? "Client error responses" : (n > 499 && n < 600 ) ? "Server error responses" : "Not a valid code";
}
// for example n = 121
console.log(code(101));
*/
function code(n) {
    return           (n < 100) ? "Not a valid code" :
        (100 <= n && n <= 199) ? "Informational responses" :
        (200 <= n && n <= 299) ? "Successful responses" :
        (300 <= n && n <= 399) ? "Redirection messages" :
        (400 <= n && n <= 499) ? "Client error responses" :
        (500 <= n && n <= 599) ? "Server error responses" :
        "Not a valid code"
}
    //for example 404
console.log(code(404));


/*
    The function should print to the console the values of the passed variables.
    If the two variables have the same values and they are of the same type, the function should print to the console: The two variables have the same value and type
    If the two numbers have the same values but they are from different types, the function should print to the console: The two variables have the same value but not the same type followed by the type of each of them, as follows: the type of var1 is var1 type
    Otherwise, the function should print to the console: The two variables do not have the same value nor the same type
*/

function compareVariables(var1, var2) {
    console.log("var 1: "+ var1 +", var2: "+ var2);
    console.log((var1 == var2 && typeof(var1) == typeof(var2)) ? "The two variables have the same value and type" :
            (var1 == var2 && typeof(var1) != typeof(var2)) ? "The two variables have the same value but not the same type" :
            "The two variables do not have the same value nor the same type")
}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables (daysSurvived, userBalance);

function compareVariables(var1, var2) {
    console.log("var1= " + var1);
    console.log("var2= " + var2);

    if (var1 === var2) {
        console.log("the two variables have the same value and type");
    } else if (var1 == var2) {
        console.log("the two variables have the same value but not the same type");
        console.log("the type of " + var1 + " is " + typeof var1);
        console.log("the type of " + var2 + " is " + typeof var2);
    } else {
        console.log("the two variables do not have the same value nor the same type");
    }
}

// After completing the function pass different values instead of var1 and var2 and test the result

compareVariables(3, '3')



// print fibonacci till n
function fibonacci(n) {
    console.log("Fibonacci till: "+ n + " ...");

    let n_1 = 0, n_2 = 1, next = 0;
        
    for (let i = 1; i <= n; i++) {
        
        console.log(n_1);
        
        next = n_1 + n_2;
        
        n_1 = n_2;
        
        n_2 = next;
    }
}

// After completing the function pass different numbers instead of n and test the result.
fibonacci(n=10);

function fibonacci(n) {
    let n1 = 0,
        n2 = 1,
        nextNumber;
    
    console.log('Fibonacci Sequence:');
    console.log(n1); // print 0
    console.log(n2); // print 1
    
    nextNumber = n1 + n2;
    
    while (nextNumber <= n) {
    
        // print the next number
        console.log(nextNumber);
    
        // calculate the next number
        n1 = n2;
        n2 = nextNumber;
        nextNumber = n1 + n2;
    }
}
// Insert a number instead of n to test your function
fibonacci(n=10);
    