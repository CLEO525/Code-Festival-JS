//20. 몫과 나머지
//두 숫자가 주어집니다. 두번쨰 숫자로 첫번쨰 숫자를 나누었을 떄 그 몫과 나머지를 출력하시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 :', (num1,num2) => {
  output = num2 / num1;
  console.log(`${output}`);
  rl.close();
});