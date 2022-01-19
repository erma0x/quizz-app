# QuizzApp: 
Quiz game app with JavaScript, Bootstrap, nodejs & expressJS
<br>
### Build
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

### Endpoints

##### /home
localhost:3000/home index.html

##### /quiz
get random quiz with json

##### /check/:id
send true or false if the response it's correct with res.json

<br><br>



### To do
- attributo nascosto nella form
- 1 fai submit fetch id della domanda e fai /check/:id ed estrai la risposta, e pubblica con insertHTML su index.html 
- visualizza se il risultato e' corretto


<br><br>
<br><br>
<br><br>


### Done 
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



<br><br>

## Note
1. submit -> /verify2  - >  routing expressjs

2. oppure passare dei parametri nella submit
form-data lato client da guardare, estrapola dati da form

3. piu domande come variabile lato server,
spawna tot domande e puoi rispondere a tutte e solo dopo
guardi se sono corrette o meno, con la % di corrette su /home

4. document.CreateElement()
innerHtml con append child
creare l'elemento
mettere il contenuto 
appenderlo







