const phrases = [
    "поиграю в хср",
    "помолюсь",
    "потискаю морскую свинку",
    "посмотрю в потолок",
    "сделаю салат",
    "почитаю мангу",
    "прэс качат",
    "фаенона качат",
    "опять не пройду зеркало или вымысел и буду долго долго грустить",
    "попаду в будущее и буду исправлять ошибки своей бренной молодости",
    "никуда не пойду и буду бесконечно долго тискать морскую свинку"
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
    console.log(arr[randomIndex]);
    return arr[randomIndex];
};

// let randomPhrase = getRandomPhrase(phrases);
// console.log(randomPhrase);

// console.log(document.querySelector(".header"));
// console.log(document.querySelector("#advice-text"));
// console.log(document.querySelectorAll(".button"));
// const a = Array.from(document.querySelectorAll(".button"));
// console.log(a);

const button = document.querySelector(".button");
const paragraph = document.querySelector(".advice__paragraph");
const advice = document.querySelector(".advice");
// const image = document.querySelector(".image");

console.dir(paragraph);
button.addEventListener("click", () => {
    const randomPhrase = getRandomPhrase(phrases);
    if (randomPhrase.length > 35)
        advice.style.fontSize = "40px";
    else
        advice.style.fontSize = "48px";
    paragraph.textContent = randomPhrase;
});

// document.addEventListener("dblclick", () => console.log("dblclick"));
// document.addEventListener("mouseenter" () => console.log("mouseenter"));
// document.addEventListener("mouseleave", () => console.log("mouseleave"));

