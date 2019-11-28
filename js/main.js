//jshint esversion: 6

//options array
const opts = ["scissors","paper","rock"];
const vms = ["YOU WIN","THE HOUSE WINS", "IT'S A TIE"];

//open rules
$(".rules-btn").click(function(ev){
  if(!$(document).find(".rules").length){
    $(this).append(`  <div class="rules">
        <div class="rules-top-wrapper">
        <span class="rules-span">RULES</span>
        <button class="close-btn btn"><img src="./images/icon-close.svg" alt="close"></button>
        </div>
        <div class="rules-image-wrapper">
        <img src="./images/image-rules.svg" width="100%" height="100%" alt="">
        </div>
      </div>`);
  }
});

//close rules
$(document).on("click",".close-btn",function(ev){
  $(document).find(".rules").remove();
});

//begin game
$(document).on("click",".rps",function(ev){
  const userPick = $(this).attr("name");
  let userPickIndex = opts.findIndex(element => element == userPick);
  const housePick = Math.floor(Math.random()*3);
  let result = 0;
  if(userPickIndex==housePick){
    result = 2;
  }else{
    let ref = userPickIndex+1;
    if(ref === 3){
      ref=0;
    }
    if(ref==housePick){
      result=0;
    }else{
      result=1;
    }
  }

const score = $(document).find(".score-number");
let scoreNumber = Number(score.text());
if(result==1){
  scoreNumber--;
}
if(result ==0){
  scoreNumber++;
}

const playArea = $(document).find(".play-area");
playArea.empty();
playArea.append(`
  <div class="picked-text">
    <div class="row">
      <div class="col-6">
        <span class="yp">YOU PICKED</span>
      </div>
      <div class="col-6">
        <span class="hp">THE HOUSE PICKED</span>
      </div>
    </div>
  </div>

  <div class="picked">
    <div class="row">
      <div class="col-6">
        <button type="button" class="`+opts[userPickIndex]+`-btn yp-align" disabled><img src="./images/icon-`+opts[userPickIndex]+`.svg" alt="`+opts[userPickIndex]+`"></button>
      </div>
      <div class="col-6">
        <button type="button" class="`+opts[housePick]+`-btn hp-align" disabled><img src="./images/icon-`+opts[housePick]+`.svg" alt="`+opts[housePick]+`"></button>
      </div>
    </div>
  </div>

  <div class="victory-message">
    <span class="vm-message">`+vms[result]+` </span>
    <button class="replay-btn btn btn-light"> PLAY AGAIN</button>
  </div>`);

score.text(scoreNumber);
});

//play again
$(document).on("click",".replay-btn",function(ev){
  const playArea = $(document).find(".play-area");
  playArea.empty();
  playArea.append(`
    <img class="background-img" src="./images/bg-triangle.svg" width="100%" height="100%" alt="">
    <button type="button" class="paper-btn paper-btn-align rps" name="paper"><img src="./images/icon-paper.svg" alt="paper"></button>
    <button type="button" class="scissors-btn scissors-btn-align rps" name="scissors"><img src="./images/icon-scissors.svg" alt="rock"></button>
    <button type="button" class="rock-btn rock-btn-align rps" name="rock"><img src="./images/icon-rock.svg" alt="scissors"></button>

            `);
});
