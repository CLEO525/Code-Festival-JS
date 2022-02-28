//10. 별 찍기
//입력 5
const { Sign, sign } = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력', (SIZE) => {
  let star = '';
  let size = Number(SIZE);

  for (let i = 0; i < size; i++) {
    for (let j = size; j > i; j--) {
        star += ' ';
    }
    for (let k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);
  rl.close();
});
