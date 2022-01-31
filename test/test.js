let my_test = await getFormData() //.then(res => res.json());
let numberCorrectAnswers = await response_my_test.json();
let response_numberCorrectAnswers = await getNumberCorrectAnswers(my_test);
let numberCorrectAnswers = await response_numberCorrectAnswers.json


event.preventDefault();

///////////////////////////////////////////////////////////////

let my_test = new Array();
let used_ids = new Array();

let randomKey = 0;

for (let i = 0; i < questions.length; i++ ) {

  randomKey = Math.floor(Math.random() * questions.length);
  if (!(used_ids.includes(randomKey))) {
    question = {
      'id': questions[randomKey]['id'],
      'answers': questions[randomKey]['answers'],
      'question': questions[randomKey]['question']
    }
    my_test.push(question);
    used_ids.push(randomKey);

///////////////////////////////////////////////////////////////