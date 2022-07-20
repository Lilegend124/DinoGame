var character = document.getElementById("character");
var block = document.getElementById("fire");
const score = document.getElementById("score");


// jump animation, keypress will trigger it in html file
function jump(){
    if (character.classList.contains("animate")){return}
    
    character.classList.add("animate");
    // Removes "animate" 1 second after
    // become jump animation takes 1 second
    setTimeout(function() {
        character.classList.remove("animate");
    }, 1000);
}

var checkLose = setInterval(function(){
    // collison detection: https://www.codegrepper.com/code-examples/javascript/how+to+make+an+object+detect+if+it+is+touching+another+object+in+html+canvas
    if (character.x < block.x + block.width &&
        character.x + character.width > block.x &&
        character.y < block.y + block.height &&
        character.y + character.height > block.y) {
            block.style.animation = "none";
            block.style.display = "none";
            score.style.display = "none";
            // https://stackoverflow.com/questions/16955019/how-to-reload-a-page-after-the-ok-click-on-the-alert-page
            if(!alert("Your score is: " + score.textContent)){
                window.location.reload();
            }
        }

}, 1);

// https://stackoverflow.com/questions/65828171/how-to-update-a-number-in-html-using-js
setInterval(function(){
    score.textContent = +score.textContent + 1;
}, 2000);

