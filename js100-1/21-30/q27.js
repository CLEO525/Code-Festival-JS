//27. 객체 만들기 
//첫번쨰 입력에서는 학생의 이름이 공백으로 구분되어 입력, 두번째에는 학생의 수학점수가 주어진다. 
//두개를 합쳐 학생의 이름이 key, value가 수학 점수인 객체를 출력


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const LINE_COUNT =2
let inputLines = [];
let counter  =0;
rl.on('line', function (line) {
  inputLines.push(line)
  counter++;
  if(counter == LINE_COUNT){
      rl.close();
  }
})
.on('close', function () {

  // 1. 이름을 공백 기준으로 엔개 가져온다
  // 2. 점수를 공백 기준으로 엔개 가져온다
  // => inputLines
  // ["yujin hyewon","70 100"]
  //nameArr = inputLines[0].split(' ');
  //scoreArr = inputLines[1].split(' ').map(score=>Number(score));
  //const test = {}
  //test[nameArr[0]] = scoreArray[0]

  //빈객체를 선언후
  //nameArr를 순회하면서 socreArr의 값을 갖는 객체를 생성


  // 3. 이름 파싱(name array), 점수 파싱(score array)
  // 4. 파싱된 이름을 키, 파싱된 점수를 값 으로 객체 생성
nameArr = inputLines[0].split(' ');
scoreArr = inputLines[1].split(' ').map(score => Number(score));
const result = {}
// 최종 결과 : {'ss' : 40, 'dd' : 30}
//nameArr => ['ss', 'dd']
//scoreArr=> [40, 30]
//{'ss':40,'dd':30}
result[nameArr[0]] = scoreArr[0];
result[nameArr[1]] = scoreArr[1];
console.log(result)
process.exit();
});
