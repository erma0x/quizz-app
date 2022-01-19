app.get("/verify/:id",checkAnswer)


function checkAnswer (req, res) {

    // my Answer
    var my_answer_id = req.params.id;
    var my_answer_number = req.params.correct;

    //var inputs = document.getElementById("form").elements;
    //var idquiz = inputs[id];
    //var correct_answer_number = inputs[correct];

    //console.log(idquiz,correct_answer_number)
    
    console.log(my_answer_id,my_answer_number);
    return res.json(my_answer_id,my_answer_number);
    //my_risposta = res.json(questions[randomKey])
    //id_domanda = 
    //questions[x][risposta] == questions[id_domanda][my_risposta]

    return; //return res.sendFile(__dirname + '/index.html');
    
}


async function updateButton () {
    
    // Get data
    const url = '/quiz';
    const response = await fetch(url);
    const data = await response.json();

    let htmlString = "";

    // Create  ( p > form > div > input )
    htmlString += "<form id='form' class='mx-auto' style='width: 200px'>"+data['question'];
    htmlString += "<br><br>"
    for (id_answer in data['answers']) {
        htmlString += "<div> <input type='radio' multiple id="+data['id']+" name ='id' value="+data['id']+" checked>  "+
        "<label for='javascript'>"+ data['answers'][id_answer]+"  </label></div>";
    }
    htmlString +="</form>"

    document.getElementById('container').innerHTML = htmlString;
}



function submitAnswer(res, req) {

    const risposta = document.querySelector('form');
    console.log(risposta)

    document.getElementById("container").submit()
    document.getElementById("form").submit()// 

    // Se è stato inserito un nome verrà effettuato il submit
    return true;
    }