let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer");

let turnO = true; //playerX playerO

let winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) =>{ // here box is a variable to handle buttons
    box.addEventListener("click", () => {
        if(turnO === true)     {
            box.innerText ="O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;// this doesnt let the user to change the symbol once it is set to a box
        checkWinner();
    })
});

const checkWinner = () => {//Checks if three consecutive boxes have same symbol
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
   
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            showWinner(pos1val);
        }
    }
     }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
newbtn.addEventListener("click", () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add("hide");
    }
})
reset.addEventListener("click", () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add("hide");
    }
})