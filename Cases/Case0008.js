/*
Case0008 - Testing with atipical cases
*/

const QUESTIONS = [
    {
        question: "true + false",
        options: [
            "\"truefalse\"",
            "1",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 1,
        explanation: "Text",
        code: "bla"
    },
    {
        question: "[,,,].length",
        options: [
            "0",
            "3",
            "4",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "[1, 2, 3] + [4, 5, 6]",
        options: [
            "\"123456\"",
            "\"1,2,34,5,6\"",
            "\"1,2,3,4,5,6\"",
            "NaN"
        ],
        correctAnswer: 1
    },
    {
        question: "0.2 + 0.1 === 0.3",
        options: [
            "true",
            "false",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "10,2",
        options: [
            "10.2",
            "10",
            "2",
            "20"
        ],
        correctAnswer: 2
    },
    {
        question: "!!\"\"",
        options: [
            "true",
            "false",
            "undefined",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "+!![]",
        options: [
            "true",
            "false",
            "0",
            "1"
        ],
        correctAnswer: 3
    },
    {
        question: "!!!true",
        options: [
            "true",
            "false",
            "0",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "true == \"true\"",
        options: [
            "true",
            "false",
            "undefined",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "010 - 03",
        options: [
            "7",
            "5",
            "3",
            "NaN"
        ],
        correctAnswer: 1
    },
    {
        question: "\"\" - - \"\"",
        options: [
            "\"\"",
            "0",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "null + 0",
        options: [
            "0",
            "\"null0\"",
            "NaN",
            "TypeError"
        ],
        correctAnswer: 0
    },
    {
        question: "0/0",
        options: [
            "0",
            "Infinity",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 2
    },
    {
        question: "1/0 > Math.pow(10, 1000)",
        options: [
            "true",
            "false",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "true++",
        options: [
            "2",
            "undefined",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 3
    },
    {
        question: "\"\" - 1",
        options: [
            "\"1\"",
            "\"-1\"",
            "-1",
            "NaN"
        ],
        correctAnswer: 2
    },
    {
        question: "(null - 0) + \"0\"",
        options: [
            "\"null0\"",
            "\"00\"",
            "0",
            "NaN"
        ],
        correctAnswer: 1
    },
    {
        question: "true + (\"true\" - 0)",
        options: [
            "1",
            "2",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 2
    },
    {
        question: "!5 + !5",
        options: [
            "0",
            "10",
            "25",
            "NaN"
        ],
        correctAnswer: 0
    },
    {
        question: "[] + []",
        options: [
            "[]",
            "[,]",
            "\"\"",
            "NaN"
        ],
        correctAnswer: 2
    },
    {
        question: "NaN === NaN",
        options: [
            "true",
            "false",
            "TypeError",
            "SyntaxError"
        ],
        correctAnswer: 1
    },
    {
        question: "NaN++",
        options: [
            "NaN",
            "undefined",
            "TypeError",
            "SyntaxError"
        ],
        correctAnswer: 0
    },
    {
        question: "undefined + false",
        options: [
            "\"undefinedfalse\"",
            "0",
            "NaN",
            "SyntaxError"
        ],
        correctAnswer: 2
    },
    {
        question: "+0 === -0",
        options: [
            "true",
            "false",
            "TypeError",
            "SyntaxError"
        ],
        correctAnswer: 0
    },
    {
        question: "- \"\" + + \"1\" * null - [,]",
        options: [
            "0",
            "\"0\"",
            "NaN",
            "I give up"
        ],
        correctAnswer: 0
    },
];


function QuestionJs(){
    let numQuestion = parseInt(Math.random() * (26 - 0));
    let quest = QUESTIONS[numQuestion].question;
    let options = QUESTIONS[numQuestion].options.map(opt => opt);
    let answ = QUESTIONS[numQuestion].correctAnswer;
    return ('ID: '+numQuestion+
            '\nQuestion: '+quest+
            '\nOptions: '+options+
            '\nAnswer: '+answ
    );
}

console.log(QuestionJs());