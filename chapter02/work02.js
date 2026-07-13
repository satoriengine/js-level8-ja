// クロージャを使ってプライベート変数を保持
const createCounter = () => {
    // この変数を直接触れないようにする
    let count = 0; // プライベート変数になる
    return {
        increment: () => {
            count++;
        },
        getCount: () => {
            return count;
        },
    };
};

const counter = createCounter();
counter.increment(); // 加算する
console.log(counter.getCount()); // 2

// undefinedになる。プライベート変数を直接操作できない
console.log(counter.count); // undefined
