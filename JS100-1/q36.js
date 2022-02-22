//36. 구구단 출력하기
//1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 출력하는 프로그램

let num = '';
let output = '';
function multipleI (num) {
    for(let i = 1; i < num; i++){
        for (j = 1; j < 10; j++){
        output += num * j + ' ';
        
    }
}return output;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('단 입력: ', (num) => {
  console.log(`${num}단 : ${multipleI(num)}`);
  rl.close();
});