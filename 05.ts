let even: number[] = [];
let odd: number[] = [];
let mul5: number[] = [];
let prime: number[] = [];
let prime100: number[] = [];

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}

for (let n:number = 0; n <= 1000; n++) {
    if (n % 2 == 0) {
        even.push(n)
    } else {
        odd.push(n)
    }

    if (n % 5 == 0) {
        mul5.push(n)
    }

    if (isPrime(n)) {
        prime.push(n)
        if (n < 100) {
            prime100.push(n)
        }
    }
}


console.log(even)
console.log(odd)
console.log(mul5)
console.log(prime)
console.log(prime100)
