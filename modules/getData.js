// get random quiz
async function getRandomTest(url) {
  let response = await fetch(url).then(res => res.json());
  let randomTest = await response.json();
  return randomTest;
};


async function getNumberCorrectAnswers(url, callback) {

  console.log(`CLIENT sending to ${url} the following quiz object: `, callback)
  let response_numberCorrectAnswers = await fetch(url, {
    method: "POST",
    body: JSON.stringify(callback), headers: { "content-type": 'application/json' }
  })

  let numberCorrectAnswers = await response.json();
  return numberCorrectAnswers;
};