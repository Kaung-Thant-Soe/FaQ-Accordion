"use strict";

const [...questionAll] = document.querySelectorAll(".question-accordion");
const [...answerAll] = document.querySelectorAll(".answer-accordion");
const [...arrowAll] = document.querySelectorAll(".arrow");

for (let i = 0; i < questionAll.length; i++) {
  questionAll[i].addEventListener("click", function () {
    for (let j = 0; j < answerAll.length; j++) {
      answerAll[j].classList.add("hidden");
      answerAll[i].classList.remove("hidden");
      questionAll[j].classList.remove("font-ques");
      questionAll[i].classList.add("font-ques");
      arrowAll[j].classList.remove("up-down");
      arrowAll[i].classList.add("up-down");
    }
  });
}
