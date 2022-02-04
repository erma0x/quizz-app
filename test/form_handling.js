
// let id_quiz = document.getElementById('id-quiz'); // this get only one element
// console.log(id_quiz,formData.get(id_quiz));

/*
per fare il submit devo avere l'oggetto myQuiz {id_quiz:number_answer}
per avere quell'oggetto devo fare il parsing di form data
per fare il parsing di form data, ma form data contiene solo {numero_domanda:number_answer}
numero_domanda e' diverso da id_quiz, per recuperarlo ho aggiunto un label nascosto ad ogni quiz
con l'id del quiz.
quello che mi serve e' ricorstuire l' oggetto {id_quiz:number_answer} dal label nascosto e dai dati del form


A) tasto hidden label nel form che contiene il id-quiz => non riesco a looppare
                                        // come faccio il loop del form per estrarre tutte le id

B) formData.append() direttamente sotto addEventListener()?

C) scrivere un file del form composto e leggerlo dentro submitQuiz 



*/


///////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  let fd = new FormData();
  fd.append('name', 'Bubba');
  fd.append('id', 1234);
  fd.append('created_dt', Date.now());
  console.log(Array.from(fd));
  for (let obj of fd) {
      console.log(obj)
  }
document.querySelector('#output pre').textContent = JSON.stringify(Array.from(fd), '\t', 2);
let url = 'http://www.example.com/';
let req = new Request({
    url: url,
    body: fd
})
fetch(req)
.then(response => response.json() )
.then( data => {})
.catch( err => {})

///////////////////////////////////////////////////////////////
var data = new FormData();
data.append("id-quiz", document.getElementById("id-quiz").value);
data.append("answer", document.getElementById("answer").value);
console.log(formData.get('id'))
console.log(formData.get('id-quiz'))
console.log(formData.get('answer'))
console.log('my data ',data)
let myQuiz = {};
});

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
let id_quizzes = formData.getElementById('id-quiz');
console.log('CLIENT parsing following IDs : ',id_quizzes);
let myQuiz = {};
let response = formData.forEach( function(key){
  let answer_number = formData.get('answer');
  let id_quiz = formData.get('id-quiz') ;
  //myQuiz[id_quiz]=answer_number;
  console.log('CLIENT parsing following FormData : ID quiz ',id_quizzes,' answer number',answer_number);
});
console.log(response);
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
let newElement = await response.json();
elements.push(newElement);
console.log('CLIENT catching new elements ', elements)// IDNumber
let answrerNumber = formData.get(key);      
let IDNumber = myQuiz[question_number]['id'];
console.log('FORM DATA DEBUG ', answrerNumber);
///////////////////////////////////////////////////////////////


htmlString+='<p>'+'correct answer:  '++'</p>';
htmlString+='<p>'+'your answer:  '+formData.get('correct-answer')


///////////////////////////////////////////////////////////////
let form = document.getElementById('form');
const data = new FormData(form);
const value = Object.fromEntries(data.entries());
console.log({ value });
console.log('*******************************')
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
let formData = new FormData(form);
let object = {};
formData.forEach(function(value, key){
    let answrerNumber = formData.get(key);
    let IDNumber = formData.values();
    console.log('FORM DATA DEBUG ',IDNumber,answrerNumber);
    //object[key] = ;
});
console.log('CLIENT reciving the following form data: ',formData.getAll('id'));
let json = JSON.stringify(object);
console.log('CLIENT parsing form data into the following json: ',json);
let my_quiz = {};
console.log('CLIENT submitting the following quiz object: ', json);
for (let number_question in myQuiz){
  let id_question = myQuiz[number_question]['id']
  let answer_id = 0 ;
  my_quiz[id_question] = answer_id;
}

///////////////////////////////////////////////////////////////
let numberRespondAnswers = myQuiz.length;
document.getElementById('container').innerHTML += '<br>response number: ' + numberRespondAnswers;
