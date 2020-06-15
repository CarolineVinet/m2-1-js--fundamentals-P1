// Q9
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.//


for (i=1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log ("FizzBuzz")
    }
    else if (i % 3 === 0){
        console.log ("Fizz")
    }
    else if ( i % 5 === 0){
        console.log ("Buzz")
    }
    else {
        console.log (i)
    }
}
