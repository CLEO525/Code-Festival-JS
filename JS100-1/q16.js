//16. 로꾸거
//문장이 입력되면 거꾸로 출력하는 프로그램


function reverseStr(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
      result = result + str[i];
    }
    return result;
  };

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (str) => {
  console.log(`출력 : ${reverseStr(str)}`);
  rl.close();
});