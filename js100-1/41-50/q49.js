//49. 최댓값 구하기
// 10개의 숫자중 최댓값을 반환
const readline = require('readline');
const { resourceLimits } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('숫자입력: ', (nums) => {
  function max(nums) {
    let output = nums.split(' ');
    let result = output[0];
    for(const a of output) {
      if(result < a) {
        result = a;
      }
    }
    return result;
    } 
  console.log(`최댓값: ${max(nums)}`);
  rl.close();
});
