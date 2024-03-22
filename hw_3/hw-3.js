const myFizzBazz = fizzbuzz();

console.log(myFizzBazz.next()); // 1n
console.log(myFizzBazz.next()); // 2n
console.log(myFizzBazz.next()); // Fizz
console.log(myFizzBazz.next()); // 4n
console.log(myFizzBazz.next()); // Buzz
console.log(myFizzBazz.next()); // Fizz
console.log(myFizzBazz.next()); // 7n
console.log(myFizzBazz.next()); // 8n
console.log(myFizzBazz.next()); // Fizz
console.log(myFizzBazz.next()); // Buzz
console.log(myFizzBazz.next()); // 11n
console.log(myFizzBazz.next()); // Fizz
console.log(myFizzBazz.next()); // 13n
console.log(myFizzBazz.next()); // 14n
console.log(myFizzBazz.next()); // FizzBuzz
// ...

function fizzbuzz()
{
    let counter = 0n

    return {
        next: () =>
        {
            counter++
            if (counter % 15n === 0n) {
                return 'FizzBuzz'
            } else if (counter % 3n === 0n) {
                return 'Fizz'
            } else if (counter % 5n === 0n) {
                return 'Buzz'
            }
            return counter
        }
    }
}