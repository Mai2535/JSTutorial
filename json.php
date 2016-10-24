<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JS Tutorial</title>
</head>
<body>
<h1>JSON&JS Tutorial</h1> <hr/>

<p id="demo"></p>

<button onclick="displayJSONData();" >Get JSON</button>

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
	
</script>
</body>
</html>
