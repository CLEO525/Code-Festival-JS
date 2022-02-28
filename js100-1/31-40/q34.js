//34. sort 구현하기
//키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('키 입력: ', (nums) => {
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