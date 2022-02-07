export async function getRandomTest(url) {
  let response = await fetch(url, { method: "GET" });
  let randomTest = await response.json();
  return randomTest;
};

export async function getScore(url, myQuiz) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(myQuiz),
    headers: { "content-type": 'application/json' }
  });
  let quizScore = await response.json();
  console.log('CLIENT quiz score : ', quizScore);
  return quizScore
};

