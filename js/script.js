/**
 * @author tachi
 */
var action = "click";
var speed = 500;

$(document).ready(function(){
	$('li.q').on(action,function(){
		//Get Next Element
		$(this)
			.next().slideToggle(speed)
			//Sellect All Elements
			.siblings('li.a').slideUp();
		//Remove Rotate Class from all incative icons, and leave only on active
		var img = $(this).children('img');
		
	});
});
