const questionsCSS = [
    {
        questions: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
        ]
    },
    {
        questions: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "style", correct: true },
            { text: "font", correct: false },
            { text: "class", correct: false },
            { text: "styles", correct: false },
        ]
    },
    {
        questions: "Which property is used to change the background color in CSS?",
        answers: [
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "background", correct: false },
        ]
    },
    {
        questions: "What is the correct CSS syntax to change the font size of an element?",
        answers: [
            { text: "font-size: 12px;", correct: true },
            { text: "text-size: 12px;", correct: false },
            { text: "font: 12px;", correct: false },
            { text: "size: 12px;", correct: false },
        ]
    },
    {
        questions: "Which CSS property controls the text size?",
        answers: [
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
            { text: "size", correct: false },
        ]
    },
    {
        questions: "How do you select an element with id 'header' in CSS?",
        answers: [
            { text: "#header", correct: true },
            { text: ".header", correct: false },
            { text: "header", correct: false },
            { text: "*header", correct: false },
        ]
    },
    {
        questions: "Which property is used to set the space between the content and the border of an element?",
        answers: [
            { text: "margin", correct: false },
            { text: "padding", correct: true },
            { text: "border-spacing", correct: false },
            { text: "space", correct: false },
        ]
    },
    {
        questions: "What does the 'float' property do in CSS?",
        answers: [
            { text: "Aligns elements side by side", correct: true },
            { text: "Changes the position of an element", correct: false },
            { text: "Adds space around elements", correct: false },
            { text: "Hides an element", correct: false },
        ]
    },
    {
        questions: "Which CSS property is used to change the text color?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "background-color", correct: false },
        ]
    },
    {
        questions: "What does the z-index property do?",
        answers: [
            { text: "Sets the stacking order of elements", correct: true },
            { text: "Sets the font size of an element", correct: false },
            { text: "Sets the width of an element", correct: false },
            { text: "Sets the margin of an element", correct: false },
        ]
    }
];

const quesElementCSS = document.getElementById('ques');
const optionElementCSS = document.getElementById('options');
const nextbtnCSS = document.getElementById('nextbtn');

let currentQuesIndexCSS = 0;
let scoreCSS = 0;

function startCSS() {
    currentQuesIndexCSS = 0;
    scoreCSS = 0;
    nextbtnCSS.innerHTML = "Next";
    showquesCSS();
}

function showquesCSS() {
    resetCSS();
    let currentques = questionsCSS[currentQuesIndexCSS];
    let quesNo = currentQuesIndexCSS + 1;
    quesElementCSS.innerHTML = quesNo + ". " + currentques.questions;

    currentques.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        optionElementCSS.appendChild(button);

        button.addEventListener('click', () => {
            if (answer.correct) {
                scoreCSS++;
            }
            nextbtnCSS.style.display = "block";
        });
    });
}

function resetCSS() {
    nextbtnCSS.style.display = "none";
    while (optionElementCSS.firstChild) {
        optionElementCSS.removeChild(optionElementCSS.firstChild);
    }
}

nextbtnCSS.addEventListener('click', () => {
    currentQuesIndexCSS++;
    if (currentQuesIndexCSS < questionsCSS.length) {
        showquesCSS();
    } else {
        quesElementCSS.innerHTML = `Quiz finished! Your score is ${scoreCSS} out of ${questionsCSS.length}`;
        optionElementCSS.innerHTML = '';
        nextbtnCSS.style.display = "none"; 
    }
});

startCSS();
