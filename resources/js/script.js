$(document).ready(function(){
	$('.tlt').textillate();
	
	$('#input1,#input2,#input3').keyup(function(e){
		if($(this).val().length==$(this).attr('maxlength'))
			$(this).next(':input').focus()
	})
})
