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

  for(let i = size; i > 0; i--) {
    for(let j = i; j <= 2 * size - 1; j++) {
        if(j < i * 2 - 1) {
            star += ' ';
        } else {
            star += '*';
        }
    }
    star +='\n';
  }
console.log(star);
  rl.close();
});
