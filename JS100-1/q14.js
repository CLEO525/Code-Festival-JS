//14. 3의 배수 인가요?
//3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (i) => {
    if(i % 3 === 0){
    console.log(`출력 : 짝`);
    } else {
    console.log(`출력 : ${i}`);    
    }
  rl.close();
});