# QuizzApp ✅ 
Quiz game app with JavaScript, Bootstrap, nodejs & expressJS

<br>

## Build
```bash
npm install -g @vue cli
vue create my-project
cd my-project
npm run server
```
### Run server
```bash
nodemon server.js
# OR
node server.js
```
<br>

## Endpoints

#### 🟢 **/home**
localhost:3000/home my app rendering index.html

#### 🟢 **/quiz**
get random quiz as json obj

#### 🟢 **/check/:id/:myanswer**
return true or false if the response it's correct

<br>

## Note
### Domande:

- devo resettare il documento ogni nuovo quiz, prima quando facevo submit mandavo document.innerHTML e lo assegnavo 
a se la risposta e' corretta o no. Adesso dovrei rigenerare i quiz indipendentemente
// document.getElementById("form").reset(); // reset form content
// document.getElementById('form').innerHTML = '';

// form.remove();


### IN PROGRESS 🟡
- RESET del form:  quando faccio update quiz deve cancellare tutto il quiz presente
- test per il CHECK delle domande
- per ogni domanda fai un contatore di tutte le risposte giuste
- dopo submit mostra la % di risposte corrette

<br>


### DONE

- submit button
- le domande sono mutualmente esclusive
- crea il documento html con i seguenti metodi: document.CreateElement(), innerHtml, appendChild, invece di comporre la string htmlString
- fai random quiz, però non prendere doppioni, quindi controlla la id della domanda pescata e fai una lista di id di domande presenti 
- fai un tot di domande per ogni test
- cambia il pulsante per ottenere un quiz a test (da singolo a gruppo di domande)
- /quiz ritorna un numero X di domande
- /QUIZ genera piu domande assieme sempre server side
- aggiungi id come attributo nascosto nella form
- togli correct come attributo nascosto nella form
- 1 fai submit fetch id della domanda e fai /check/:id ed estrai la risposta, e pubblica con insertHTML su index.html 
- visualizza se il risultato e' corretto su /home
- value /verify/:id risposta corretta (True/False) 
- valuta se sono uguali e ritorna un json
- controlla la id della risposta e la risposta
- richiesta POST a /verify
- verify prende body del POST
- crea /verify/:id
- il route /verify/:id invece che dal client fallo passare al server
- new quiz restituisce solo 1 domanda
- il lato client ci son bottoni per rispondere radiobutton
- bottone per inviare la risposta
- api /check/ per le risposte giuste
- form name="id",name="answer"

<br>

