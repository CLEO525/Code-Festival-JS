//60. 번호 매기기
//이름을 가나다라 순서대로 배정하고 번호를 매기시오

students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']
let sortName = students.sort()
  for(let i in sortName) {
      if(sortName[i]) {
          console.log(`번호: ${parseInt(i, 10)+1}, 이름 : ${sortName[i]}`)
      }
    }