//42. 2020년
// 두수 a,b를 받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하시오

const { futimes } = require("fs");

/*
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/
let a = "";
let b = "";
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('월, 일:', (input) => {
  let md = input.split(' ');
  let month = Number(md[0]);
  let date = Number(md[1]);
    function checkDate(a,b) {
        const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const d = new Date('2020-'+a+'-'+b);
        return week[d.getDay()];
    }
    
    console.log(md)
  console.log(checkDate(month,date));
  rl.close();
});