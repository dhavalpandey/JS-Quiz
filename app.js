var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next');
var questionContainerElement = document.getElementById('question-container')
var answerBtn = document.getElementById('answerReveal')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  answerBtn.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'What is the capital of Spain?',
    answers: [
      { text: 'Barcelona', correct: false },
      { text: 'Seville', correct: false },
      { text: 'Madrid', correct: true },
      { text: 'Valencia', correct: false }
    ]
  },
  {
    question: 'What is the largest country in the world?',
    answers: [
      { text: 'Russia', correct: true },
      { text: 'USA', correct: false },
      { text: 'India', correct: false },
      { text: 'China', correct: false }
    ]
  },
  {
    question: 'What planet is closest to the sun?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mercury', correct: true },
      { text: 'Pluto', correct: false },
      { text: 'Earth', correct: false }
    ]
  },
  {
    question: 'Who was the yongest footballer to score in the World Cup Final?',
    answers: [
      { text: 'Maradona', correct: false },
      { text: 'Pele', correct: false },
      { text: 'Ronaldo', correct: false },
      { text: 'Mbappe', correct: true }
    ]
  },
  {
    question: 'Which country is most populated?',
    answers: [
      { text: 'China', correct: true },
      { text: 'India', correct: false },
      { text: 'Brazil', correct: false },
      { text: 'USA', correct: false }
    ]
  }
]
