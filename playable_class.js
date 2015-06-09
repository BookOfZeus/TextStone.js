/**
 * Payable_class.js
 *
 * Playable Class Object
 */
var CLASS_MAGE		= 0;
var CLASS_SHAMAN	= 1;
var CLASS_WARLOCK	= 2;
var CLASS_HUNTER	= 3;
var CLASS_PRIEST	= 4;
var CLASS_ROGUE	= 5;
var CLASS_DRUID	= 6;
var CLASS_WARRIOR	= 7;
var CLASS_PALADIN	= 8;

var CLASS_MAGE_NAME		= "Mage";
var CLASS_SHAMAN_NAME	= "Shaman";
var CLASS_WARLOCK_NAME	= "Warlock";
var CLASS_HUNTER_NAME	= "Hunter";
var CLASS_PRIEST_NAME	= "Priest";
var CLASS_ROGUE_NAME		= "Rogue";
var CLASS_DRUID_NAME		= "Druid";
var CLASS_WARRIOR_NAME	= "Warrior";
var CLASS_PALADIN_NAME	= "Paladin";

/**
 * PlayableClass
 */
var PlayableClass = function() {
}

/**
 * PlayableClass.getList(): Get the list of all available classes
 */
PlayableClass.prototype.getList = function() {

	var cls = Array();
	cls[CLASS_MAGE]		= CLASS_MAGE_NAME;
	cls[CLASS_SHAMAN]		= CLASS_SHAMAN_NAME;
	cls[CLASS_WARLOCK]	= CLASS_WARLOCK_NAME;
	cls[CLASS_HUNTER]		= CLASS_HUNTER_NAME;
	cls[CLASS_PRIEST]		= CLASS_PRIEST_NAME;
	cls[CLASS_ROGUE]		= CLASS_ROGUE_NAME;
	cls[CLASS_DRUID]		= CLASS_DRUID_NAME;
	cls[CLASS_WARRIOR]	= CLASS_WARRIOR_NAME;
	cls[CLASS_PALADIN]	= CLASS_PALADIN_NAME;
	return cls;
}

/**
 * PlayableClass.getName(): Get the name of the class
 */
PlayableClass.prototype.getName = function(id) {
	var list = this.getList();
	if(typeof list[id] === 'undefined') {
		return 'Unknown';
	}
	return list[id];
}

/**
 * PlayableClass.chooseRandom(): Get a random class
 */
PlayableClass.prototype.chooseRandom = function() {
	var list = this.getList();
	var rnd = Math.floor(Math.random() * list.length);
	return rnd;
}
