<!DOCTYPE html >
<html>
<head>
	<meta charset="UTF-8" />
	<title>JS Tutorial</title>	
	<style>
		#container {
		  width: 400px;
		  height: 400px;
		  position: relative;
		  background: yellow;
		}
		#animate {
		  width: 50px;
		  height: 50px;
		  position: absolute;
		  background-color: red;
		}
	</style>
</head>
<body>
<h2>Test JS Scripts</h2>
<table>
	<tr>
		<td>Costs :</td>
		<td><input type="text" id="costs" onchange="keyCosts()" /></td>
	</tr>
	<tr>
		<td>Price :</td>
		<td><input type="text" id="numShare" onchange="keyNumShare(this.value);"  disabled ></td>
	</tr>
	<tr>
		<td>Item price :</td>
		<td><input type="text" id="iPrice"  disabled ></td>
	</tr>
	<tr>
		<td>ShareHolder :</td>
		<td>
			<select id="sHolder" onchange="selNumShaerHolder(this.value)">
				<option >select</option>
				<option value="1" selected >1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</td>
	</tr>
</table> <hr> <br/>
<p>Display Data : </p>
<table>
	<thead>
		<tr>
			<th>Holder</th>
			<th>Share Amount</th>
			<th>Anable / Disable</th>
			<th>Not Pay</th>
		</tr>
	</thead>
	<tbody id="tblDisplay">
	</tbody>
	<tfoot>
		<tr>
			<td align="center">
				Total
			</td>
			<td align="center" ><span id="totalsAmount">0.00</span></td>
			<td></td>
			<td align="center" ><span id="totalMoneyNotPay">0.00</span></td>
		</tr>
	</tfoot>
</table>


<script>

(function(){ // function invoke myself
	var element = document.createElement( 'script' );
	element.setAttribute( "src" , "js/dom.js" );
	document.body.appendChild( element );
	//document.getElementById( 'tblDisplay' ).innerHTML = "<tr><td>Hello</td></tr>";
})();
	
</script>
</body>
</html>