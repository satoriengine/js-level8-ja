/*
ワーク05_練習問題

以下の手順でコードを作成してください。

1. 関数createAdvancedCounterのメソッドに処理を作成します。
2. メソッドincrementでプライベート変数countに1加算します。
3. メソッドdecrementでプライベート変数countに1減算します。
4. メソッドresetでプライベート変数countをinitialValueで初期化します。
5. メソッドgetCountでプライベート変数countを戻り値として返します。

実行結果のように表示する処理を作成してください。

実行結果
11
10
*/

const createAdvancedCounter = (initialValue) => {
    let count = initialValue;
    return {
        increment: () => {
            // プライベート変数countを1加算します
            count++;
        },
        decrement: () => {
            // プライベート変数countを1減算します
            count--;
        },
        reset: () => {
            // プライベート変数countをinitialValueで初期化します
            count = initialValue;
        },
        getCount: () => {
            // プライベート変数countを戻り値として返します
            return count;
        },
    };
};

// 以降の部分は変更してはいけません
const myCounter = createAdvancedCounter(10);
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log(myCounter.getCount()); // 11

myCounter.reset();
console.log(myCounter.getCount()); // 10
