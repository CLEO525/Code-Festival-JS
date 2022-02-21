//10. 별 찍기
//입력 5

const size = 5;

for(i = size; i >= 1; i--) {
    for(j = i; j <= size + 4; j++) {
        if(j < i * 2 - 1) {
            process.stdout.write(' ');
        }else{
            process.stdout.write('*');
        }
    }
    process.stdout.write('\n');
}