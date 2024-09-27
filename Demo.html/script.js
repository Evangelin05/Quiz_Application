const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlinks Tool Markup Language",
    correct: "a",
  },
  {
    question:
      " Which of the following HTML elements is used to create a hyperlink?",

    a: "<img>",
    b: "<a>",
    c: "<link>",
    d: "<nav>",
    correct: "b",
  },
  {
    question:
      "Which attribute is used to specify the location of an image in HTML? ",

    a: "href",
    b: "src",
    c: "alt",
    d: "link",
    correct: "b",
  },

  {
    question: "Which tag is used for the largest heading in HTML?",

    a: "<h3>",
    b: "<heading>",
    c: "<h2>",
    d: "<h1>",
    correct: "d",
  },
  {
    question: " Which HTML tag is used to display a picture?",

    a: "<image>",
    b: "<pic>",
    c: "<img>",
    d: "<figure>",
    correct: "c",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",

    a: "<break>",
    b: "<lb>",
    c: "<br>",
    d: "<line>",
    correct: "c",
  },
  {
    question: "Which CSS property controls the text size?",

    a: "font-style",
    b: "text-size",
    c: "font-size",
    d: "text-style",
    correct: "c",
  },
  {
    question: "How can you apply a class to an element in CSS?",

    a: ".class-name { }",
    b: "#class-name { }",
    c: "*class-name { }",
    d: "/class-name { }",
    correct: "a",
  },
  {
    question: "Which CSS property is used to change the background color?",

    a: "bgcolor",
    b: "background-color",
    c: "color-background",
    d: "color-bg",
    correct: "b",
  },
  {
    question: "How do you make text bold in CSS?",

    a: "font-weight: bold;",
    b: "text-weight: bold;",
    c: "font-style: bold;",
    d: "text-bold: true;",
    correct: "a",
  },
  {
    question: "Which HTML attribute is used to define inline CSS styles?",

    a: "class",
    b: "style",
    c: "styles",
    d: "font",
    correct: "b",
  },
  {
    question: "What is the default value of the position property in CSS?",

    a: "relative",
    b: "absolute",
    c: "fixed",
    d: "static",
    correct: "d",
  },
  {
    question: " Which CSS property is used to make text italic?",

    a: "font-style",
    b: "text-style",
    c: "font-italic",
    d: "text-decoration",
    correct: "a",
  },
  {
    question: "How do you create a comment in CSS?",

    a: "// this is a comment",
    b: "<!-- this is a comment -->",
    c: "/* this is a comment */",
    d: "# this is a comment",
    correct: "c",
  },
  {
    question: " What does the z-index property do in CSS?",

    a: "Specifies the order of elements along the Z-axis",
    b: "Changes the background color",
    c: " Adjusts the zoom level of elements",
    d: "Defines the height of an element",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to define a table row?",

    a: "<tr>",
    b: "<thead>",
    c: "<td>",
    d: "<th>",
    correct: "a",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",

    a: "font-color",
    b: "color",
    c: "text-color",
    d: "background-color",
    correct: "b",
  },
  {
    question:
      "Which of the following is used to select an element with a specific ID in CSS?",

    a: "#",
    b: ".",
    c: "*",
    d: "!",
    correct: "a",
  },
  {
    question: "What is the purpose of the <head> element in HTML?",

    a: "To store all visible content",
    b: " To store metadata and links to CSS/JS",
    c: " To define the main section of the page",
    d: " To create navigation elements",
    correct: "a",
  },

  {
    question:
      "How do you add space between the content and the border of an element?",
    a: "margin",
    b: "padding",
    c: "border-spacing",
    d: "spacing",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const reloadBtn = document.getElementById("reload");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.style.display = "none";
      scoreContainer.style.display = "block";
      scoreEl.innerText = `${score}/${quizData.length}`;
    }
  }
});

reloadBtn.addEventListener("click", () => {
  location.reload();
});
