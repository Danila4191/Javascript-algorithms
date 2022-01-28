/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
 */

function countZeros(n) {
  let arr = "";
  let arr4 = 0;
  for (let i = 1; i <= n; i++) {
    arr += i;
  }
  const arr2 = arr.split("");
  const arr3 = arr2.map(Number);
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[j] === 0) {
      arr4 += 1;
    }
  }

  return arr4;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
