//17. 놀이기구 키 제한
//입력으로 키가 주어지면 150 넘으면 yes 틀리면 no

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('키 입력: ', (number) => {
    if(number >= 150) {
  console.log('yes');
    } else if (number < 150) {
        console.log('no');
    }
  rl.close();
});