// オブジェクトを返却して機能を公開する
const userModule = (() => {
    // この変数を直接触れないようにする
    let name = 'Guest';
    return {
        setName: (newName) => {
            name = newName;
        },
        getName: () => {
            return name;
        },
    };
})();

// 呼び出し可能
userModule.setName('Bob');
// 呼び出し可能
console.log(userModule.getName()); // Bob

// 呼び出し不可
// undefinedになる。直接操作できない
console.log(userModule.name); // undefined
