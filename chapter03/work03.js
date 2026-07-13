// インスタンスを生成するファクトリ
class Dog {
    speak() {
        console.log('ワン');
    }
}

class Cat {
    speak() {
        console.log('ニャー');
    }
}

// ファクトリ関数 引数に応じて、異なるクラスのインスタンスを生成します
const animalFactory = (type) => {
    if (type === 'dog') return new Dog();
    if (type === 'cat') return new Cat();
};

// ファクトリ関数からDogクラスのインスタンスを生成します
const dog = animalFactory('dog');
dog.speak();

// ファクトリ関数からCatクラスのインスタンスを生成します
const cat = animalFactory('cat');
cat.speak();
