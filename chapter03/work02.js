// 引数による異なるオブジェクトの生成
const createWeapon = (weaponType) => {
    if (weaponType === 'sword') {
        return {
            type: '剣',
            attack: () => '剣で切りつけた',
        };
    } else if (weaponType === 'bow') {
        return {
            type: '弓',
            attack: () => '矢を放った',
        };
    } else if (weaponType === 'staff') {
        return {
            type: '杖',
            attack: () => '魔法を唱えた',
        };
    }
};

// 引数に応じて、異なるオブジェクトを生成する
// sword
const myWeapon1 = createWeapon('sword');
console.log(myWeapon1.type); // 剣
console.log(myWeapon1.attack()); // 剣で切りつけた

// bow
const myWeapon2 = createWeapon('bow');
console.log(myWeapon2.type); // 弓
console.log(myWeapon2.attack()); // 矢を放った
