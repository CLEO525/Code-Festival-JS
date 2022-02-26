//12. 게임 캐릭터 클래스 만들기
// 주어진 소스를 수정하지 않고 게임 캐릭터의 능력치와 파이어볼이 출력되게 만드시오
// 출력 545 210 10

class Wizard {
    constructor (helth, mana, armor) {
        this.helth = helth;
        this.mana = mana;
        this.armor = armor;
    }
    attack () {
        console.log('파이어볼');
    }
}


const x = new Wizard(545, 210, 10);
console.log(x.helth, x.mana, x.armor);
x.attack()