// 即時実行関数によるスコープの分離
(() => {
    // この変数は外部から操作できない
    const secret = 'This is secret';
    // ここでは表示される
    console.log(secret);
})();

// ここでエラーになる
// console.log(secret);
