//jshint esversion: 6

//options array
const opts = ["scissors", "paper", "rock"];
const optsBonus = [{
  name: "rock",
  beats: ["scissors", "lizard"]
}, {
  name: "paper",
  beats: ["rock", "spock"]
}, {
  name: "scissors",
  beats: ["paper", "lizard"]
}, {
  name: "lizard",
  beats: ["paper", "spock"]
}, {
  name: "spock",
  beats: ["rock", "scissors"]
}];
const vms = ["YOU WIN", "THE HOUSE WINS", "IT'S A TIE"];

let rpsls = false;

//open rules
$(".rules-btn").click(function(ev) {
  let ruleslink = "";
  if (rpsls == false) {
    ruleslink = "./images/image-rules.svg";
  } else {
    ruleslink = "./images/image-rules-bonus.svg";
  }
  if (!$(document).find(".rules").length) {
    $(this).append(`  <div class="rules">
        <div class="rules-top-wrapper">
        <span class="rules-span">RULES</span>
        <button class="close-btn btn"><img src="./images/icon-close.svg" alt="close"></button>
        </div>
        <div class="rules-image-wrapper">
        <img src="` + ruleslink + `" width="100%" height="100%" alt="">
        </div>
      </div>`);
  }
});

//close rules
$(document).on("click", ".close-btn", function(ev) {
  $(document).find(".rules").remove();
});

