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

#### 🟢 **/checkbox/myanswers.json**
return the number correct answers

<br>

## Note
### Domande:



### IN PROGRESS 🟡

- quando fa la submit tutte le domande devono essere risposte 
 input required sul form per dirgli di rispondere a tutte

- dopo submit mostra la % di risposte corrette
- elimina quizNumber dal client


- required
- elimina dal client logica
- modulo richieste
- modulo principale
- modulo update

<br>

### DONE
- controlla ultima parte di quiz.js per /checkbox/test.json 
- rimuovi il form prima di visualizzare il numero di risposte sbagliate
- usa fetch invece di XML

- per ogni domanda fai un contatore di tutte le risposte giuste
- componi il JSON test per ogni quiz a cui fai submit
- RESET del form:  quando faccio update quiz deve cancellare tutto il quiz presente
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

