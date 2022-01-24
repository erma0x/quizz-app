//const express = require("express");

async function updateQuiz(req, res) {
  const url = '/quiz'; // get random quiz data
  let data = await fetch(url)
    .then(res => res.json());

  let numberOfQuizzes = 3;

  let form = document.createElement("form");
  document.body.appendChild(form);
  form.setAttribute('id', 'form');
  form.setAttribute('type', 'post');

  /* ul>li> domanda{p, n_radiobutton} con ognuno una lable con la risposta
      lablel = testo risposta 

    innerHtml con append child
    creare l'elemento
    mettere il contenuto 
    appenderlo  */

  for (var i = 0; i < data.length; i++) {

    quizQuestion = document.createElement('p'); // single quiz question paragraph
    form.appendChild(quizQuestion);

    //data[i]['question'];
    quizAnswers = data[i]['answers'];

    unorderedHTMLlist = document.createElement('ul'); //unordered list containig the answers
    form.appendChild(unorderedHTMLlist);



    for (n in quizAnswers.length) {
      quizQuestion = document.createElement('li'); // single quiz question paragraph
      form.appendChild(quizQuestion);

      ratio_buttons = document.createElement('input'); // radio buttons answer
      form.appendChild(ratio_buttons);

      console.log(data[i]);
      ratio_buttons.setAttribute('type', 'radio');
      ratio_buttons.setAttribute('name', 'answer');
      ratio_buttons.setAttribute('value', quizAnswers[n]);
      ratio_buttons.setAttribute('id', quizAnswers[n]);

      answerText = document.createElement('p');
      form.appendChild(answerText);
      ratio_buttons.setAttribute('id', quizAnswers[i]['id']);
      ratio_buttons.setAttribute('value', quizAnswers[i]['answers'][i]); 
    }
  }
  form.addEventListener('submit', submitAnswer);
  
  document.getElementById('container').innerHTML = form;

};


async function submitAnswer(event) {
  event.preventDefault();
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm);
  const myanswer = formData.get('answer');
  const id_quiz = formData.get('id-quiz');
  const url = `/check/${id_quiz}/${myanswer}`;

  const isCorrect = await fetch(url, { method: 'POST' })
    .then(res => res.text())//.then(isCorrect => console.log(typeof isCorrect));
  var htmlString = "";
  if (isCorrect == "true") {
    document.getElementById('container').innerHTML = htmlString + 'CORRECT ANSWER';
    return true;

  }
  else {
    document.getElementById('container').innerHTML = htmlString + 'WRONG ANSWER';
    return true;
  }

};

