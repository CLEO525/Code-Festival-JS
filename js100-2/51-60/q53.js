//53. 괄호문자열
//입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.
//(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

function countBracket(e) {
    let count = 0;
    for(let i = 0; i<e.length; i++){
    if (e[i] === ')') {
        count++;
    }
    if (e[i] === ')') {
        count--;
    }
}
if(count !== 0) {
    return false;
}

let 괄호 = [];
for (let i in e) {
    if (e[i] === '(') {
        괄호.push('(');
    }
    if (e[i] ===')') {
        if (괄호.length === 0) {
            return false;
        }
        괄호.pop();
    }
}
return true;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('문자열 입력: ', (string) => {
    let str = string.split('');
    if (countBracket(str) === true) {
        console.log('YES')
    } else {
        console.log('NO')
    }
  rl.close();
});