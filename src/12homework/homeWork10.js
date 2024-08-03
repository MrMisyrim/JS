// Задание 1

// function curry(f) {
//     return function(str1) {
//         return function(str2) {
//             return function(str3) {
//                 return f(str1, str2, str3);
//             };
//         };
//     };
// }
// function concat(str1, str2, str3){
//     return  str1 + str2 + str3
// }
// let curriedconcat = curry(concat);
// //  но нам нужна другая - каррированная , как представлено ниже

// console.log(curriedconcat("Это")("новая")("строка")) //Это новая строка

// Задание 2
// обычная функция
// function partial(country, job) {
//     let country1 = [`Spain`,`Use`]
//         for (let key of country1) {
//             if (key == country) {
//                 let moneyJob = {
//                     programmer: 1000,
//                     tester: 800,
//                     analyst: 700,
//                     economist: 850
//                 }
//                 for (const [key, value] of Object.entries(moneyJob)) {
//                     if (key == job) {
//                         return {baseRate: value}
//                     }
//                 }
//             }
//         }
//     }
// let getRate = partial.bind(undefined,'Use')

// console.log(getRate('analyst')) // {baseRate: 1000}

// Задание 3
// Частичное применение, когда один из аргументов предопределен заранее.
// Карирование преобразование функции с х аргументами, в х функции с 1 аргументов в каждой

// Document Object Model, сокращённо DOM – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.
// Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

// 1. onclick=fucn(){code}
// 2. addeventlistenet("clicl", func)

// getElementById()
// getElementsByName()
// getElementsByTagName()
// querySelector/all()

// Задание 4/5
let buttonElement = document.querySelector(`button`)
let box = document.getElementById('box')
let p = document.querySelector('p')
buttonElement.addEventListener('click', function(){
    if (buttonElement.innerText == `показать Текст`) {
        function create(){
            p.textContent = `gsdfg`;
            buttonElement.textContent = `Скрыть текст`
            box.style.background = `${getColor()}`
        }
        create()
    }
    else {
        function del(){
            p.textContent=``
            buttonElement.textContent = `показать Текст`
            box.style.background = `${getColor()}`
        }
        del()
    }

})
function getColor() {
    const colors = [
        '#49A16C', '#064236',
        '#ED6742', '#F498AD',
        '#1A5AD7', '#AFC9DA',
        '#FFD829', '#282A2E',
        '#5E6064', '#E6E6E6'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}
// Задание 6
buttonElement.addEventListener('click',send )
function send() {
    let mes = prompt(`Добавить текст?`)
    if(mes === "") return;
    box.textContent = mes;
}
// Задание 7

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

// Задание 8
let btnOpen = document.querySelector(`#open`)
let btnClose = document.querySelector(`#close`)
let mySidenav = document.querySelector("#mySidenav")

btnOpen.addEventListener('click',openMenu)
btnClose.addEventListener('click',closeMenu)

function openMenu() {
    mySidenav.style.width = "250px";
}
function closeMenu() {
    mySidenav.style.width = "0";
}

// Задание 9
let swap = document.querySelector(`#swap`)
let swap1 = document.querySelector(`#swap1`)

swap.addEventListener(`click`, function(){
    document.querySelector(`#box_conten`).classList.add(`box_conten`)
    document.querySelector(`#text`).classList.add(`text`)

})
swap1.addEventListener(`click`, function(){
    document.querySelector(`#box_conten`).classList.remove(`box_conten`)
    document.querySelector(`#text`).classList.remove(`text`)

})


