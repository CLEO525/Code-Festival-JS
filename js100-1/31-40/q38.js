//38. 호준이의 아르바이트
// 3등까지 사탕을 받을 수 있음. 학생들의 점수를 입력받고 사탕을 받을 학생의 수를 입력


const { futimes } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('학생 점수 : ', (num) => {
  let test = num.split(' ').map(function(n){
    return parseInt(n, 10);
  });

  let grade = test.sort(function(a,b) {
    return a - b;
  });

  let buyCandy = 0;
  let testArr = [];

  while (testArr.length < 3) {
    let n = grade.pop();
    if(!testArr.includes(n)) {
      testArr.push(n);
    }
    buyCandy += 1;
  }
  console.log()
  console.log(buyCandy);
  rl.close();
});