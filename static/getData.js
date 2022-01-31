async function getRandomTest(url) {
  let response = await fetch(url, { method: "GET" });
  let randomTest = await response.json();
  return randomTest;
};

async function getScore(url, myTest) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(myTest), headers: { "content-type": 'application/json' }
  })
  let correctAnswers = await response.json();
  return correctAnswers;
};

module.exports = { getRandomTest, getScore }