//2. 배열읭 내장함수
//<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 츨력되게 하세요

var arr = [200, 100, 300];
//pass
console.log(arr); //출력 [200, 100, 10000, 300]

arr.splice(2, 1);
arr.push(10000);
arr.push(300);

console.log(arr);