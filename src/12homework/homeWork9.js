// Задание 1

// function checkString(str =``) {
// let regExp = new RegExp(/[A-za-z0-9]/,`i`)
// return regExp.test(str)
// }

//  console.log(checkString('kldfgjkghkljkg3436567')) // true

// Задание 2
function searchForMatches(string, pattern) {
    let result = string.match(pattern)
    return result

}
// 1
// console.log(searchForMatches('cccdddhhabfgaabbb',/ab{3}/ig))
// 2
// console.log(searchForMatches('cccdddhha0bbbj',/a0b{3}/ig))
// 3
//  console.log(searchForMatches('Hello_John',/\w+_\w+/ig))
// 4
//   console.log(searchForMatches('Быстрая коричневая лиса перепрыгивает через ленивую собаку',/Быстрая|лиса|собаку/ig))
//   5
//  console.log(searchForMatches('select Country, City, count(CustomerID) from Customers',/(?<=select).+(?=from)/ig))
// 6
//  console.log(searchForMatches('Солнце – солнца – солнцу; читать – читает – читали – все это не разные лексемы, а формы одного и того же слова.',/солнц./ig))
// 7
//  console.log(searchForMatches('test@mail.ru',/(\w+.+)/ig))
// 8
//  console.log(searchForMatches('Date 2023-08-30',/(\d+.){3}/ig))



