"use strict";
class BCD {
    numbers = []
    mask = 0b1111;
    bcd = 0;
    bcdDigit = 4;
    maxBcdDigit = 7;

    // Во избежание переполнение Double чисел на вход используем BigInt
    constructor(num) {
        this.num = num
        
        // console.log(`Numbers array items in binary: ${this.numbers.forEach(number => console.log(number))} \n`);
    }
    // Во избежание переполнение Double чисел на выход используем BigInt
    valueOf() {
        let len = 0
        let movedDigit = 0n
        while (this.num > 0n)
        {
            let digit = this.num % 10n
            if (len > this.maxBcdDigit - 1)
            {
                // this.numbers.push(movedDigit)
                this.numbers.push(binary(Number(movedDigit)))
                // console.log(`Numbers array: ${this.numbers}`);
                movedDigit = 0n
                len = 0
            }
            movedDigit |= digit << BigInt(this.bcdDigit * len)
            
            this.num = this.num / 10n
            len++
        }
        // this.numbers.push(movedDigit)
        this.numbers.push(binary(Number(movedDigit)))
        // console.log(`Result: ${binary(Number(movedDigit))}`);
        // console.log(`Numbers array: ${this.numbers}`);
        return this.numbers
        // ...
        // temp return
        // return BigInt(455)
    }
    // Возвращает разряд BCD числа по заданной позиции.
    // Отрицательная позиция означает разряд "с конца".
    get(pos) {
        // temp return
        // return 4
    }
}

const n = new BCD(65536n);
const n2 = new BCD(6553601200119n);
console.log(n2.valueOf()); // 0b01100101010100110110 или 415030n
// console.log(n.get(0)); // 6
// console.log(n.get(1)); // 5
// console.log(n.get(-1)); // 6
// console.log(n.get(-2)); // 3


function binary(num) {
	const str = new Uint32Array([num])[0].toString(2);
	return "0b" + str.padStart(32, "0").replace(/(.{4})(?!$)/g, "$1_");
}
// console.log(binary(65536))

// console.log(2 << 8 | 9 << 4 | 7)
// console.log(((2 << 8 | 9 << 4 | 7) & (~0 << 28 >>> 24)) >>> 4)


// let num = 1234n
// while (num > 0)
// {
//     let digit = num % 10n
//     console.log(digit);
//     num = num / 10n
// }
// let num = 0b01100101010100110110
//         //   0b01100101010100110110
// let numDecimal = 415030
// console.log(num.toString(10));
// console.log(numDecimal.toString(2));

//415030