// リビーリングモジュールパターンで公開するメソッドを限定する
const mathModule = (() => {
    const add = (a, b) => a + b;
    const minus = (a, b) => a - b;
    return {
        add,
        // minusは公開しない
    };
})();

// 呼び出し可能
console.log(mathModule.add(5, 3)); // 8
// 呼び出し不可 エラーになる
console.log(mathModule.minus(5, 3));
