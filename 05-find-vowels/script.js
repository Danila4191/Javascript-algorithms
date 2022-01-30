/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

function findVowels(str) {
  const vowel = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  const strLower = str.toLowerCase()
  const arrWords = strLower.split("");
  let vowelCount = 0;
  
  for (let i = 0; i < arrWords.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (arrWords[i] === vowel[j])
       { vowelCount += 1}
    }
  }
  return vowelCount
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels("здравствуй")); // 2
console.log(findVowels("привет")); // 2
console.log(findVowels("хеллоу")); // 3
