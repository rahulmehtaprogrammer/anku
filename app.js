let Ename = prompt("Enter your Name")
let gameseq =[];
let userseq =[];
let btnarr =["yellow","red","green","purple"]
let started= false;


let level = 0;
let highs= 0;

document.querySelector(".name").innerText= `welcome ${Ename}`;





document.addEventListener("click" ,function(){
        if(started==false){
            started = true;
         document.querySelector(".name").innerText= ` ${Ename}`;
            levelUp();
        }
       
        
})

function btnFlash(btn){
    btn.classList.add("bgwhite");
    setTimeout( function(){
        btn.classList.remove("bgwhite")
    },1000);
}
function userFlash(btn){
    btn.classList.add("bggreen");
    setTimeout( function(){
        btn.classList.remove("bggreen")
    },250);
}


function levelUp(){
    userseq=[];
    level++;
    document.querySelector("h3").innerText = `level ${level}`
    let randomNum = Math.floor(Math.random()*3);
    let randomcolor= btnarr[randomNum];
    gameseq.push(randomcolor)
    let randombtn = document.querySelector(`.${randomcolor}`);
     btnFlash(randombtn);
     
    
}

   

function seqMatch(idx){
    
    if (gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
            levelUp()
        }
    }else{
        document.querySelector("h3").innerHTML= `Game Over ! <b> your level ${level}</b><br> Touch on screen for restart game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 100);
        High()
        reset();
        
        
        }

    }
function btnPress(){
    let btn = this;
   userFlash(this);
  let id = btn.getAttribute("id");
  userseq.push(id);
  seqMatch(userseq.length-1)
  
}


let btns = document.querySelectorAll(".btn");
 
for(button of btns){
    button.addEventListener("click", btnPress);
}
function reset(){
    level=0;
    gameseq=[];
    userseq=[];
    started=false;

}

function High(){
    
   
    if (level > highs){
        highs= level + 0;
        
    }
    document.querySelector("h2").innerText=`your high score is ${highs}`;
    
}


