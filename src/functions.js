// Home Work 1

// Question 1
console.log("*************************** Asal Sayılar ! ***************************");
const findPrime = (...numbers) => {
    numbers.map(number => {
        let prime = findIfPrimeOrNot(number);
        console.log(prime ? `${number} sayısı asal bir sayıdır !` : `${number} sayısı asal bir sayı değildir !`);
    });
}
findPrime(301, 5, 12, 50, 71, 90, 13);
console.log("*************************** Asal Sayılar ! ***************************");
// Question 2
console.log('*************************** Arkadaş sayılar ! ***************************');
const friendNumber = (number1, number2) => {
    let x = 0;
    let y = 0;
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            x += i;
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            y += i;
        }
    }
    let isFriend = (x == number2 && y == number1);

    console.log(isFriend ? `${number1} ve ${number2} sayıları arkadaş sayılardır.` : `${number1} ve ${number2} sayıları arkadaş sayı değildir.`);
}
friendNumber(10, 20)
console.log('*************************** Arkadaş sayılar ! ***************************');

console.log('*************************** Mükkemmel Sayılar ! ***************************');
const perfectNumbers = () => {
    let perfectNumbers = [];
    for (let i = 1; i <= 1000; i++) {
        let dividers = [i];
        for (let a = 1; a < i; a++) {
            if (i % a == 0) {
                dividers.push(a);
            }
        }
        if (dividers.reduce((a, b) => a + b, 0) / 2 == i) {
            perfectNumbers.push(i);
        }
    }
    console.log(`1000'e kadar olan mükkemmel sayılar : ${perfectNumbers} !`);
}
perfectNumbers();
console.log('*************************** Mükkemmel Sayılar ! ***************************');
console.log('*************************** Asal Sayılar ! (1000) ***************************');
const primeNumbers = () => {
    let primes = [];
    for (let i = 1; i <= 1000; i++) {
        if (findIfPrimeOrNot(i)) {
            primes.push(i);
        }
    }
    console.log(`1000'e kadar olan asal sayılar : ${primes}`);

}
primeNumbers();
console.log('*************************** Asal Sayılar ! (1000) ***************************');


function findIfPrimeOrNot(number) {
    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            prime = false;
    }
    return prime;
}
