let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let imgDiv = document.querySelector("#imagesDiv");

let yourScore = document.querySelector("#yourScore");
let systemScore = document.querySelector("#systemScore");
let pickToMove = document.querySelector("#pickToMove");
let score1 = 0,
  score2 = 0;
let winChart = {
  1: "rock",
  2: "paper",
  3: "scissor",
};
let winProbSys = [
  [1, 2],
  [2, 3],
  [3, 1],
];
const randomeNum = (min, max) => {
  min = 1;
  max = 4;
  return Math.floor(Math.random() * (max - min)) + 1;
};
imgDiv.addEventListener("click", (e) => {
  let val = parseInt(e.target.attributes.value.value);
  let sysVal = randomeNum();
  let obj1 = [val, sysVal];
  let flag = 0;
//   console.log(obj1);
  blinkAni(sysVal);
  if (val == sysVal) {
    pickToMove.innerHTML = "Draw..!";
    flag = 0;
    return 0;
  }
  winProbSys.map((x) => {
    if (JSON.stringify(x) === JSON.stringify(obj1)) {
      flag = 1;
    }
  });
  if (flag == 1) {
    score2++;
    systemScore.innerHTML = score2;
    pickToMove.innerHTML=`You Lost! ${winChart[sysVal]} beats ${winChart[val]}.`;
  } else {
    score1++;
    yourScore.innerHTML = score1;
    pickToMove.innerHTML=`You Won! ${winChart[val]} beats ${winChart[sysVal]}.`;
  }

});
const blinkAni = (sysVal) => {
   let imgArr = Array.from(imgDiv.children);
   imgArr.map((ele)=> {
    if (ele.getAttribute('value') == sysVal) {
      ele.classList.add("blinking");
      setTimeout(() => {
        ele.classList.remove("blinking");
      }, 1000);
    }
  });
};
let preVal=pickToMove.innerHTML;
pickToMove.addEventListener('mouseenter',()=>{
    pickToMove.innerHTML="Restart Game!";
});
pickToMove.addEventListener('mouseout',()=>{
    pickToMove.innerHTML=preVal;
});
pickToMove.addEventListener('click',()=>{
    score1=0;
    score2=0;
    yourScore.innerHTML=0;
    systemScore.innerHTML=0;
});