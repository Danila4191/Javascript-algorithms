/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const strA = str.split(" ");
  let strNew = "";
  for (let i = 0; i < strA.length; i++) {
    let strItem = strA[i];
    strNew +=
      strItem.substring(0, 1).toUpperCase() + strItem.substring(1) + " ";
  }
  const strB = strNew.split(" ");
  strB.pop();
  const strC = strB.toString();
  return strC.replace(/,/g, " ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
