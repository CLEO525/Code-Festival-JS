//20. 몫과 나머지
//두 숫자가 주어집니다. 두번쨰 숫자로 첫번쨰 숫자를 나누었을 떄 그 몫과 나머지를 출력하시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('숫자 입력 :', (nums) => {
  let num = nums.split(' ');
  let a = num[0];
  let b = num[1];
  let output = Math.floor(a / b);
  let left= a % b;  
  console.log(`몫과 나머지: ${output} ${left}`);
  rl.close();
});