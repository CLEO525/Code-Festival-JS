//30. 문자열 속 문자 찾기
// 첫번쨰 입력에서는 문자열이 입력, 두번째에서는 찾을 문자가 입력, 그 문자가 시작하는 index를 반환하는 프로그램

let str1 = '';
let str2 = '';

const readline = require('readline');
const { resourceLimits } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('문자, 찾을 문자 입력: ', (str1, str2) => {   
  console.log(`출력 : ${str1.indexOf(str2)}`);
  rl.close();
});

