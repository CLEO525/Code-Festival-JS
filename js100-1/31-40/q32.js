//32. 문자열 만들기
// 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램

function countWords (str) {
    result = str.split(' ');
    return result;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력:', (str) => {
  console.log(`단어 수: ${countWords(str).length}`);
  rl.close();
});