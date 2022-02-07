      /* 
      "<input type='radio'wd multiple id=" + data[i]['id'] + ":" + index + " name ='answer' value=" + (index) + " checked> 
      htmlString += "<input type='radio'wd multiple id=" + data[i]['id'] + ":" + index + " name ='answer' value=" + (index) + " checked>  " +
      "<label for='javascript'>" + data[i]['answers'][index] + "</label>";
      "<label for='javascript'>" + data[i]['answers'][index] + "</label>";

      htmlString += "<input type='hidden' class='positive' name='id-quiz' id='id-quiz' value= " + data['id'] + " >"
      htmlString += "<input type='radio'wd multiple id=" + data[i]['id'] + ":" + index + " name ='answer' value=" + (index) + " checked>  " +
      htmlString += "<input type='hidden' class='positive' name='id-quiz' id='id-quiz' value= " + data['id'] + " >"
      */
      
      
let my_id_quiz = document.createElement("input");
form.appendChild(my_id_quiz)
my_id_quiz.setAttribute('name', 'id-quiz')
my_id_quiz.setAttribute('value', data[i]['id'])


document.getElementById('form').innerHTML = htmlString;




let button = document.createElement("form");
form.appendChild(button);
button.setAttribute('type', 'submit');

//for (let step=0; step<numberOfQuizzes; step++){



// form.setAttribute({ m })
// form.classList
// form.style
//document.body.appendChild(form);


//button.setAttribute('class','btn btn-warning') // classList da usare e non setAttribute

//htmlString += "<form method='post' id='form' class='mx-auto' style='width: 700px'>";
//htmlString += "<button type='submit' class='btn btn-warning'> Submit </button>"





//////

// compile form with radio-buttons and answers
for (index in data[i]['answers']) {


form.appendChild(my_input)
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')


let my_label = document.createElement("label");
form.appendChild(my_label)
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
my_label.setAttribute('name', 'id-quiz')
}

/*
htmlString += "<input type='radio'wd multiple id=" + data[i]['id'] + ":" + index + " name ='answer' value=" + (index) + " checked>  " +
  "<label for='javascript'>" + data[i]['answers'][index] + "</label>";

htmlString += "<input type='hidden' class='positive' name='id-quiz' id='id-quiz' value= " + data['id'] + " >"
*/
