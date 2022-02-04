import { getScore, getRandomTest } from './getData.js';

export async function updateQuiz(req, res) {
  const myQuiz = await getRandomTest('/quiz');
  console.log('CLIENT reciving the following random quiz object from /quiz : ', myQuiz)

  if (document.getElementById('container')) {
    document.getElementById('container').remove();
  }

  let container = document.createElement("container");
  container.setAttribute('id', 'container');
  document.body.appendChild(container);


  if (document.getElementById('form')) {
    document.getElementById('form').remove();
  };

  let form = document.createElement("form");
  form.setAttribute('id', 'form');
  form.setAttribute('type', 'post');
  form.setAttribute('style', 'text-align:center;');
  document.body.appendChild(form);

  let submit_button = document.createElement('input');
  submit_button.setAttribute('id', 'submit_button');
  submit_button.setAttribute('type', 'submit');
  submit_button.setAttribute('name', 'submit_button');
  form.appendChild(submit_button);

  let ul = document.createElement('ul');
  form.appendChild(ul);

  for (let question_number = 0; question_number < myQuiz.length; question_number++) {  /// per i nel numero di domande
    let paragraph = document.createElement('p');
    paragraph.textContent = myQuiz[question_number]['question'];

    ul.appendChild(paragraph);

    for (let answer_number = 0; answer_number < myQuiz[question_number]['answers'].length; answer_number++) {
      let spaced = document.createElement('br');
      ul.appendChild(spaced);

      let radio = document.createElement('input');
      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', myQuiz[question_number]['id']); // OR myQuiz[question_number]['id']);
      radio.setAttribute('id', myQuiz[question_number]['id']); // OR ;
      radio.setAttribute('value', answer_number);
      radio.setAttribute('required', 'required');
      ul.appendChild(radio);

      let label_radio = document.createElement('label');
      label_radio.textContent = myQuiz[question_number]['answers'][answer_number];
      ul.appendChild(label_radio);

    };

    let hidden_label_id_quiz = document.createElement('label');
    hidden_label_id_quiz.setAttribute('hidden', 'hidden');
    hidden_label_id_quiz.setAttribute('id', 'id-quiz');
    hidden_label_id_quiz.setAttribute('name', 'id-quiz');
    hidden_label_id_quiz.setAttribute('value', myQuiz[question_number]['id']);
    hidden_label_id_quiz.textContent = myQuiz[question_number]['id'];
    console.log('CLIENT quiz id generated: ', myQuiz[question_number]['id'])
    ul.appendChild(hidden_label_id_quiz);

  };


  document.body.appendChild(form);
  form.addEventListener('submit', submitQuiz);
  console.log('CLIENT posting the answers ... ');
};


export async function submitQuiz(event) {
  event.preventDefault();

  let myQuiz = {};
  let form = document.getElementById('form');
  let formData = new FormData(form); //.entries();
  console.log('CLIENT form data object ',formData);

  for (let pair of formData.entries() ) {
    let id_quiz = pair[0];
    let number_answer = pair[1];
    console.log('CLIENT quiz id  ',id_quiz,' answer number: '+pair[1])
    myQuiz[id_quiz] = number_answer;
  
  };
  console.log('CLIENT quiz object before submitting: ', myQuiz);
  let result = await getScore('/checkbox/', myQuiz);
  document.getElementById('form').remove();
  document.getElementById('container').innerHTML = 'Quiz score : ' + result+"%";
};