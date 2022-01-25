let questions = [
    {
        "id": 0,
        "question": "Quanti pianeti ci sono nel sistema solare?",
        "answers": ["7", "8", "9", "10"],
        "correct": 2
    },
    {
        "id": 1,
        "question": "Quanti denti ha un essere umano adulto?",
        "answers": ["28", "30", "32", "34"],
        "correct": 2

    }
    ,
    {
        "id": 2,
        "question": "Quale e' il nome di un famoso esploratore?",
        "answers": ["Vespucci", "Machiavelli", "Da Vinci", "Galileo"],
        "correct": 0

    }
    ,
    {
        "id": 3,
        "question": "Quando e' caduta Roma in mano ai Barbari?",
        "answers": ["214dC", "612dC", "22aC", "492dC"],
        "correct": 3

    }
    ,
    {
        "id": 4,
        "question": "Quale fra questi e' uno strumento per programmare?",
        "answers": ["VPN", "Word", "PowerPoint", "HTML"],
        "correct": 3

    }
    ,
    {
        "id": 5,
        "question": "Quanti erano i re di Roma?",
        "answers": ["7", "5", "13", "3"],
        "correct": 0
    }]


/// CREATE A FORM 

let my_test = new Array(); // my test with number_of_quizzes
let used_ids = new Array(); // check for duplicates
number_of_quizzes = 3;
let randomKey = 0;
let question = {};
//let htmlString = "<html><head></head><body>"; //ul>li> domanda{p, n_radiobutton}

let form = document.createElement("form");
document.body.appendChild(form);
form.setAttribute('id', 'form');
form.setAttribute('type', 'post');

while (number_of_quizzes > my_test.length) {

    randomKey = Math.floor(Math.random() * questions.length);

    if (!(used_ids.includes(randomKey))) {
        question = {
            'id': questions[randomKey]['id'],
            'answers': questions[randomKey]['answers'],
            'question': questions[randomKey]['question']
        }

        my_test.push(question);
        used_ids.push(randomKey);
        console.log(question['question']);

//////////
        ul = document.createElement('ul'); // single quiz question paragraph
        form.appendChild(ul);
  
        paragraph = document.createElement('p'); // single quiz question paragraph
        paragraph.textContent = question['question'] ;
        ul.appendChild(paragraph);

//////////

        //htmlString += '<li>' + question['question'] +"<br>"
        for (answer_number in question['answers']) {

            console.log(question['answers'][answer_number]);

            spaced = document.createElement('br'); // single quiz question paragraph
            ul.appendChild(spaced);
    
            //li = document.createElement('li'); //unordered list containig the answers
            //ul.appendChild(li);
    
            radio = document.createElement('input'); //unordered list containig the answers
            radio.setAttribute('type','radio');
            //radio.setAttribute('type','radio');

            //label radio button
            label_radio = document.createElement('label');
            label_radio.textContent = question['answers'][answer_number];

            ul.appendChild(radio);
            ul.appendChild(label_radio);

            //htmlString += "<input type='radio'>"
            //htmlString += "<label>"+ question['answers'][answer_number]+"</label>" +"<br>"

        }
    }
    document.body.appendChild(form);
    //htmlString += '</body>'
}


//console.log(randomKey)

// for (n in ) {

//     quizQuestion = document.createElement('li'); // single quiz question paragraph
//     form.appendChild(quizQuestion);

//     ratio_buttons = document.createElement('input'); // radio buttons answer
//     form.appendChild(ratio_buttons);

//     console.log(data[i]);
//     ratio_buttons.setAttribute('type', 'radio');
//     ratio_buttons.setAttribute('name', 'answer');
//     ratio_buttons.setAttribute('value', quizAnswers[n]);
//     ratio_buttons.setAttribute('id', quizAnswers[n]);

//     answerText = document.createElement('p');
//     form.appendChild(answerText);
//     ratio_buttons.setAttribute('id', quizAnswers[i]['id']);
//     ratio_buttons.setAttribute('value', quizAnswers[i]['answers'][i]);

// }

//}


//console.log(htmlString)
//console.log(my_test)
//console.log(used_ids);
//console.log(my_test[0])






// EXPRESS
// const express = require('express');
// const path = require('path')
// const app = express();
// const port = 3000;

// app.get('/', function (req, res) {
//     res.send(htmlString);

// })


// app.listen(port, () => {
//     console.log(`🟢 Server Test live at  http://localhost:${port}`)
// })