function begin() {

var userChoice = prompt("Choose your hero");
var computerChoice = Math.random();

if (userChoice != "Mage" ) {
  userChoice = prompt("common! Pick again");
}

if (computerChoice<0.11) {
  computerChoice="Mage";
} else if (computerChoice>0.11 && computerChoice<0.22) {
  computerChoice="Shaman";
} else if (computerChoice>0.22 && computerChoice<0.33) {
  computerChoice="Warlock";
} else if (computerChoice>0.33 && computerChoice<0.44) {
  computerChoice="Hunter";
} else if (computerChoice>0.44 && computerChoice<0.55) {
  computerChoice="Priest";
} else if (computerChoice>0.55 && computerChoice<0.66) {
  computerChoice="Rogue";
} else if (computerChoice>0.66 && computerChoice<0.77) {
  computerChoice="Druid";
} else if (computerChoice>0.77 && computerChoice<0.88) {
  computerChoice="Warrior";
} else if (computerChoice>0.88) {
  computerChoice="Paladin";
}

console.log(computerChoice);
document.write("<div>You Choose: " + userChoice + "</div>");
document.write("<div>Computer Choose: " + computerChoice + "</div>");

};
