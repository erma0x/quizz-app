const { getRandomTest, getScore } = require("./static/getData");
const { updateQuiz, submitQuiz } = require("./static/updateDOM");

//let response = fetch(url,{method: "GET"});
async function main() {

    let url = '/quiz';
    let response = getRandomTest(url);//.then(res => res.json());
    let randomTest = await response.json();

    // addEventListner()  submit or update quiz
        // let my_aswers = submitQuiz();
        // let response = getScore(url);        
        // let scoreTest = await response.json();

    console.log(randomTest,scoreTest);
}

main();