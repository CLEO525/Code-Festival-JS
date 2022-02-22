//25. 원의 넓이를 구하세요
//원의 넓이는 반지름의 길이 X 반지름의 길이 X 3.14
//입력으로 반지름의 길이가 주어지면 넓이를 반환하는 함수를 만드시오


function roundSquare (r) {
    const circle = r * r * 3.14;

    return circle;
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('반지름의 길이 : ', (r) => {
  console.log(`원의 넓이: ${roundSquare(r)}`);
  rl.close();
});