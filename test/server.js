const port = 3000;

const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var questions = JSON.parse(fs.readFileSync('./quizzes.json', 'utf8'));
let numberOfQuizzes = 3;

app.get("/quiz", function (req, res) {
    // get random questions from quizzes.json with no duplicates 
    let my_test = new Array();
    let used_ids = new Array();
    let randomKey = 0;
    let question = {};

    console.log('SERVER /quiz GET : generating quiz object')

    while (numberOfQuizzes > my_test.length) {
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
    console.log('SERVER /quiz GET : sending Quiz object')
    res.json(my_test);
    return true;
});


app.get('/checkbox', function (req, res) {
    // IN: /url/my_test.json
    // OUT: number of correct answers
    console.log('answer status code: ' + req.statusCode + ' |answer elements: ' + req.body);
    res.send(correctAnswers);
    console.log('SERVER /checkbox : sending number correct answers ')
    return true;

})

app.post('/checkbox', function (req, res) {
    // check how many correct answers in the form & submit the scoreQuiz
    let myTest = req.body;
    console.log("SERVER post on /checkbox the following object: ", myTest)
    let correctAnswers = 0;
    for (j in myTest) {
        console.log(j, myTest[j])
        let id_quiz = j;
        let index_answer = myTest[j];
        if (questions[id_quiz]['correct'] == index_answer) {
            correctAnswers = correctAnswers + 1;
        }
    }
    console.log('SERVER correct answers: ', correctAnswers);
    let scoreQuiz = correctAnswers / numberOfQuizzes;
    console.log('SERVER score: ', scoreQuiz);
    res.json(scoreQuiz);
    return true;

})


app.get("/home", function (req, res) {
    console.log('SERVER /home GET sending quizapp');
    return res.sendFile(__dirname + '/index.html');    
});

app.post('/home', (req, res) => {
    const question = req.body;
    console.log('SERVER /home POST sending quizapp',req.body);
    res.json(question.answers);
    return true;
});

app.listen(port, () => console.log('SERVER started at http://localhost:' + port + '/home'));