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

const number_of_quizzes = 3;

let my_test = new Array();
let used_ids = new Array();

let randomKey = 0;
let question = {};


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
            //radio.setAttribute('checked','radio');
            label_radio = document.createElement('label');
            label_radio.textContent = question['answers'][answer_number];

            ul.appendChild(radio);
            ul.appendChild(label_radio);

        }
    }
    document.body.appendChild(form);
}

//console.log(randomKey)
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