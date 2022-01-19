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

### To do

1. da una a piu domande assieme descrizione: spawna tot domande e puoi rispondere a tutte e solo dopo guardi se sono corrette o meno, con la % di corrette su /home

    - cambia il pulsante per ottenere un quiz a test
        (da singolo a gruppo di domande)

    - fai un tot di domande per ogni test

    - per ogni domanda fai un contatore di tutte le risposte giuste

    - fai random quiz, però non prendere doppioni, quindi controlla la id della domanda pescata e fai una lista di id di domande presenti 

    - document.CreateElement()
    innerHtml con append child
    creare l'elemento
    mettere il contenuto 
    appenderlo

<br>


### Done 
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

### Notes








