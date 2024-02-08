class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const questions = [new Question("Hej", true), new Question("Då", false)];

console.log(questions);
