var ply1 = "Player 1", ply2 = "Player 2";

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 


function editNameFun() {

     ply1 = prompt("Player 1 : ");
    document.getElementById("player1").innerHTML = ply1;
     ply2 = prompt("Player 2 : ");
    document.getElementById("player2").innerHTML = ply2;
}

function resetFun() {
    ply1 = "Player 1", ply2 = "Player 2";
    document.getElementById("player1").innerHTML = ply1;
    document.getElementById("player2").innerHTML = ply2;
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    playAudio();
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    document.querySelector("h1").innerHTML = "Refresh Me";
    document.body.style.backgroundColor = "#393E46";
    

}

function myfunc() {
    var randomNumber1 = Math.random();
    var num = Math.ceil(randomNumber1 * 6);

    var ChangedImage = "images/dice" + num + ".png";

        
    var img1 = document.querySelectorAll("img")[0];


    img1.setAttribute("src", ChangedImage);

    var r = Math.random();
    var n = Math.ceil(r * 6);

    var secImage = "images/dice" + n + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", secImage);

    if(num > n) {

        if(ply1 == "Player 1")
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
        else 
            document.querySelector("h1").innerHTML = "🚩 "+ ply1 + " Wins";
        document.body.style.backgroundColor = "#3d70b2";
        playAudio();
    }
    else if(num < n) {

        if(ply2 == "Player 2")
            document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
        else 
            document.querySelector("h1").innerHTML =  ply2 + " Wins 🚩";
        document.body.style.backgroundColor = "#5596e6";
        playAudio();

    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
        document.body.style.backgroundColor = "#A65EEA";
        playAudio();
    }
}