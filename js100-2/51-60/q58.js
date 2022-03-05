//58. 콤마 찍기
//숫자를 입력받고 천단위로 콤마를 찍으시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('숫자입력: ', (num) => {
    function comma (num) {
        if (num.length <= 3) {
            return num;
        } else {
            return comma(num.slice(0, num.length - 3)) + ',' + num.slice(num.length - 3);
        }
    }
  console.log(`콤마 : ${comma(num)}`);
  rl.close();
});