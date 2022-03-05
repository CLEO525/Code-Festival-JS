//59. 빈칸채우기
//문자열의 길이를 50으로 제한하고 입력된 문자열을 가운데 정렬, 빈곳은 =로 채우시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('문자열 입력: ', (string) => {
   const str = string;
   const mid = 25 + parseInt((str.length/2),10);
   const left = str.padStart(mid, '=')
   console.log(left.padEnd(50, '='))
    rl.close();
  });