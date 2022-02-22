//26. 행성문제2
//행성의 한글 이름을 입력하면 영어이름을 반환하는 프로그램을 만들어주세요

const planets = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth', 
    '화성' : 'Mars',
    '목성' : 'Jupiter', 
    '토성' : 'Saturn', 
    '천왕성' : 'Uranus', 
    '해왕성' : 'Neptune'
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('행성 한글 이름 : ', (string) => {
  console.log(`행성 영어 이름 : ${planets[string]}`);
  rl.close();
});
