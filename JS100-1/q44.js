//44. 각 자리수의 합
// 입력한 숫자의 각 자리숫의 합을 구하는 프로그램

let num = '';
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력: ', (num) => {
  let sum = 0;
  while(num !== 0){
    sum += (num % 10);
    num = Math.floor(num/10)
}
  console.log(sum);
  rl.close();
});