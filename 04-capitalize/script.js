/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const arrA = str.split(" ");
  let strNew = "";
  for (let i = 0; i < arrA.length; i++) {
    let strItem = arrA[i];
    strNew +=
      strItem.substring(0, 1).toUpperCase() + strItem.substring(1) + " ";
  }
  const arrB = strNew.split(" ");
  arrB.pop();
  const arrC = arrB.toString();
  return arrC.replace(/,/g, " ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
