//19. 제곱을 구하자
// 두 숫자 a, b 가 주어지면, a의 b승을 구하는 프로그램을 작성하시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('수를 입력하세요 :', (a,b) => {
  console.log(`${Math.pow(a,b)}`);
  rl.close();
});


