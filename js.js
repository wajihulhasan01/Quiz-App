const questionsJS = [
    {
        questions: "What does JS stand for?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "Java Syntax", correct: false },
            { text: "Jacket Script", correct: false },
            { text: "Just Script", correct: false },
        ]
    },
    {
        questions: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Oracle", correct: false },
            { text: "Sun Microsystems", correct: false },
        ]
    },
    {
        questions: "What is the correct syntax to output 'Hello World' in JavaScript?",
        answers: [
            { text: "console.log('Hello World');", correct: true },
            { text: "print('Hello World');", correct: false },
            { text: "echo 'Hello World';", correct: false },
            { text: "write('Hello World');", correct: false },
        ]
    },
    {
        questions: "Which of the following is a JavaScript data type?",
        answers: [
            { text: "String", correct: true },
            { text: "Character", correct: false },
            { text: "Float", correct: false },
            { text: "Double", correct: false },
        ]
    },
    {
        questions: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "#", correct: false },
            { text: "/*", correct: false },
            { text: "!--", correct: false },
        ]
    },
    {
        questions: "What does the 'typeof' operator do in JavaScript?",
        answers: [
            { text: "Returns the type of a variable", correct: true },
            { text: "Checks if a variable is defined", correct: false },
            { text: "Converts a variable to a string", correct: false },
            { text: "Declares a new variable", correct: false },
        ]
    },
    {
        questions: "Which method is used to parse a string into an integer in JavaScript?",
        answers: [
            { text: "parseInt()", correct: true },
            { text: "toInteger()", correct: false },
            { text: "convertToInt()", correct: false },
            { text: "integer()", correct: false },
        ]
    },
    {
        questions: "What is the output of 0.1 + 0.2 === 0.3 in JavaScript?",
        answers: [
            { text: "false", correct: true },
            { text: "true", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        questions: "Which method can be used to remove the last element from an array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "splice()", correct: false },
            { text: "delete()", correct: false },
        ]
    },
    {
        questions: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "Refers to the current object", correct: true },
            { text: "Refers to the global object", correct: false },
            { text: "Refers to the previous object", correct: false },
            { text: "Refers to the function itself", correct: false },
        ]
    }
];

const quesElementJS = document.getElementById('ques');
const optionElementJS = document.getElementById('options');
const nextbtnJS = document.getElementById('nextbtn');

let currentQuesIndexJS = 0;
let scoreJS = 0;

function startJS() {
    currentQuesIndexJS = 0;
    scoreJS = 0;
    nextbtnJS.innerHTML = "Next";
    showquesJS();
}

function showquesJS() {
    resetJS();
    let currentques = questionsJS[currentQuesIndexJS];
    let quesNo = currentQuesIndexJS + 1;
    quesElementJS.innerHTML = quesNo + ". " + currentques.questions;

    currentques.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        optionElementJS.appendChild(button);

        button.addEventListener('click', () => {
            if (answer.correct) {
                scoreJS++;
            }
            nextbtnJS.style.display = "block";
        });
    });
}

function resetJS() {
    nextbtnJS.style.display = "none";
    while (optionElementJS.firstChild) {
        optionElementJS.removeChild(optionElementJS.firstChild);
    }
}

nextbtnJS.addEventListener('click', () => {
    currentQuesIndexJS++;
    if (currentQuesIndexJS < questionsJS.length) {
        showquesJS();
    } else {
        quesElementJS.innerHTML = `Quiz finished! Your score is ${scoreJS} out of ${questionsJS.length}`;
        optionElementJS.innerHTML = '';
        nextbtnJS.style.display = "none"; 
    }
});

startJS();
