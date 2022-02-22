//34. sort 구현하기
//키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램

let num = "";
const unsorted = num;

let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('키 입력: ', (num) => {
    if(unsorted === sorted) {
        console.log(`YES`);
    } else if ((unsorted !== sorted)) {
        console.log(`NO`);
    }
  rl.close();
});