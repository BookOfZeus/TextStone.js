QUnit.test("Get List", function(assert) {

  var playableClass = new PlayableClass;
  var list = playableClass.getList();

	// Good

  assert.ok(list[CLASS_MAGE] == CLASS_MAGE_NAME, "Element 0 is 'Mage'");
  assert.ok(list[CLASS_SHAMAN] == CLASS_SHAMAN_NAME, "Element 1 is 'Shaman'");
  assert.ok(list[CLASS_WARLOCK] == CLASS_WARLOCK_NAME, "Element 2 is 'Warlock'");
  assert.ok(list[CLASS_HUNTER] == CLASS_HUNTER_NAME, "Element 3 is 'Hunter'");
  assert.ok(list[CLASS_PRIEST] == CLASS_PRIEST_NAME, "Element 4 is 'Priest'");
  assert.ok(list[CLASS_ROGUE] == CLASS_ROGUE_NAME, "Element 5 is 'Rogue'");
  assert.ok(list[CLASS_DRUID] == CLASS_DRUID_NAME, "Element 6 is 'Druid'");
  assert.ok(list[CLASS_WARRIOR] == CLASS_WARRIOR_NAME, "Element 7 is 'Warrior'");
  assert.ok(list[CLASS_PALADIN] == CLASS_PALADIN_NAME, "Element 8 is 'Paladin'");

	// Bad

  assert.ok(typeof list[10] == "undefined", "Element 10 is 'undefined'");

});

QUnit.test("Get Names", function(assert) {

  var playableClass = new PlayableClass;
	var name = null;

	// Good
  name = playableClass.getName(CLASS_MAGE);
  assert.ok(name == CLASS_MAGE_NAME, "The class name is 'Mage'");

  name = playableClass.getName(CLASS_SHAMAN);
  assert.ok(name == CLASS_SHAMAN_NAME, "The class name is 'Shaman'");

  name = playableClass.getName(CLASS_WARLOCK);
  assert.ok(name == CLASS_WARLOCK_NAME, "The class name is 'Warlock'");

  name = playableClass.getName(CLASS_HUNTER);
  assert.ok(name == CLASS_HUNTER_NAME, "The class name is 'Hunter'");

  name = playableClass.getName(CLASS_PRIEST);
  assert.ok(name == CLASS_PRIEST_NAME, "The class name is 'Priest'");

  name = playableClass.getName(CLASS_ROGUE);
  assert.ok(name == CLASS_ROGUE_NAME, "The class name is 'Rogue'");

  name = playableClass.getName(CLASS_DRUID);
  assert.ok(name == CLASS_DRUID_NAME, "The class name is 'Druid'");

  name = playableClass.getName(CLASS_WARRIOR);
  assert.ok(name == CLASS_WARRIOR_NAME, "The class name is 'Warrior'");

  name = playableClass.getName(CLASS_PALADIN);
  assert.ok(name == CLASS_PALADIN_NAME, "The class name is 'Paladin'");

	// Bad

  name = playableClass.getName(10);
  assert.ok(name == "Unknown", "The class name is 'Unknown'");

});

QUnit.test("Get Random", function(assert) {

  var playableClass = new PlayableClass;
	var randomClass = -1;
	var i = 0;
	var max = 100;

	for(; i < max; ++i) {
		randomClass = playableClass.chooseRandom();
		name = playableClass.getName(randomClass);
		assert.ok(name != "Unknown", "The class name (" + name + ") is not 'Unknown'");
	}

});
