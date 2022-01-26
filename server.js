
const express = require('express');
var fs = require('fs');
const port = 3000;
const app = express();

// load quiz dataset
var questions = JSON.parse(fs.readFileSync('./quizzes.json', 'utf8'));

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get random questions from quizzes.json
app.get("/quiz", function (req, res) {
    let my_test = new Array(); // my test with number_of_quizzes
    let used_ids = new Array(); // check for duplicates
    number_of_quizzes = 3;
    let randomKey = 0;
    let question = {};

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
        }
    }

    res.json(my_test);
    return true;
});

// OLD
// app.post('/check/:id/:answer', function (req, res) {
//     let my_id = req.params.id
//     let my_answer = req.params.answer
//     let correct_answer = questions[my_id]['correct']
//     //console.log(my_answer,correct_answer)
//     if (correct_answer == my_answer) {
//         res.json(true);
//     }
//     else {
//         res.json(false)
//     }
// });


// INPUT /check/request.json
// OUTPUT return % correct ?
app.get('/checkbox', function (req, res) {
    console.log('answer status code: ' + req.statusCode);
    console.log('answer elements: ' + req.body);

    let myTest = req.body;
    let correctAnswers = 0;

    for (let j = 0; j < myTest.length; j++) {
        let id_quiz = i;
        let index_answer = myTest[i];
        if (questions[id_quiz]['correct'] == index_answer) {
            correctAnswers = correctAnswers + 1;
        }
    }
    res.send(correctAnswers)
})

app.post('/checkbox', function (req, res) {
    console.log("POSTING CHECK ANSWER: ", req.body)
})

app.get("/home", function (req, res) {
    return res.sendFile(__dirname + '/index.html');
});

app.post('/home', (req, res) => {
    const question = req.body;
    console.log('Delivered request: ', req.body);
    res.json(question.answers);
    return true;
});

app.listen(port, () => console.log('Server started at http://localhost:' + port + '/home'));