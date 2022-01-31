// get random quiz
async function updateQuiz(req, res) {
  const url = '/quiz';
  let questions = await fetch(url).then(res => res.json());
  return questions
}

/////////////////////////////////////////////////////////////////

while (quizNumber > my_test.length) {            //////////////// ELIMINA QUIZ NUMBER

  randomKey = Math.floor(Math.random() * questions.length);
  if (!(used_ids.includes(randomKey))) {
    question = {
      'id': questions[randomKey]['id'],
      'answers': questions[randomKey]['answers'],
      'question': questions[randomKey]['question']
    }
    my_test.push(question);
    used_ids.push(randomKey);

/////////////////////////////////////////////////////////////////

async function updateQuiz(req, res) {
  let quizNumber = 2;

  document.getElementById('container').innerHTML = '';

  if (document.getElementById('form')) {
    document.getElementById('form').remove();
  }

  let my_test = new Array();
  let used_ids = new Array();

  let randomKey = 0;
  let question = {};

  let form = document.createElement("form");
  document.body.appendChild(form);
  form.setAttribute('id', 'form');
  form.setAttribute('type', 'post');
  form.setAttribute('style', 'text-align:center;');

  let container = document.createElement("container");
  document.body.appendChild(container);

  ul = document.createElement('ul'); // single quiz question paragraph
  form.appendChild(ul);

  paragraph = document.createElement('p'); // single quiz question paragraph
  paragraph.textContent = question['question'];
  ul.appendChild(paragraph);

  for (answer_number in question['answers']) {

    spaced = document.createElement('br'); // single quiz question paragraph
    ul.appendChild(spaced);

    radio = document.createElement('input'); //unordered list containig the answers
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', question['id']);
    radio.setAttribute('value', answer_number);
    radio.setAttribute('required', 'required');
    
    //radio.required = true; /// REQUIRED ALL ANSWERS
    //document.getElementById("input").required = true; 

    label_radio = document.createElement('label');
    label_radio.textContent = question['answers'][answer_number];

    ul.appendChild(radio);
    ul.appendChild(label_radio);

  }
document.body.appendChild(form);
document.addEventListener('submit', submitAnswer);
//if (
  document.getElementById("IDs").checked
  ; ///////////
};





async function getNumberCorrectAnswers(myTestJSON) {

  let url_check = '/checkbox/';
  console.log(`CLIENT sending to ${url_check} the following quiz object: `, myTestJSON)

  let response_numberCorrectAnswers = await fetch(url_check, {
    method: "POST",
    body: JSON.stringify(myTestJSON), headers: { "content-type": 'application/json' }
  })

  let numberCorrectAnswers = await response.json();
  return numberCorrectAnswers;
};

async function submitAnswer(event) {

  // let my_test = await getFormData() //.then(res => res.json());
  // let numberCorrectAnswers = await response_my_test.json();
  // let response_numberCorrectAnswers = await getNumberCorrectAnswers(my_test);
  // let numberCorrectAnswers = await response_numberCorrectAnswers.json

  let my_test = getFormData();
  console.log('MY FORM ', my_test);

  let numberCorrectAnswers = await getNumberCorrectAnswers(my_test);


  //let my_test = JSON.stringify(my_test);
  console.log('CLIENT number correct answer type', typeof (numberCorrectAnswers));
  //.then(data => console.log('getting data from server ', data));
  console.log('CLIENT recived number correct answers  ' + numberCorrectAnswers)
  //console.log('CLIENT number correct answers  '+ numberCorrectAnswers+ +'  type '+typeof(numberCorrectAnswers));

  document.getElementById('form').remove();
  document.getElementById('container').innerHTML = 'correct answers : ' + numberCorrectAnswers;

  let numberRespondAnswers = await my_test.length;

  document.getElementById('container').innerHTML += '<br>response number: ' + numberRespondAnswers;

  //event.preventDefault();
};