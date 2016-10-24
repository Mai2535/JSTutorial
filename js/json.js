// #JSON jsx
console.log(">>>> JS Ok !!");


var jsonEmp = {"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]} ;

var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}'; 
var obj = JSON.parse( text ) ;

function displayJSONData( ){
	var val = document.getElementById( "demo" ); 
	val.innerHTML = obj.name + " <br/>"
	+ obj.street + " <br/>" 
	+ obj.phone  ;
	
	//console.log(">>> Type of value : " +  car[1].model  );
}


