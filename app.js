let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let newButton=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let darkModeBtn=document.querySelector("#dark-mode");
let text=document.querySelector(".text");

let turn0=true;//playerX player0

let winPatterns= [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.style.color="rgb(0, 48, 73)";
            box.innerText="O";
            turn0=false;

        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const darkMode = () => {
    if(darkModeBtn.innerText=="Dark-mode"){

    for(let box of boxes){
    box.style.backgroundColor="grey";}
    document.body.style.backgroundColor="black";
    text.style.color="rgb(36, 56, 99)";
    darkModeBtn.innerText="Light mode";
    darkModeBtn.style.backgroundColor="rgb(36, 56, 99)"
    resetBtn.style.backgroundColor="rgb(36, 56, 99)"
    }

    else{
         for(let box of boxes){
    box.style.backgroundColor="rgb(221, 161, 94)";}
    document.body.style.backgroundColor="cornsilk";
    text.style.color="rgb(49, 61, 22)";
    darkModeBtn.innerText="Dark-mode";
    darkModeBtn.style.backgroundColor="rgb(188, 108, 37)"
    resetBtn.style.backgroundColor="rgb(188, 108, 37)"

    }

}
const resetGame = () => {
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes= ()=> {
    for( let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled=false;
        box.innerText="";

    }

}
const showWinner= (Winner) => {
    msg.innerText=`Congratulations, the winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != ""){
        if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
            console.log("winner",boxes[pattern[0]].innerText);
            showWinner(boxes[pattern[0]].innerText);
            

        }}
    }
}

newButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
darkModeBtn.addEventListener("click",darkMode);
