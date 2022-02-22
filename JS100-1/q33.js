//33. 거꾸로 출력하기
//한줄에 여러개의 숫자가 입력되면 역순으로 그 숫자를 출력하는 프로그램

let str = '';

function reverseNum (str) {
    result = str.split(' ').reverse();
    return result;
}
for(let i = 0; i < str.length; i++){
    result += str[i]
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력: ', (str) => {
  console.log(`역순 출력: ${reverseNum(str)}`);
  rl.close();
});