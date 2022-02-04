import { updateQuiz, submitQuiz } from './updateDOM.js';

console.log('CLIENT main.js updateButton')
const updateButton = document.querySelector("button[name='update']");
updateButton.addEventListener('click', updateQuiz);

console.log('CLIENT main.js submitButton')
const submitButton = document.querySelector("button[name='submit']");
submitButton.addEventListener('click', submitQuiz);