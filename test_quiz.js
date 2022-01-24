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

        console.log(question['question'])
        for (answer_number in question['answers']){
            console.log(question['answers'][answer_number])
        }
    }
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


//console.log(my_test)
//console.log(used_ids);
//console.log(my_test[0])
