//jshint esversion: 6

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
