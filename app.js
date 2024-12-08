let btn=document.querySelectorAll(".box");
let restart =document.querySelector("#Reset");
let messagecontainer= document.querySelector(".msgcontainer");
let message = document.querySelector("#msg");
let turn0=true;
let count=0;


let wincheck=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


const draw=() =>{
    message.innerText= `Draw Match`;
    messagecontainer.classList.remove("hide");
    disableboxes();

}

const showwinner = (winner) =>{
    message.innerText=`congrulations, winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    disableboxes();
};

const restarts=() =>{
    messagecontainer.classList.add("hide");
    turn0=true;
   enableboxes();
}

const WinnerCheck = () =>{
    for(let pattern of wincheck){       
       let patternval1=btn[pattern[0]].innerText;
       let patternval2=btn[pattern[1]].innerText;
       let patternval3=btn[pattern[2]].innerText;
        if(patternval1 !=""&&patternval2 !=""&&patternval3 !=""){
            if(patternval1 === patternval2 && patternval2 === patternval3){
                showwinner(patternval1);
            }
            else{
               if(count===9){
                draw();
               }
            }
          

           }
        }
    }


let disableboxes =() =>{
    for(let boxes of btn){
        boxes.disabled=true;
    }
}

let enableboxes =() =>{
    for(let boxes of btn){
        boxes.disabled=false;
        boxes.innerText="";
    }
}

restart.addEventListener("click",restarts);

btn.forEach((box)=>{
box.addEventListener("click", () => {
    count++;
    
    if(turn0 ==true ){
       box .innerText="O";
       turn0=false;
    }
    else{
    box.innerText="X";
    turn0=true;
    }
    box.disabled = true;
    WinnerCheck();
});
});


