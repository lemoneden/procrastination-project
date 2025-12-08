const phrases = [
    "поиграю в хср",
    "помолюсь",
    "потискаю морскую свинку",
    "посмотрю в потолок",
    "сделаю салат",
    "почитаю мангу",
    "прэс качат",
    "фаенона качат"
];

// console.log(phrases[phrases.length - 1]);
// console.log(phrases.at(-1));

/**
 * Случайная фраза
 * @param {Array} arr  - array
 * @returns {Number} - phrases
 */

const getRandomPhrase = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

let randomPhrase = getRandomPhrase(phrases);
console.log(randomPhrase);

// console.log(document.querySelector(".header"));
// console.log(document.querySelector("#advice-text"));
// console.log(document.querySelectorAll(".button"));
// const a = Array.from(document.querySelectorAll(".button"));
// console.log(a);

const button = document.querySelector(".button");
const paragraph = document.querySelector("advice__paragraph");
const advice = document.querySelector("advice");
const image = document.querySelector("image");

const hello = () => console.log("hello 42");
console.dir(paragraph);
button.addEventListener("click", hello);