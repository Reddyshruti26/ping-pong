const p1display= document.querySelector("#p1Display");
const p2display= document.querySelector("#p2Display");
const p1Button= document.querySelector("#p1Button");
const p2Button= document.querySelector("#p2Button");
const reset= document.querySelector("#reset");
const playwin=document.querySelector("#playto");

let p1Score=0;
let p2Score=0;
let winningScore=5;
let isGameOver=false;

//Added event listener
p1Button.addEventListener("click", function(e){
    if(!(isGameOver)){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameOver=true;
            p1display.classList.add("winner");
            p2display.classList.add("loser");
            p1Button.disabled=true;
            p2Button.disabled=true;
        }p1display.textContent=p1Score;
    }
})

p2Button.addEventListener("click", function(e){
    if(!(isGameOver)){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameOver=true;
            p2display.classList.add("winner");
            p1display.classList.add("loser");
            p1Button.disabled=true;
            p2Button.disabled=true;
        }p2display.textContent=p2Score;
    }
})


reset.addEventListener("click", resetfun);

playwin.addEventListener("change", function(){
    winningScore=parseInt(this.value);
    resetfun();
})


function resetfun(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove("winner", "loser");
    p2display.classList.remove("winner", "loser");
    p1Button.disabled=false;
    p2Button.disabled=false;
}
