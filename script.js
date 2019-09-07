//Add Button Variables
var addTeamA = document.getElementById("addTeamA");
var addTeamB = document.getElementById("addTeamB");

//Subtrack Button Variables
var subTeamA = document.getElementById("subTeamA");
var subTeamB = document.getElementById("subTeamB");


//Setup Display Variables
var teamAScore = document.getElementById("teamA");
var teamBScore = document.getElementById("teamB");


//
var addTeamAScore = 0;
var addTeamBScore = 0;

addTeamA.addEventListener("click", function(){
  addTeamAScore++;
  teamAScore.innerHTML=addTeamAScore;  
});

subTeamA.addEventListener("click", function(){
  addTeamAScore--;
  teamAScore.innerHTML=addTeamAScore;  
});


addTeamB.addEventListener("click", function(){
  addTeamBScore++;
  teamBScore.innerHTML=addTeamBScore;  
});

subTeamB.addEventListener("click", function(){
  addTeamBScore--;
  teamBScore.innerHTML=addTeamBScore;  
});



