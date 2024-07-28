// Задание 1
//ПРИНЯТО
// function checkString(str =``) {
// let regExp = new RegExp(/[A-za-z0-9]/,`i`)
// return regExp.test(str)
// }
//
//  console.log(checkString('kldfgjkghkljkg3436567')) // true

// Задание 2
//ПРИНЯТО
function searchForMatches(string, pattern) {
    let result = string.match(pattern)
    return result

}

// 1
//ПРИНЯТО
//console.log(searchForMatches('cccdddhhabfgaabbb',/ab{3}/ig))
// 2
//можно было  использовать квантификатор * /a(0)(b)*/gi
console.log(searchForMatches('cccdddhha0bbbj',/a0b{3}/ig))
// 3
//ПРИНЯТО
//console.log(searchForMatches('Hello_John', /\w+_\w+/ig))
// 4
//ПРИНЯТО
//console.log(searchForMatches('Быстрая коричневая лиса перепрыгивает через ленивую собаку', /Быстрая|лиса|собаку/ig))
//   5
//ПРИНЯТО
//console.log(searchForMatches('select Country, City, count(CustomerID) from Customers', /(?<=select).+(?=from)/ig))
// 6
//ПРИНЯТО
//console.log(searchForMatches('Солнце – солнца – солнцу; читать – читает – читали – все это не разные лексемы, а формы одного и того же слова.', /солнц./ig))
// 7
// для валидации email обычно используются подобные регулярные выражения
//  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
console.log(searchForMatches('test@mail.ru', /(\w+.+)/ig))
// 8
//задание выполнено без использования именнованных скобочных групп
// нужно было так /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
console.log(searchForMatches('Date 2023-08-30', /(\d+.){3}/ig))

/**
 * Итого 7 из 10
 */
 