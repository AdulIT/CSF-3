"use strict";
class BCD {
    bcdDigit = 4;
    maxBcdDigitNumber = 7;
    len = 0;

    // Во избежание переполнение Double чисел на вход используем BigInt
    constructor(num) {
        this.num = num
        this.numbers = []
    }
    
    // Во избежание переполнение Double чисел на выход используем BigInt
    valueOf() {
        // let len = 0
        let currentNum = parseInt(this.num)
        let count = this.countDigits(currentNum)
        // console.log(count);
    
        let movedDigit = 0n
        while (this.num > 0)
        {
            let digit = this.num % 10n
            if (this.len > this.maxBcdDigitNumber - 1)
            {
                // this.numbers.push(movedDigit)
                this.numbers.push(binary(Number(movedDigit)))
                // console.log(`Numbers array: ${this.numbers}`);
                movedDigit = 0n
                this.len = 0
            }
            movedDigit |= digit << BigInt(this.bcdDigit * this.len)
            
            this.num = this.num / 10n
            this.len++
        }
        // this.numbers.push(movedDigit)
        this.numbers.push(binary(Number(movedDigit)))
        // console.log(`Result: ${binary(Number(movedDigit))}`);
        // console.log(`Numbers array: ${this.numbers}`);
        return this.numbers
    }
    // Возвращает разряд BCD числа по заданной позиции.
    // Отрицательная позиция означает разряд "с конца".
    get(pos) {
        console.log(this.len)

    }

    countDigits(n)
    {
        let count = 0

        while(n > 0)
        {
            n = Math.floor(n / 10)
            count++
        }

        return count
    }

    createMask(len, pos)
    {
        let r = ~0
        r << 32 - len
        r >>> 32 - pos
        return r
    }
}

const n = new BCD(65536n);
const n2 = new BCD(6553601200119n);
console.log(n.valueOf()); // 0b01100101010100110110 или 415030n
console.log(n2.valueOf());
console.log(n.get(0)); // 6
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