const question = document.querySelector(".question"),
  answers = document.querySelector(".answers"),
  spnQtd = document.querySelector(".spnQtd"),
  textFinish = document.querySelector(".finish span"),
  content = document.querySelector(".quiz-content"),
  contentFinish = document.querySelector(".finish"),
  btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentQuestion = 0;
let correctAnswers = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    correctAnswers++;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${correctAnswers} de ${questions.length} perguntas.`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function showQuestion() {
  spnQtd.innerHTML = `${currentQuestion + 1}/${questions.length}`;
  const item = questions[currentQuestion];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
         ${answer.option}
      </button>
      `;
    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

showQuestion(); 
