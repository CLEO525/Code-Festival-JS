//52. quick sort
//다음 빈킨을 채워 퀵 정렬을 완성하시오

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력: ', (nums) => {
    const array = nums.split(' ').map(n => parseInt(n, 10));

    function quickSort(arr){
        if (arr.length <= 1){
          return arr;
        }
      
        const pivot = arr[0];
        const left = [];
        const right = [];
      
        for (let i=1; i<arr.length; i++){
          if(arr[i] < pivot){
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return quickSort(left).concat(pivot, quickSort(right)); 
      }
  console.log(`quick sort: ${quickSort(array)}`);
  rl.close(); 
});