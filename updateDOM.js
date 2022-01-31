function getFormData() {
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm);
  
    // id_domanda & numero risposta
    let myTestIDs = Array.from(formData.keys());
    let myTestAnswers = Array.from(formData.values());
    let myTest = {};
    // compose JSON test object
    for (let i = 0; i < myTestIDs.length; i++) {
      let myAnswerID = myTestIDs[i];
      let myAnswerIndex = myTestAnswers[i];
      myTest[myAnswerID] = myAnswerIndex;
  
    }
    //alert("You haven't answered all the questions \n do you want to continue? ");
    console.log('CLIENT test object ', myTest);
    return myTest
  };