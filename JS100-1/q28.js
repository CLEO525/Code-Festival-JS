//28. 2-gram 이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

function reverseStr(str) {
    let result = '';
    for (let i=0; i<str.length-1; i++){
        console.log(str[i], str[i+1]);
      }
    return result;
  };

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (str) => {
  console.log(`${reverseStr(str)}`);
  rl.close();
}); 