async function updateQuiz(req, res) {

  const url = '/quiz'; // get random quiz data
  const response = await fetch(url);
  const data = await response.json();

  let htmlString = "";    // init form
  htmlString += "<form method='post' id='form' class='mx-auto' style='width: 700px'>" + data['question'];
  htmlString += "<br><br><button type='submit' class='btn btn-warning'> Submit </button> <br><br>";

  // compile form with radio-buttons and answers
  for (index in data['answers']) {
    htmlString += "<div> <input type='radio' multiple id=" + data['id'] + ":" + index + " name ='answer' value=" + (index) + " checked>  " +
      "<label for='javascript'>" + data['answers'][index] + "  </label></div>";
  }

  htmlString += "<input type='hidden' class='positive' name='id-quiz' id='id-quiz' value= " + data['id'] + " >"
  htmlString += "<p><br><br></p></form>";


  document.getElementById('container').innerHTML = htmlString;

  form.addEventListener('submit', submitAnswer);
  return true;
};


async function submitAnswer(event) {
  event.preventDefault();
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm);
  const myanswer = formData.get('answer');
  const id_quiz = formData.get('id-quiz');
  const url = `/check/${id_quiz}/${myanswer}`;

  const isCorrect = await fetch(url, { method: 'POST' })
    .then(res => res.text())
  //.then(isCorrect => console.log(typeof isCorrect));
  //.then(isCorrect => console.log(isCorrect));

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