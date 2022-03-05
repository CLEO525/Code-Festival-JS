//57. 1의 개수 세기
//0부터 1000까지 1의 수를 출력

let one = '';
for(let i = 0; i <= 1000; i++) {
    one += i;
}
let count = 0;
for(let j in one) {
    if(one[j] == 1) {
        count++;
    }
}
console.log(count);