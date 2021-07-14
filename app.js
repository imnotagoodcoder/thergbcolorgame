var colors = grc(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolour();
var h1 = document.querySelector("h1");
var colourdisplay = document.getElementById("colourdisplay");
var msgdisp = document.querySelector("#message");
var rstbtn = document.getElementById("rst");
var esybtn = document.getElementById("easybtn");
var hrdbtn = document.getElementById("hardbtn");

esybtn.addEventListener("click", function() {
    esybtn.classList.add("selected");
    hrdbtn.classList.remove("selected");
    colors = grc(3);
    pickedcolor = pickcolour();
    colourdisplay.textContent = pickedcolor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];     
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
})

hrdbtn.addEventListener("click", function() {
    hrdbtn.classList.add("selected");
    esybtn.classList.remove("selected");
    colors = grc(6);
    pickedcolor = pickcolour();
    colourdisplay.textContent = pickedcolor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];     
        squares[i].style.display = "block";
    }
    h1.style.background = "steelblue";
})

rstbtn.addEventListener("click", function() {
   colors = grc(6);
   pickedcolor = pickcolour();
   colourdisplay.textContent = pickedcolor;
   msgdisp.textContent = "";
   this.textContent = "Change Colors";
   for (let i = 0; i < squares.length; i++) {
       squares[i].style.background = colors[i];
   }
   h1.style.background = "steelblue";  
});

colourdisplay.textContent = pickedcolor;

for (let index = 0; index < squares.length; index++) {
    squares[index].style.background = colors[index];
    squares[index].addEventListener('click', function() {
        if(this.style.background==pickedcolor){
            msgdisp.textContent = "Correct!";
            changecolor(this.style.background);
            h1.style.background = this.style.background;
            rstbtn.textContent = "Play Again?";
        } 
        else{
            this.style.background = "#232323";
            msgdisp.textContent = "Try Again!";
        }
     });
}

function changecolor(color) {
    for (let index = 0; index < squares.length; index++){
        squares[index].style.background = color;
    }
}

function pickcolour() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function grc(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomcolor())
    }
    return arr;
}

function randomcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

