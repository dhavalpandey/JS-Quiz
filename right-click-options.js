var restartBtn = document.getElementById("restart");
var feedbackBtn = document.getElementById("feedback");
var refreshBtn = document.getElementById("refresh");
var apiBtn = document.getElementById("api");

restartBtn.addEventListener("click", function(){
    startGame();
})

feedbackBtn.addEventListener("click", function(){
    window.location.assign("/feedback")
})

refreshBtn.addEventListener("click", function(){
    location.reload()
})

apiBtn.addEventListener("click", function(){
    window.location.assign("/api")
})
