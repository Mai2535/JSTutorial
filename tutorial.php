<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JS Tutorial</title>
</head>
<body>
<h1>JS Tutorial</h1>

<input type="text" id="txtNumber" onblur="doCall();"  /> <br/> <br/>
<button onclick="doCall();" >Test Number</button> <br></br>
<span id="errMessage" ></span >


<!-- Import Script JS  -->
<!-- <script src="js/jsx.js" ></script> -->
<!-- Script JS  -->
<script>
	//alert( new Date().toString() );
	window.onload = downScripts( "js/jsx.js" ) ;
	function downScripts( fileScript ){
		var element = document.createElement( "script" );
		element.src =  fileScript ;
		document.body.appendChild( element );
	}
</script>
</body>
</html>
