//29. 대문자만 지나가세요
// 알파벳 하나만을 입력하고 그 알파벳이 대문지이면 YES를 아니면 NO를 출력하는 프로그램

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('대문자를 입력해 주세요?', (str) => {
    if(str === str.toUpperCase()) {
        console.log('YES');
    } else if (str !== str.toUpperCase()){
        console.log('NO');     
    }
  rl.close();
});