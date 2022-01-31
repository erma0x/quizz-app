const express = require('express');
var fs = require('fs');
const port = 3000;
const app = express();

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// load quiz dataset
var questions = JSON.parse(fs.readFileSync('./quizzes.json', 'utf8'));

// get random questions from quizzes.json
app.get("/quiz", function (req, res) {
    let my_test = new Array(); // my test with quizNumber
    let used_ids = new Array(); // check for duplicates

    let quizNumber = 3;

    let randomKey = 0;
    let question = {};

    while (quizNumber > my_test.length) {

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

// [IN] /url/myTest.json
// [OUT] number of correct answers
app.get('/checkbox', function (req, res) {
    console.log('answer status code: ' + req.statusCode);
    console.log('answer elements: ' + req.body);
    res.send(correctAnswers);
    return true;

})

app.post('/checkbox', function (req, res) {

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
    console.log('SERVER correct answers ', correctAnswers);
    //let scoreQuiz = correctAnswers/quizNumber; 
    res.json(correctAnswers);
    return true;

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