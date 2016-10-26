//# JS DOM
console.log( ">>>> JS Ok.." );

(function(){
	var sh = document.getElementById( 'sHolder' );
	drowContentTbl( Number( sh.value ) );
})();

function selNumShaerHolder( num ){
	//var sh = document.getElementById( 'sHolder' ); 
	drowContentTbl( Number( num ) );
}
function keyCosts(){
	menageElement( "numShare" , "A" );
}
function keyNumShare( numShare ){
	//menageElement( "iPrice" ,"A" ) ;
	var costs = document.getElementById( 'costs' );
	var itemPrice = Number( costs.value ) / Number( numShare );
	document.getElementById( "iPrice" ).value = itemPrice ;
}

function drowContentTbl( numHolder ){
	var i  ;
	var tblText = "";
	
	for( i = 1 ; i <= numHolder ; i ++  ){
		tblText +=  '<tr>';
		tblText += '<td><input type="text" id="holder'+i+'"></td>';
		tblText += '<td><input type="text" id="numShare'+i+'" ></td>';
		tblText += '<td>Anable / Disable</td>' ;
		tblText += '<td><input type="text" id="notPay'+i+'" ></td>';
		tblText += '</tr>';
	}
	document.getElementById( 'tblDisplay' ).innerHTML = tblText ;
}

function menageElement( element , mode ){
	if( mode == "D" ){
		document.getElementById( element ).disabled = true ;
	}else if( mode == "A" ){
		document.getElementById( element ).disabled = false ;
	}
}

