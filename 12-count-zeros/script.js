/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
 */

function countZeros(n) {
 let str = "";
 let count = 0;
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  const strNumber = str.split("");
  const arrNumber = strNumber.map(Number);
  for (let j = 0; j < arrNumber.length; j++) {
    if (arrNumber[j] === 0) {
      count += 1;
    }
  }
  return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
