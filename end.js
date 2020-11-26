const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_QUESTIONS = 10;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
var difficulty = localStorage.getItem("difficulty");
finalScore.innerText = mostRecentScore;

function checkBeforeLoad(){
  if (mostRecentScore>=10){
    document.getElementById("restartButton").style.visibility='visible';

    if (difficulty==='easy'){
      difficulty='medium';
    }
    else
      if (difficulty==='medium'){
        difficulty='hard';
      }
      else {
        difficulty='hard';
      }

    localStorage.setItem("difficulty",difficulty);
      localStorage.setItem("boolean","true");

  } else {
    document.getElementById("restartButton").style.display='none';
  }

}

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  //window.location.assign("/");
  window.alert("Saved!");
  document.getElementById("username").value='';
};

  function bye(){

  let msg = "Are you sure you don't want to play?";
  if ( window.confirm(msg)){
  window.location.assign("index.html")
  }
}





