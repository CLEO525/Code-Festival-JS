//18. 평균점수
//국어, 수학, 영어의 점수가 주어지면 전체 평균점수를 구하는 프로그램, 소수점X

const readline = require('readline');
const { resourceLimits } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('점수 : ', (a, b, c) => {
  function getAverage(a, b, c) {
    let output = '';
    output = (a + b + c) / 3;
    return output;
  }  
  console.log(`평균 : ${Math.floor(getAverage(a, b, c))}`);
  rl.close();
});