function removeFirst(arr, target) {
  var idx = arr.indexOf(target);
  if (idx > -1) {
    arr.splice(idx, 1);
  }
  return arr;
}
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
var selChHealth1;
$("#characters-section .select ").on("click", function () {
  selectedChar = $(this);
  selChHealth = parseInt(selectedChar.children(".character-health").text());
  selChHealth1 = selChHealth;
  $("#selected-character").append(selectedChar);

  $("#available-to-attack-section ").append(
    document.querySelector("#characters-section")
  );
  $("#characters-section .section-title").html("");
  $("#available-to-attack-section .select").on("click", function () {
    console.log("available to attack");
    $("#defender").html(selectedChar);
  });
});
