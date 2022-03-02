//51. merge sort를 만들어보자
//다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

const { listenerCount } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력: ', (nums) => {
  const array = nums.split(' ').map(n => parseInt(n, 10));
  function mergeSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
  
    while ( left.length && right.length){
      if (left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
  
    return result;
  }
  console.log(`merge sort: ${mergeSort(array)}`);
  rl.close();
});