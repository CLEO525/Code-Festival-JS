//41. 소수 판별
//소수인지 아닌지 판별하는 프로그램

let num = "";
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('숫자: ', (num) => {
  function prime(num) {
    if(num === 1) {
      console.log('NO');
      return;
    }  
    for(let i = 2; i < num; i++) {
      const output = num % i;
      if(output === 0) {
        console.log('NO');
        return false;
      }
    }
    console.log('YES')
  }
  console.log(prime(num))
    rl.close();
})