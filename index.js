
// ЗАДАНИЕ 1. Проверка числа на четность
let isEven = function(number) {
    if(typeof number !== "number") return 'ERROR! Введите одно ЧИСЛО (!), которое хотите проверить на четность';
    else return number % 2 === 0;
}

console.log(isEven(5));
console.log(isEven(6));
console.log(isEven('test'));



// ЗАДАНИЕ 2. Функция, возвращающая наименьшее из двух чисел
let minNumber = function(number1, number2) {
    if((typeof number1 !== "number") || (typeof number2 !== "number")) return 'ERROR! Введите два числа, которые хотите сравнить и получить наименьшее из них'
    if (number1 < number2) return number1;
    else return number2;
}

console.log(minNumber(5, 6));
console.log(minNumber(6, 2));
console.log(minNumber('test', 1));



// ЗАДАНИЕ 3. Функция, определяющая, хватит ли у пользователя денег на покупку
let moneyEnough = function(money, cost) {
    if((typeof money !== "number") || (typeof cost !== "number")) return 'ERROR! Введите сначало количество имеющихся у Вас денег, а потом цену на товар, что хотите купить';
    else return cost <= money;
}

console.log(moneyEnough(1500, 250));
console.log(moneyEnough(1500, 4000));
console.log(moneyEnough('150k', 250));



// ЗАДАНИЕ 4. Функция, которая возвращает абсолютную величину числа
let myAbs = function(number) {
    if(typeof number !== "number") return 'ERROR! Введите число, абсолютную величину которого хотите получить';
    else if(number < 0) return -number;
    else return number;
}
console.log(myAbs(-5));
console.log(myAbs(10));
console.log(myAbs('test'));