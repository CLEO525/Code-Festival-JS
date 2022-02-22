//35. Factory 함수 사용하기
//2제곱, 3제곱, 4제곱을 할수 있는 코드를 만드시오

function one(n){
    function two(m){
        const answer = Math.pow(m, n);
        return answer;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));