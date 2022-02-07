const port = process.env.port || 3000;
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var questions = JSON.parse(fs.readFileSync('./quizzes.json', 'utf8'));
let numberOfQuizzes = 4;

app.get("/quiz", function (req, res) {
    /*
    get random questions from quizzes.json with no question duplicates 
    */
    let my_test = new Array();
    let used_ids = new Array();
    let randomKey = 0;
    let question = {};

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
    res.json(my_test);
    return true;
});


app.get('/checkbox', function (req, res) {
    console.log('answers status code: ' + req.statusCode + ' |answer elements: ' + req.body);
    res.send(correctAnswers);

})

app.post('/checkbox', function (req, res) {
    /*
    description: check how many correct 
    answers in the form & submit the scoreQuiz
        IN: /url/my_test.json
        OUT: Quiz Score
    */
    let myTest = req.body;
    console.log("SERVER post on /checkbox the following object: ", myTest)
    let correctAnswers = 0;
    for (id_quiz in myTest) {
        let index_answer = myTest[id_quiz];
        if (questions[id_quiz]['correct'] == index_answer) {
            correctAnswers = correctAnswers + 1;
        }
    }
    console.log('SERVER correct answers: ', correctAnswers);
    let scoreQuiz = (correctAnswers / numberOfQuizzes) * 100; // score value [0-100%]
    console.log('SERVER quizscore : ', scoreQuiz);
    res.json(scoreQuiz);

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

app.listen(port, () => console.log('SERVER started at http://localhost:' + port + '/home'));