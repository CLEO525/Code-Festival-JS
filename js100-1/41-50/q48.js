//48.대소문자 바꿔서 출력하기
//문자열의 대소문자를 바꿔서 출력

let str = "string";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (str) => {
    if(str === str.toUpperCase()) {
        console.log(`출력 : ${str.toLowerCase()}`);
    } else if (str === str.toLowerCase()){
        console.log(`출력 : ${str.toUpperCase()}`);
    }
    rl.close();
  });