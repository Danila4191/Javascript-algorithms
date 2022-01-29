/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
 */

function palindrome(str) {
  const strLower = str.toLowerCase();
  const strSR = strLower.split("").reverse();
  const strS = strLower.split("");
  const N = strLower.length / 2;
  
  if (str.length == 0) {
    return true;
  } else if (
    (str.length !== 0) &
    (strS.slice(0, N).sort().toString() == strSR.slice(0, N).sort().toString())
  ) {
    return true;
  } else {
    return false;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(palindrome('топот')); // должно быть true
//console.log(palindrome('Saippuakivikauppias')); // true
//console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
 */
