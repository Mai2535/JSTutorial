<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JS Tutorial</title>
</head>
<body>
<h1>JSON&JS Tutorial</h1> <hr/>

<p id="display1" ></p>
<p id="display2" ></p>

<button onclick="doCallPerson();" >Show Object</button >
<!-- Import Script JS  -->
<!-- <script src="js/jsx.js" ></script> -->
<!-- Script JS  -->
<script>
	//alert( new Date().toString() );
	window.onload = downScripts( "js/json.js" ) ;
	function downScripts( fileScript ){
		var element = document.createElement( "script" );
		element.src =  fileScript ;
		document.body.appendChild( element );
	}
	
	
	function validateForm(){
		var txt = document.forms["myFrm"]["txtName"].value ; 
		if( txt == null || txt == "" ){
			document.getElementById( "display" ).innerHTML = "Name must be filled out" ;
			return false ;
		}
	}
	
</script>
</body>
</html>
