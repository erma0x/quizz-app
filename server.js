
const express = require('express');
var fs = require('fs');
//const path = require('path');
//const request = require('request');
//const router = express.Router();

const port = 3000;
const app = express();

var questions = JSON.parse(fs.readFileSync('./quizzes.json', 'utf8'));

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get random quiz from quizzes.json
app.get("/quiz", function (req, res) {
    let randomKey = Math.floor(Math.random() * questions.length);
    let question = {
        'id': questions[randomKey]['id'],
        'answers': questions[randomKey]['answers'],
        'question': questions[randomKey]['question']
    }
    res.json(question);
    return true;
});

app.post('/check/:id/:answer', function (req, res) {
    let my_id = req.params.id
    let my_answer = req.params.answer
    let correct_answer = questions[my_id]['correct']

    //console.log(my_answer,correct_answer)

    if (correct_answer == my_answer) {
        res.json(true);
    }
    else {
        res.json(false)
    }
});

app.get("/home", function (req, res) {
    return res.sendFile(__dirname + '/index.html');
});

app.post('/home', (req, res) => {
    const question = req.body;
    //console.log(req.body);
    res.json(question.answers);
    return true;
});


app.listen(port, () => console.log('Server started at http://localhost:' + port));



