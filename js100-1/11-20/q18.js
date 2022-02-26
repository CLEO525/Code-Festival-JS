//18. 평균점수
//국어, 수학, 영어의 점수가 주어지면 전체 평균점수를 구하는 프로그램, 소수점X

const readline = require('readline');
const { resourceLimits } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('점수 : ', (a) => {
  function getAverage(a) {
    let output = 0;
    let result = a.split(' ');
    // for transfer
    // output = (Number(result[0]) + Number(result[1]) + Number(result[2]) ) / 3;
    for(let i = 0; i < 3; i++){
      output += Number(result[i]);
    }

    
    return output / 3;
  }  
  console.log(`평균 : ${Math.floor(getAverage(a))}`);
  rl.close();
});