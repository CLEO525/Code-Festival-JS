//46.각 자리수의 합2
//1부터 20까지 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하시오

const { Duplex } = require("stream");

let num = [];
let sum = 0;

for(let i = 0; i< 20; i++) {
    num[i] = i + 1;
}
num.forEach((n) => {
    while(n!== 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
})
console.log(sum);