
// ЗАДАНИЕ 1. Проверка числа на четность
let isOdd = function(number) {
    if (number % 2 === 0) return true;
    else if (number % 2 === 1) return false;
    else return 'ERROR! Введите одно число, которое хотите проверить на четность';
}

console.log(isOdd(5));
console.log(isOdd(6));
console.log(isOdd('test'));



// ЗАДАНИЕ 2. Функция, возвращающая наименьшее из двух чисел
let minNumber = function(number1, number2) {
    if (number1 < number2) return number1;
    else if (number1 > number2) return number2;
    else return 'ERROR! Введите два числа, которые хотите сравнить и получить наименьшее из них';
}

console.log(minNumber(5, 6));
console.log(minNumber(6, 2));
console.log(minNumber('test'));



// ЗАДАНИЕ 3. Функция, определяющая, хватит ли у пользователя денег на покупку
let moneyEnough = function(money, cost) {
    if (cost <= money) return true;
    else if (cost > money) return false;
    else return 'ERROR! Введите сначало количество имеющихся у Вас денег, а потом цену на товар, что хотите купить';
}

console.log(moneyEnough(1500, 250));
console.log(moneyEnough(1500, 4000));
console.log(moneyEnough('150k', 250));



// ЗАДАНИЕ 4. Функция, которая возвращает абсолютную величину числа
let myAbs = function(number) {
    if (number < 0) return -number;
    else if (number > 0) return number;
    else return 'ERROR! Введите число, абсолютную величину которого хотите получить';
}
console.log(myAbs(-5));
console.log(myAbs(10));
console.log(myAbs('test'));