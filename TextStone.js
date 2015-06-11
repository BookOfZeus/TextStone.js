/**
 * TextStone.js
 *
 * Core file
 */

var user = new User();
var computer = new User();

/* populate list */

var playableClass = new PlayableClass();
var playableClassList = playableClass.getList();
var i = 0;

for(; i < playableClassList.length; ++i) {
	// need to be fixed
	$('#playerChoice').append('<div data-cls_id="' + i + '">' + playableClassList[i] + '</div>');
}

/* Select class */
$('#playerChoice div').on('click', function() { 
	var id = $(this).data('cls_id');
	user.cls = id;
	var name = playableClass.getName(id);
	$('h2#user span').html(name);
	
});

/* Start the game */
$('button#ready').click(function() {

	// Set Computer
	computer.type = TYPE_COMPUTER;
	computer.cls = playableClass.chooseRandom();
	var name = playableClass.getName(computer.cls);
	$('h2#computer span').html(name);

});

