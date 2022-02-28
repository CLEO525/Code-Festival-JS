//43. 10진수를 2진수로
//숫자를 입력받고 이를 2진수로 바꾸어서 출력하시오

let num = '';
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('숫자입력: ', (num) => {
  let arr = [];
  let output = "";
  while (num) {
    arr.push(num % 2);
    num = parseInt(num / 2, 10) // Number, Int
  }
  arr.reverse();
  arr.forEach((num) => {
    output += num;
  })
  console.log(output);
  rl.close();
});