let tanjiro_health = Math.floor(Math.random() * (300 - 100) + 100);
let zenitsu_health = Math.floor(Math.random() * (250 - 100) + 100);
let daki_health = Math.floor(Math.random() * (200 - 100) + 100);
let gyutaro_health = Math.floor(Math.random() * (400 - 100) + 100);
$(".tanjiro .character-health").html(tanjiro_health);
$(".zenitsu .character-health").html(zenitsu_health);
$(".daki .character-health").html(daki_health);
$(".gyutaro .character-health").html(gyutaro_health);
var count = 0;
var selectedChar;
var defenderChar;
var selChHealth;
var enemyClass;
var selectedChampHP;
var chars = {
  tanjiro: $(".tanjiro "),
  zenitsu: $(".zenitsu "),
  daki: $(".daki "),
  gyutaro: $(".gyutaro "),
};
$("#characters-section .select ").on("click", function () {
  selectedChar = $(this);
  selChHealth = parseInt(selectedChar.children(".character-health").text());

  $("#selected-character").append(selectedChar);
  var classOfSelected = this.className;
  classOfSelected = classOfSelected.trim().split(" ").pop();
  console.log(classOfSelected);
  delete chars[classOfSelected];
  for (var key in chars) {
    $("#available-to-attack-section").append(chars[key]);
  }
  $("#available-to-attack-section .select").on("click", function () {
    console.log("available to attack");
    $("#defender").html(selectedChar);
    enemyClass = this.className;
    enemyClass = enemyClass.trim().split(" ").pop().toUpperCase();
  });
});
$("#attack-button").on("click", function () {
  selectedChampHP = document.querySelector(
    "#selected-character .character .character-health "
  );
  var enemyHP = document.querySelector("#defender .select .character-health");

  var msg = document.createElement("div");
  const msgbox = $("#game-message");
  if (
    parseInt(selectedChampHP.innerHTML) > 0 &&
    parseInt(enemyHP.innerHTML) >= 0
  ) {
    var atckPoint1 = Math.floor(Math.random() * (50 - 10) + 10);
    var atckPoint2 = Math.floor(Math.random() * (30 - 10) + 10);

    enemyHP.innerHTML -= atckPoint1;
    selectedChampHP.innerHTML -= atckPoint2;
    msgbox.append(msg);
    msg.innerHTML += `Your attacked caused ${enemyClass} loss ${atckPoint1} point of his HP <br>`;
    msg.innerHTML += `${enemyClass}  attacked  caused you loss ${atckPoint2} point of your HP`;
  }
  if (
    parseInt(selectedChampHP.innerHTML) < 0 &&
    parseInt(enemyHP.innerHTML) > 0
  ) {
    alert("You Loss!");
    var Btn = document.createElement("button");
    Btn.append(document.createTextNode("Restart"));
    $("#game-message").remove();
    $("#restart").append(Btn);
  }
  if (
    parseInt(selectedChampHP.innerHTML) < 0 &&
    parseInt(enemyHP.innerHTML) < 0
  ) {
    alert("You Loss!");
    var Btn = document.createElement("button");
    Btn.append(document.createTextNode("Restart"));
    $("#game-message").remove();
    $("#restart").append(Btn);
  }
  if (
    parseInt(selectedChampHP.innerHTML) >= 0 &&
    parseInt(enemyHP.innerHTML) <= 0
  ) {
    selectedChampHP.innerHTML = selChHealth;
    $("#defender .select").remove();
  }
  if (
    selectedChampHP.innerHTML > 0 &&
    document.querySelector("#defender").innerHTML == ""
  ) {
    selectedChampHP.innerHTML = selChHealth;
    alert("You Won!");
  }
});
$(document).on("click", "#restart button", function () {
  window.location.reload();
});