//begin game
$(document).on("click", ".rps", function(ev) {
  const userPick = $(this).attr("name");
  let userPickIndex = opts.findIndex(element => element == userPick);
  const housePick = Math.floor(Math.random() * 3);
  let result = 0;
  if (userPickIndex == housePick) {
    result = 2;
  } else {
    let ref = userPickIndex + 1;
    if (ref === 3) {
      ref = 0;
    }
    if (ref == housePick) {
      result = 0;
    } else {
      result = 1;
    }
  }

  const score = $(".score-number");
  let scoreNumber = Number(score.text());
  if (result == 1) {
    scoreNumber--;
  }
  if (result == 0) {
    scoreNumber++;
  }

  const playArea = $(".play-area");
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
        <button type="button" class="` + opts[userPickIndex] + `-btn yp-align" disabled><img src="./images/icon-` + opts[userPickIndex] + `.svg" alt="` + opts[userPickIndex] + `"></button>
      </div>
      <div class="col-6">
        <button type="button" class="` + opts[housePick] + `-btn hp-align" disabled><img src="./images/icon-` + opts[housePick] + `.svg" alt="` + opts[housePick] + `"></button>
      </div>
    </div>
  </div>

  <div class="victory-message">
    <span class="vm-message">` + vms[result] + ` </span>
    <button class="replay-btn btn btn-light"> PLAY AGAIN</button>
  </div>`);

  score.text(scoreNumber);
});

//play again
$(document).on("click", ".replay-btn", function(ev) {
  const playArea = $(".play-area");
  playArea.empty();
  if (rpsls == false) {


    playArea.append(`
    <img class="background-img" src="./images/bg-triangle.svg" width="100%" height="100%" alt="">
    <button type="button" class="paper-btn paper-btn-align rps" name="paper"><img class="btn-img" src="./images/icon-paper.svg" alt="paper"></button>
    <button type="button" class="scissors-btn scissors-btn-align rps" name="scissors"><img class="btn-img" src="./images/icon-scissors.svg" alt="rock"></button>
    <div class="row rock-row no-gutters">
      <div class="col">

      </div>
      <div class="col">
        <button type="button" class="rock-btn rock-btn-align rps" name="rock"><img class="btn-img" src="./images/icon-rock.svg" alt="rock"></button>
      </div>
      <div class="col">

      </div>
    </div>

            `);
  }else{
    playArea.append(`
      <img class="rpsls-bg" src="./images/bg-pentagon.svg" width="100%" height="100%" alt="">
      <div class="row no-gutters">
        <div class="col">

        </div>
        <div class="col">
          <button type="button" class="scissors-btn rpsls" name="scissors"><img class="btn-img" src="./images/icon-scissors.svg" alt="scissors"></button>
        </div>
        <div class="col">

        </div>
      </div>
      <div class="row no-gutters mt-3">
        <div class="col">
          <button type="button" class="spock-btn  rpsls" name="spock"><img class="btn-img" src="./images/icon-spock.svg" alt="spock"></button>
        </div>
        <div class="col">

        </div>
        <div class="col">
          <button type="button" class="paper-btn  rpsls" name="paper"><img class="btn-img" src="./images/icon-paper.svg" alt="paper"></button>
        </div>
      </div>


      <div class="row no-gutters mt-5">
        <div class="col">
          <button type="button" class="lizard-btn  rpsls" name="lizard"><img class="btn-img" src="./images/icon-lizard.svg" alt="lizard"></button>
        </div>
        <div class="col">
          <button type="button" class="rock-btn  rpsls" name="rock"><img class="btn-img" src="./images/icon-rock.svg" alt="rock"></button>
        </div>
      </div>
      `);
  }
});

//switch to bonus mode
$(".rpsls-btn").click(function(ev) {
  if (rpsls == false) {
    rpsls = true;
    $(".top-logo").attr("src", "./images/logo-bonus.svg");
    $(this).text("RPS");
    const playArea = $(".play-area");
    playArea.empty();
    playArea.append(`
      <img class="rpsls-bg" src="./images/bg-pentagon.svg" width="100%" height="100%" alt="">
      <div class="row no-gutters">
        <div class="col">

        </div>
        <div class="col">
          <button type="button" class="scissors-btn rpsls" name="scissors"><img class="btn-img" src="./images/icon-scissors.svg" alt="scissors"></button>
        </div>
        <div class="col">

        </div>
      </div>
      <div class="row no-gutters mt-3">
        <div class="col">
          <button type="button" class="spock-btn  rpsls" name="spock"><img class="btn-img" src="./images/icon-spock.svg" alt="spock"></button>
        </div>
        <div class="col">

        </div>
        <div class="col">
          <button type="button" class="paper-btn  rpsls" name="paper"><img class="btn-img" src="./images/icon-paper.svg" alt="paper"></button>
        </div>
      </div>


      <div class="row no-gutters mt-5">
        <div class="col">
          <button type="button" class="lizard-btn  rpsls" name="lizard"><img class="btn-img" src="./images/icon-lizard.svg" alt="lizard"></button>
        </div>
        <div class="col">
          <button type="button" class="rock-btn  rpsls" name="rock"><img class="btn-img" src="./images/icon-rock.svg" alt="rock"></button>
        </div>
      </div>
      `);
    playArea.addClass("pa-rpsls");
  } else {
    rpsls = false;
    $(".top-logo").attr("src", "./images/logo.svg");
    $(this).text("RPSLS");
    const playArea = $(".play-area");
    playArea.empty();
    playArea.append(`
      <img class="background-img" src="./images/bg-triangle.svg" width="100%" height="100%" alt="">
      <button type="button" class="paper-btn paper-btn-align rps" name="paper"><img class="btn-img" src="./images/icon-paper.svg" alt="paper"></button>
      <button type="button" class="scissors-btn scissors-btn-align rps" name="scissors"><img class="btn-img" src="./images/icon-scissors.svg" alt="rock"></button>
      <div class="row rock-row no-gutters">
        <div class="col">

        </div>
        <div class="col">
          <button type="button" class="rock-btn rock-btn-align rps" name="rock"><img class="btn-img" src="./images/icon-rock.svg" alt="rock"></button>
        </div>
        <div class="col">

        </div>
      </div>
      `);
    playArea.removeClass("pa-rpsls");
  }
});

//play bonus game
$(document).on("click", ".rpsls", function(ev) {
  const userPick = $(this).attr("name");
  const userPickObject = optsBonus.find(element => element.name == userPick);
  const housePick = Math.floor(Math.random() * 5);

  let result = 1;
  if (userPickObject.name == optsBonus[housePick].name) {
    result = 2;
  } else {
    userPickObject.beats.forEach(function(el) {
      if (optsBonus[housePick].name == el) {
        result = 0;
      }
    });
  }

  const score = $(".score-number");
  let scoreNumber = Number(score.text());
  if (result == 1) {
    scoreNumber--;
  }
  if (result == 0) {
    scoreNumber++;
  }

  const playArea = $(".play-area");
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
        <button type="button" class="` + userPickObject.name + `-btn yp-align" disabled><img src="./images/icon-` + userPickObject.name + `.svg" alt="` + userPickObject.name + `"></button>
      </div>
      <div class="col-6">
        <button type="button" class="` + optsBonus[housePick].name + `-btn hp-align" disabled><img src="./images/icon-` + optsBonus[housePick].name + `.svg" alt="` + optsBonus[housePick].name + `"></button>
      </div>
    </div>
  </div>

  <div class="victory-message">
    <span class="vm-message">` + vms[result] + ` </span>
    <button class="replay-btn btn btn-light"> PLAY AGAIN</button>
  </div>`);

  score.text(scoreNumber);

});
