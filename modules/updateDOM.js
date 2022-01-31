async function updateQuiz(req, res) {

  myTest = await getRandomTest('/quiz')
  document.getElementById('container').innerHTML = '';

  if (document.getElementById('form')) {
    document.getElementById('form').remove();
  }

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

  for (answer_number in myTest) {

    spaced = document.createElement('br'); // single question + answers
    ul.appendChild(spaced);

    radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', question['id']);
    radio.setAttribute('value', answer_number);
    radio.setAttribute('required', 'required'); /////////////////

    label_radio = document.createElement('label');
    label_radio.textContent = question['answers'][answer_number];

    ul.appendChild(radio);
    ul.appendChild(label_radio);

  }
  document.body.appendChild(form);
  document.addEventListener('submit', submitAnswer);

};



async function submitAnswer(event) {
  let my_test = getFormData();
  console.log('MY FORM ', my_test);

  document.getElementById('form').remove();
  document.getElementById('container').innerHTML = 'correct answers : ' + numberCorrectAnswers;

  let numberCorrectAnswers = await getNumberCorrectAnswers('/checkbox/', my_test);
  let numberRespondAnswers = await my_test.length;
  document.getElementById('container').innerHTML += '<br>response number: ' + numberRespondAnswers;

};


