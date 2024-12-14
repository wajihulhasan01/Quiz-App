const questions = [
    {
        questions: "What does HTML stand for?",
        answers: [
            { text: "Hot Typing Markup Language", correct: false },
            { text: "Home Typing Modern Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Testing Mixed Language", correct: false },
        ]
    },
    {
        questions: "Who invented HTML?",
        answers: [
            { text: "Tim Berners-Lee", correct: true },
            { text: "Brendan Eich", correct: false },
            { text: "Guido van Rossum", correct: false },
            { text: "None", correct: false },
        ]
    },
    {
        questions: "Who is making the Web standards?",
        answers: [
            { text: 'Mozila', correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "The World Wide Web Consortium", correct: false },
        ]
    },
    {
        questions: " What is HTML?",
        answers: [
            { text: "HTML describes the structure of a webpage", correct: true },
            { text: " HTML is the standard markup language mainly used to create web pages", correct: false },
            { text: "HTML consists of a set of elements that helps the browser how to view the content", correct: false },
            { text: "All of the mentioned", correct: false },
        ]
    },
    {
        questions: "Which of the following is used to read an HTML page and render it?",
        answers: [
            { text: " Web server", correct: true },
            { text: "Web network", correct: false },
            { text: "Web browser", correct: false },
            { text: "Web matrix", correct: false },
        ]
    },
    {
        questions: "Which of the following is not a difference between HTML and XHTML?",
        answers: [
            { text: "Charset in both html and xhtml is “text/html”", correct: true },
            { text: "Tags and attributes are case-insensitive in HTML but not in XHTML", correct: false },
            { text: "Gui Special characters must be escaped using character entities in XHTML unlike HTML", correct: false },
            { text: "Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”", correct: false },
        ]
    },
    {
        questions: "What is DOM in HTML?",
        answers: [
            { text: "Language dependent application programming", correct: true },
            { text: "Hierarchy of objects in ASP.NET", correct: false },
            { text: "Application programming interface", correct: false },
            { text: "Convention for representing and interacting with objects in html documentse", correct: false },
        ]
    },
    {
        questions: "In which part of the HTML metadata is contained?",
        answers: [
            { text: "head tag", correct: true },
            { text: " title tag", correct: false },
            { text: "html tag", correct: false },
            { text: "body tag", correct: false },
        ]
    },
    {
        questions: "Which of the following is not the element associated with the HTML table layout?",
        answers: [
            { text: "alignment", correct: true },
            { text: "color", correct: false },
            { text: "size", correct: false },
            { text: "body taspanningg", correct: false },
        ]
    },
    {
        questions: "Which element is used for or styling HTML5 layout?",
        answers: [
            { text: "CSS", correct: true },
            { text: "jQuery", correct: false },
            { text: "JavaScript", correct: false },
            { text: "PHP", correct: false },
        ]
    },
];

const quesElement = document.getElementById('ques');
const optionElement = document.getElementById('options');
const nextbtn = document.getElementById('nextbtn');

let currentQuesIndex = 0;
let score = 0;

function start() {
    currentQuesIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showques();
}

function showques() {
    reset();
    let currentques = questions[currentQuesIndex];
    let quesNo = currentQuesIndex + 1;
    quesElement.innerHTML = quesNo + ". " + currentques.questions;

    console.log("Current Question:", currentques); // Debug log

    currentques.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        optionElement.appendChild(button);

        button.addEventListener('click', () => {
            if (answer.correct) {
                score++;
            }
            nextbtn.style.display = "block";
        });
    });

    console.log("Answer Options Displayed:", currentques.answers);
}


function reset() {
    nextbtn.style.display = "none";
    while (optionElement.firstChild) {
        optionElement.removeChild(optionElement.firstChild);
    }
}

nextbtn.addEventListener('click', () => {
    currentQuesIndex++;
    if (currentQuesIndex < questions.length) {
        showques();
    } else {
        quesElement.innerHTML = `Quiz finished! Your score is ${score} out of ${questions.length}`;
        optionElement.innerHTML = '';
        nextbtn.style.display = "none"; 
    }
});

start();
