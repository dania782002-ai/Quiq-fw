let maxLength = 0;
let number = 0;

for (let i = 1; i <= 1000000; i++) {
    let n = i;
    let length = 1;

    while (n !== 1) {
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        length++;
    }

    if (length > maxLength) {
        maxLength = length;
        number = i;
    }
}

console.log(number);
