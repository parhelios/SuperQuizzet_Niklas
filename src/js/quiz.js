class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const json = `{
  "response_code": 0,
  "results": [
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "In &quot;Sonic Adventure&quot;, you are able to transform into Super Sonic at will after completing the main story.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Television",
      "question": "&quot;The Simpsons&quot; family is named after creator Matt Groening&#039;s real family.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "The PlayStation was originally a joint project between Sega and Sony that was a Sega Genesis with a disc drive.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "The color orange is named after the fruit.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Geography",
      "question": "Ottawa is the capital of Canada.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "The movie &quot;The Nightmare before Christmas&quot; was all done with physical objects.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "On average, at least 1 person is killed by a drunk driver in the United States every hour.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "Each piece in Tetris is called a tetris.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "Big the Cat is a playable character in &quot;Sonic Generations&quot;.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Gadgets",
      "question": "Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    }
  ]
}
`;

const response = JSON.parse(json);

const q2 = response["results"];

const questions = [new Question("Hej", true), new Question("Då", false)];

for (const fråga of q2) {
  let correctAnswer = fråga["currect_answer"] === "True";

  const question = new Question(fråga["question"], correctAnswer);
  questions.push(question);
}

const questionsList = document.querySelector("#questions");
const score = document.querySelector("#score");

let scoreCount = 0;

console.log(questionsList);

displayQuestions();

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
