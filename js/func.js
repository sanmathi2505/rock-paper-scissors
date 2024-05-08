var user=0;
var comp=0;
const u_s=document.getElementById("u-s")
const c_s=document.getElementById("c-s")
const scoreboard=document.querySelector(".score");
const result=document.querySelector(".result");
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");


function cch(){
    const choices=['r','p','s'];
    const rand=(Math.floor(Math.random()*3));
    return choices[rand];
}
cch();

function convertToWord(letter){
    if(letter === 'r') return "rock";
    if(letter === 'p') return "paper";
    return "scissors"
}

function win(uch,c_ch){
  user++;
  u_s.innerHTML=user;
  c_s.innerHTML=comp;
  result.innerHTML=convertToWord(uch) + "  beats "+ convertToWord(c_ch) +  ". You win!"
}
function loss(uch,c_ch){
   comp++;
   u_s.innerHTML=user;
  c_s.innerHTML=comp;
  result.innerHTML=convertToWord(uch) + "  loses to "+ convertToWord(c_ch) +  ". You loss!"

}
function draw(uch,c_ch){
    u_s.innerHTML=user;
    c_s.innerHTML=comp;
    result.innerHTML=convertToWord(uch) + "  equals to "+ convertToWord(c_ch) +  ". it's a tie"
  
}

function play(uch){
  const c_ch=cch();
  switch(uch + c_ch){
    case "pr":
    case "rs":
    case "sp":
        win(uch,c_ch);
        break;
    case "rp":
    case "sr":
    case "ps":
        loss(uch,c_ch);
        break;
    case "rr":
     case "ss":
    case "pp":    
        draw(uch,c_ch);
        break;

  }
}
function main(){
rock.addEventListener("click",function(){
    play("r");
})

paper.addEventListener("click",function(){
    play("p");
})

scissor.addEventListener("click",function(){
   play("s");
})
}
main();