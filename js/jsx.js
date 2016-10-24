// js script Tutorial
console.log("Script Ok !!");

function doCall() {
	var num = document.getElementById( "txtNumber" ).value ; 
	var status = testNumber( num ) ;
	
	if( status == "E" ){
		alertMessage( "Input is Empty" , "txtNumber" );
	}else if( status == "NN" ){
		alertMessage( "Input is not a Number" , "txtNumber" );
	}else if( status == "TL" ){
		alertMessage( "Input is too Low" , "txtNumber" );
	}else if( status == "TH" ){
		alertMessage( "Input is too high" , "txtNumber" );
	}else if( status == "S" ){
		document.getElementById( "errMessage" ).innerHTML = "The number " +  num + " is valid.";
	}
	
	
} 
function alertMessage( msg , txtID ){
	alert( msg );
	document.getElementById( txtID ).value = '' ;
	return false ;
}
function testNumber( num ){
	//var num = document.getElementById( "txtNumber" );
	var status  ; 
	try{
		if( num == "" ){ status = "E" ; throw " Empty" ; }
		num = Number( num ); 
		if( isNaN( num ) ){
			status = "NN" ;
			throw " not a Number" ;
		}else{
			if( num <= 0 ){
				status = "TL" ; 
 				throw " too low";
			}else if( num > 10 ){
				status = "TH" ; 
				throw " too high";
			}else{
				status = "S" ;
				//document.getElementById( "errMessage" ).innerHTML = "The number " +  num + " is valid.";
			}
		}
	}catch( error ){
		console.log( "Error : Input is " + error + "." );
	}
	
	return status ;
	//document.getElementById( "errMessage" ).innerHTML = "The number " + num.value + " is valid.";
}
// Util Function 

