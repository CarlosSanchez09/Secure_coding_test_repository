// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Loop to check prime numbers from 1 to 20
for (let num = 1; num <= 20; num++) {
    if (isPrime(num)) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}
