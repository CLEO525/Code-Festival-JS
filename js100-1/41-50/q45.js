//45.getTime()사용하기
//getTime을 이용하여 연도 계산하기

const day = new Date();

let getYear = day.getTime();
getYear = Math.floor(getYear / (3600*24*365*1000))+1970;

console.log(getYear);