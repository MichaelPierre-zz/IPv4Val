$(document).ready(function(){
	$('.tlt').textillate();
	
	$('#input1,#input2,#input3').keyup(function(e){
		if($(this).val().length==$(this).attr('maxlength'))
			$(this).next(':input').focus()
	});

	$('#input4').keyup(function(e){
			if($(this).val().length==$(this).attr('maxlength'))
				$('#input5').focus()
	});

	$('#input5,#input6,#input7').keyup(function(e){
		if($(this).val().length==$(this).attr('maxlength'))
			$(this).next(':input').focus()
	});

	$('#input1,#input2,#input3,#input4,#input5,#input6,#input7,#input8').focus(function(){
			$(this).val('');
			$(this).attr('placeholder','');
	});

	/*
	$('#input8').focus(function(){
		$('ip').colorFlow({
		background: ['#85144b','#F012BE','#FFBC00', '#7FDBFF', '#01FF70'],
		text: ['#CF5D94', '#EFA9FA', '#665800', '#004966', '#00662C'],
		time: 25
	});	
	})
	*/
})


