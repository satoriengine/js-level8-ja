/*
ワーク05_練習問題

以下の手順でコードを作成してください。

1. Carクラスを定義します。
2. Carクラスはdriveメソッドを定義します。driveメソッドは「車で走る」を返します。
3. Bikeクラスはdriveメソッドを定義します。driveメソッドは「バイクで走る」を返します。
4. vehicleFactory関数に処理を実行します。
5. vehicleFactory関数では、引数 type に応じて、異なるクラスのインスタンスを生成して返します。
6. 引数 type が「car」に等しい場合、Carクラスのインスタンスを返します。
7. 引数 type が「bike」に等しい場合、Bikeクラスのインスタンスを返します。

実行結果
車で走る
バイクで走る
*/

class Car {
    drive() {
        return '車で走る';
    }
}

class Bike {
    drive() {
        return 'バイクで走る';
    }
}

const vehicleFactory = (type) => {
    if (type === 'car') {
        return new Car();
    }
    if (type === 'bike') {
        return new Bike();
    }
};

// 以降の部分は変更してはいけません
const v1 = vehicleFactory('car');
const v2 = vehicleFactory('bike');

console.log(v1.drive());
console.log(v2.drive());
