//54. 연속되는 수
//연속수일떄 YES, 아니면 NO를 출력하시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력', (nums) => {
    let num = nums.split(' ')
    let unsort = nums.split(' ')
    let sort = num.sort(function (a,b) {
      return a - b;
    }); 
    
    if (unsort.toString() === sort.toString()) {
      console.log('YES')
    } else if (unsort.toString() !== sort.toString()) {
      console.log('NO')
    }
  rl.close();
});