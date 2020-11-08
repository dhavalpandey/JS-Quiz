var restartBtn = document.getElementById("restart");
var downloadBtn = document.getElementById("download");
var refreshBtn = document.getElementById("refresh");
var apiBtn = document.getElementById("api");

restartBtn.addEventListener("click", function(){
    startGame();
})



refreshBtn.addEventListener("click", function(){
    location.reload()
})

apiBtn.addEventListener("click", function(){
    window.location.assign("/api")
})