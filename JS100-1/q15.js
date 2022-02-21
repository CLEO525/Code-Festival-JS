//15. 자기소개
//입력으로 <이름>이 주어지면 <이름>으로 출력

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('이름 :', (string) => {
  console.log(`안녕하세요. 저는 ${string} 입니다.`);
  rl.close();
});