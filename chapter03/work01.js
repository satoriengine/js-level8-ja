// 単純なファクトリ関数
const createPerson = (name, age) => {
    return {
        name,
        age,
        introduce: () => {
            console.log(`My name is ${name}`);
            console.log(`I am ${age} years old`);
        },
    };
};

// personオブジェクトを生成する
const person = createPerson('Bob', 18);
// personオブジェクトのメソッドを呼び出す
person.introduce();
