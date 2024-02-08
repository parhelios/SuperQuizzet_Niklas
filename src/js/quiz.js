class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const questions = [];

async function getQuestions() {
  const triviaUrl =
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean";

  const response = await fetch(triviaUrl);
  const results = await response.json();

  if (results["response_code"] != 0) {
    return;
  }

  for (const fråga of results["results"]) {
    let correctAnswer = fråga["correct_answer"] === "True";

    const q = new Question(fråga["question"], correctAnswer);
    questions.push(q);
  }
  displayQuestions();
}

getQuestions();

const questionsList = document.querySelector("#questions");
const score = document.querySelector("#score");

let scoreCount = 0;

function displayQuestions() {
  for (const q of questions) {
    console.log(q);

    const li = document.createElement("li");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardFooter = document.createElement("div");
    const trueBtn = document.createElement("button");
    const falseBtn = document.createElement("button");

    applyStyles(li, card, cardBody, cardTitle, cardFooter, trueBtn, falseBtn);

    trueBtn.innerText = "True";
    trueBtn.onclick = () => {
      answerBtnClick(cardTitle, cardBody, trueBtn, falseBtn, q, true);
    };

    falseBtn.innerText = "False";
    falseBtn.onclick = () => {
      answerBtnClick(cardTitle, cardBody, trueBtn, falseBtn, q, false);
    };

    cardTitle.innerText = q.statement;

    cardBody.appendChild(cardTitle);
    cardFooter.appendChild(trueBtn);
    cardFooter.appendChild(falseBtn);

    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    li.appendChild(card);

    questionsList.appendChild(li);
  }
}

function answerBtnClick(
  cardTitle,
  cardBody,
  trueBtn,
  falseBtn,
  question,
  answer
) {
  if (question.correctAnswer === answer) {
    {
      console.log("Correct answer");
      scoreCount++;
      score.innerText = scoreCount;

      cardBody.classList.add("bg-success");
      cardTitle.classList.remove("text-info");
      cardTitle.classList.add("text-white");
    }
  } else {
    {
      console.log("Incorrect answer");
      cardBody.classList.add("bg-danger");
      cardTitle.classList.add("text-white");
      cardTitle.classList.remove("text-info");
    }
  }
  trueBtn.disabled = true;
  falseBtn.disabled = true;
}

function applyStyles(
  li,
  card,
  cardBody,
  cardTitle,
  cardFooter,
  trueBtn,
  falseBtn
) {
  li.classList.add("list-group-item", "bg-dark", "border-danger");
  card.classList.add("card", "bg-dark", "container");
  cardBody.classList.add("card-body", "row");
  cardFooter.classList.add(
    "card-footer",
    "row",
    "container",
    "justify-content-center"
  );
  cardTitle.classList.add("card-title", "text-info", "text-center");
  trueBtn.classList.add("btn", "btn-success", "mx-1", "col-2");
  falseBtn.classList.add("btn", "btn-danger", "mx-1", "col-2");
}
