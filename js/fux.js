//JS Fuction 
console.log( ">>>>>> JS Ok..." );

function expressVal(){
	var x  = function( a,b ){ return a * b } ;
	var dis = document.getElementById( "display" );
	
	dis.innerHTML = x.toString();
}

//( function(){ alert( "Hello" ); } )();  invoke myself

function findMax(){
	var max = -Infinity ;
	if( max >  -0 ){
		console.log( ">>>> Type max : " +  max );
	}else{
		console.log( ">>>> Max less than 1 " );
	}
	
}