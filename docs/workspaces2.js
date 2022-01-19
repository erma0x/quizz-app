
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});


    
    // SUBMIT 
    //const risposta = document.querySelector('form');
    //console.log(risposta)
    

    //document.getElementById("form").submit()
    //document.form.submit();
    


    
// const form = document.getElementById('form');
// const log = document.getElementById('log');
// form.addEventListener('submit', logSubmit);
    
// event.preventDefault();
// var formElement = document.querySelector("form"); // data['answers'][id_answer]
// id_domanda
// const response = await fetch('/check/'+id_domanda+'/'+formElement);


// request.open("POST", "submitform.php");

// var id_domanda =  formElement['id']
// let id_domanda =  FormData(formElement['answer'])


// // prendi la risposta giusta da check
// const data = await response;

// document.getElementById('container').innerHTML = htmlString;

    //console.log(formElement,data)

    //var formData = new FormData(formElemenidt);
    //req.open("POST", formData);
    //req.send(new FormData(formElement));

    // get elemento form
    // fetch /check/id 
    // confronta
    // ritorna

    //const data = fetch(res)
    //data['question']
    
    //const risposta = document.querySelector('form');
    //console.log(data)

    
    // Se è stato inserito un nome verrà effettuato il submit
