//24. 대문자로 바꿔주세요!
// 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만드시오

let str = "string";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (str) => {
    console.log(`대문자 출력 : ${str.toUpperCase()}`);
    rl.close();
  });