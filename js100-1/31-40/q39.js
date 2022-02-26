//39. 오타 수정하기
//문장이 입력되면 모든 q를 e로 바꾸는 프로그램

let str = "";
let output = "";
function changeE (str) {
   output = str.replace(/q/gi, 'e');
   return output;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('문장: ', (str) => {
  console.log(`바꾼 문장: ${changeE(str)}`);
  rl.close();
});