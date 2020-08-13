var original = [];
var player = [];
var randomNumber, cnt=0;
var level = 1,
  start = 0;

  $(".btn").on("click", function() {
    var buttonName = this.id;
    $("#" + buttonName).addClass("pressed");
    setTimeout(function() {
      $("#" + buttonName).removeClass("pressed");
    }, 100);
    makeSound(buttonName);
    if (buttonName === original[cnt]) {
      console.log("correct");
      cnt++;
      if (cnt === original.length) {
        level++;
        setTimeout(function() {
          $("#level-title").text("Level "+level);
          generateSequence();
        }, 500);
      }
    } else {
      cnt = 0;
      $("#level-title").text("Game Over, Press Any Key to Restart");
      makeSound("wrong");
      original = [];
      level = 0;
      start=0;
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 100);
      console.log("error");
    }
  });

function makeSound(key) {
  var audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function generateSequence() {
  player = [], cnt = 0,start=1;
  randomNumber = Math.floor(Math.random() * 4) + 1;
  switch (randomNumber) {
    case 1:
      console.log("gr");
      original.push("green");
      makeSound("green");
      $("#green").addClass("pressed");
      setTimeout(function() {
        $("#green").removeClass("pressed");
      }, 100);
      break;
    case 2:
      console.log("rd");
      original.push("red");
      makeSound("red");
      $("#red").addClass("pressed");
      setTimeout(function() {
        $("#red").removeClass("pressed");
      }, 100);
      break;
    case 3:
      console.log("yl");
      original.push("yellow");
      makeSound("yellow");
      $("#yellow").addClass("pressed");
      setTimeout(function() {
        $("#yellow").removeClass("pressed");
      }, 100);
      break;
    case 4:
      console.log("bl");
      original.push("blue");
      makeSound("blue");
      $("#blue").addClass("pressed");
      setTimeout(function() {
        $("#blue").removeClass("pressed");
      }, 100);
      break;
    default:
      console.log("error");

  }
  console.log(original);
}

  $(document).on("keypress", function() {
      if(start===0){
        $("#level-title").text("Level 1");
        generateSequence();
      }
  });
