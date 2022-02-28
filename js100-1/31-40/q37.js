//37. 반장선거
// 학생들이 뽑은 후보들을 입력받으면 뽑흰 학생의 이름과 받은 표수를 출력

const { count } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('학생 입력: ', (names) => {
  let nameArr = names.split(' ');
  let vote = {}
  let name = '';

  for(let index in nameArr) {
    let value = nameArr[index];
    vote[value] = vote[value] === undefined ? 1 : vote[value] = vote[value] + 1;
  }
  name = Object.keys(vote).reduce(function(a, b){
    return vote[a] > vote[b] ? a : b
  });
  
  console.log(`${name}(이)가 총 ${vote[name]}표로 반장이 되었습니다.`);
  rl.close();
});
