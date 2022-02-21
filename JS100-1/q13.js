//13. 몇 번쨰 행성인가요?
//입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 출력으로 그 순서에 해당하는 행성의 이름을 출력해주세요
//수 금 지 지 화 목 토 천 해
const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('몇 번쨰 행성인가요? ', (number) => {
  console.log(`${planets[number - 1]}`);
  rl.close();
});

