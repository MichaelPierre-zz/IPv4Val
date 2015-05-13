$(document).ready(function(){
	$(":input").on("keyup", onKeyUp);
	$(":input").on("focus", onFocus);
	
});


function onKeyUp(evt){
	if($(this).val().length==$(this).attr('maxlength')){
		if($(":input#input4").is(":focus")){
			$("#input5").focus();
		} else if($(":input#input8").is(":focus")){
			$("#input9").focus();
		} else {
			$(this).nextAll(':input').first().focus();	
		}
	}
}

function onFocus(evt){
	$(this).val('');
	$(this).attr('placeholder','');
}