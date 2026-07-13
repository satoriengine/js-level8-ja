/*
ワーク06_練習問題

以下の手順でコードを作成してください。

1. 関数cartのメソッドに処理を作成します。
2. addItem メソッド内で、受け取った name と price を使ってオブジェクト { name, price } を作成し、items 配列に追加してください。
3. getTotal メソッド内で、items 配列の各要素の price を合計し、その値を戻り値として返してください。
4. getItemCount メソッド内で、items 配列の要素数（長さ）を戻り値として返してください。

実行結果のように表示する処理を作成してください。

実行結果
700
3
*/

const cart = (() => {
    // 商品オブジェクトの配列 { name, price }
    const items = [];
    return {
        addItem: (name, price) => {
            // items配列に商品を追加する
            items.push({ name, price });
        },
        getTotal: () => {
            // 合計金額を計算して返す
            return items.reduce((total, item) => total + item.price, 0);
        },
        getItemCount: () => {
            // 商品数を返す
            return items.length;
        },
    };
})();

// 以降の部分は変更してはいけません
cart.addItem('Apple', 100);
cart.addItem('Banana', 200);
cart.addItem('Peach', 400);
console.log(cart.getTotal()); // 700
console.log(cart.getItemCount()); // 3
