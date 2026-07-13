/*
ワーク04_練習問題

以下の手順でコードを作成してください。

1. userFactory 関数内で、引数 role が 'admin' の場合は、管理者用のオブジェクトを返してください。
{ name, role: 'Admin', access: 'all' }
2. userFactory 関数内で、引数 role が 'admin' 以外（'guest' など）の場合は、一般ユーザー用のオブジェクトを返してください。
{ name, role: 'User', access: 'limited' } 

実行結果のように表示する処理を作成してください。

実行結果
{ name: 'Bob', role: 'Admin', access: 'all' }
{ name: 'Alice', role: 'User', access: 'limited' }
*/

const userFactory = (role, name) => {
    if (role === 'admin') {
        return { name, role: 'Admin', access: 'all' };
    } else {
        return { name, role: 'User', access: 'limited' };
    }
};

// 以降の部分は変更してはいけません
console.log(userFactory('admin', 'Bob'));
console.log(userFactory('guest', 'Alice'));
