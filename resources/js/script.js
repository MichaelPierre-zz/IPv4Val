$(document).ready(function(){	
	$(":input").on("focus", onFocus);
	$(":input").on("keydown", onKeyDown);
	$(":input").on("keyup", onKeyUp);		
	$("#ghost-button").on("click", onClick);
});


function onFocus(evt){
	$(this).attr("placeholder","");
}


function onKeyDown(evt){	
	var keyPressed = evt.keyCode;
	var inputID = $(this).attr("id");
	var This = $(this);
	var errorType = "";

	// Suppress error message but restrict user
	// from entering a space after inputing something
	if( keyPressed == 32 && $("#" + inputID).val() != ""){
		evt.preventDefault();
	} else

	// Restrict spaces 		  || Restrict tabs from empty input
	if( keyPressed == 32 || (keyPressed == 9 && $("#" + inputID).val() == "") ){
		evt.preventDefault();
		errorType = "spaceErr";
		switch(inputID){
			case 'input1':
			case 'input2':
			case 'input3':
			case 'input4':
				displayError("#destip-error", This, inputID, errorType);
				break;
			case 'input5':
			case 'input6':
			case 'input7':
			case 'input8':
				displayError("#yourip-error", This, inputID, errorType);
				break;
			case 'input9':
			case 'input10':
			case 'input11':
			case 'input12':
				displayError("#subnet-error", This, inputID, errorType);
				break;
			default:
				console.log("Something went wrong (restrict spaces if / switch: evt = " + evt);
		}
		
		$("#" + inputID).focus();	
		
		This.addClass("uk-form-danger");
		setTimeout( function() {
			This.removeClass("uk-form-danger");
		}, 1000);
	 } 
}


function onKeyUp(evt){	
	var keyPressed = evt.keyCode;
	var inputID = $(this).attr("id");
	var This = $(this);
	var errorType = "";

	// Allow valid IP range only
	 if(((keyPressed >= 48 && keyPressed <= 57) || (keyPressed >= 96 && keyPressed <= 105)) && 
		/^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(This.val()) ){
		if( This.val().length == This.attr("maxlength") ){
			if( $("#input4").is(":focus") ){
				$("#input5").focus();
			} else if ( $("#input8").is(":focus") ) {
				$("#input9").focus();
			} else {
				This.nextAll(":input").first().focus();
			}
		} 
	// Ignore spaces and tabs
	} else if (keyPressed == 32 || keyPressed == 9) {
		console.log("Space or tab entered");

		// Display error message
		} else {

		errorType = "inputErr";
		switch(inputID){
			case 'input1':
			case 'input2':
			case 'input3':
			case 'input4':			
				displayError("#destip-error", This, inputID, errorType);	
				clearInput(This);			
				break;
			case 'input5':
			case 'input6':
			case 'input7':
			case 'input8':
				displayError("#yourip-error", This, inputID, errorType);
				clearInput(This);
				break;
			case 'input9':
			case 'input10':
			case 'input11':
			case 'input12':
				displayError("#subnet-error", This, inputID, errorType);
				clearInput(This); 
				break;
			default:
				console.log("something went wrong: " + inputID);
		}
	} 	
}

function displayError(arg, This, inputID, errorType){
	
	// handle for error message i.e.
	// destip-error, yourip-error, or subnet-error
	var error_handle = $(arg);

	This.addClass("uk-form-danger");

	switch(inputID){
		case 'input1':
		case 'input5':
		case 'input9':
			if(errorType == "inputErr"){
				error_handle.addClass("error-message-pos1").text("0 - 255 only!");
			} else {
				error_handle.addClass("error-message-pos1").text("Enter something!");
			}
			break;
		case 'input2':		
		case 'input6':		
		case 'input10':		
			if(errorType == "inputErr"){
				error_handle.addClass("error-message-pos2").text("0 - 255 only!");
			} else {
				error_handle.addClass("error-message-pos2").text("Enter something!");
			}
			break;
		case 'input3':
		case 'input7':
		case 'input11':				
			if(errorType == "inputErr"){
				error_handle.addClass("error-message-pos3").text("0 - 255 only!");
			} else {
				error_handle.addClass("error-message-pos3").text("Enter something!");
			}
			break;
		case 'input4':
		case 'input8':
		case 'input12':			
			if(errorType == "inputErr"){
				error_handle.addClass("error-message-pos4").text("0 - 255 only!");
			} else {
				error_handle.addClass("error-message-pos4").text("Enter something!");
			}
			break;
		default:
			console.log("something went wrong: " + inputID);
	}
	
	setTimeout( function() {
		This.removeClass("uk-form-danger");
		$(arg).text("");
	}, 1000);
}


function clearInput(arg){
	setTimeout( function(){
		arg.val("");
	}, 1000);
}

function onClick(evt){
	var emptyInputs = [];
	var invalidInputs = [];
	var isValid = true;

	$("input").each(function(){
		if($(this).val() === ''){
			emptyInputs.push($(this).attr("id"));
			isValid = false;
			
			/* enter displayError(); here */

			$(this).addClass("uk-form-danger");
		} else if(!/^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test($(this).val())) {
			invalidInputs.push($(this).attr("id"));
		} else {
			$(this).addClass("uk-form-success");
		}
	})

	if( emptyInputs.length == 0 && invalidInputs.length == 0 && isValid ){
		document.getElementById("myform").onsubmit = function(){
			return true;

		} 
	} else {
			document.getElementById("myform").onsubmit = function(){
				return false;				
 		}
 		$("input#" + emptyInputs[0]).focus();
	}
}