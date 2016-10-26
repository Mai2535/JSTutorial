// #JSON jsx
console.log(">>>> JS Ok !!");


var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj  = eval( "(" + text +  ")") ;

function displayJSONData( ){
	console.log( ">>>> Runnig..."  );
	doCallJSONFile();
	//console.log(">>> Type of value : " +  car[1].model  );
}

function doCallJSONFile(){
	var xmlhttp = new XMLHttpRequest() ; 
	var url = "myJson.txt";
	var out ; 
	xmlhttp.onreadystatechange = function () {
		if( this.readyState == 4 && this.status == 200 ){
			var myArr = JSON.parse( this.responseText ) ;
			out = fetchDataJSON( myArr );
			var val = document.getElementById( "demo" ); 
			val.innerHTML = out ;
			console.log( ">>>> Success.");
		}
	}
	xmlhttp.open( "GET" , url , true );
	xmlhttp.send();

}

var mime = { 
	mimeType : "application/json" 
} 

function fetchDataJSON( json ){
	var out = "";
	var i = 0 ; 
	for( i = 0 ; i < json.length ; i++ ){
		out += "<a href='"+ json[i].url +"'>" + json[i].display + "</a> <br/>" ;
	}
	return out ;
}
/* 
var arr  =  [
{ "display" : "HTML Tutorial" },
{ "display" : "CSS Tutorial" },
{ "display" : "JavaScript Tutorial" },
{ "display" : "jQuery Tutorial" },
{ "display" : "SQL Tutorial" },
] ; */

/* var person = new Object();
person.firstName  = "John";
person.lastName = "Due" ;

var person = { firstName : "Peter" , lastName:"Parker" } ;

function person( fname , lname  ){
	this.firstName = fname ; 
	this.lastName = lname ;
	this.changeName = function( newName ){
		this.firstName = newName ;
	}
}


person.changeName( "Mai" ) ; */

/* function objectPersaon(){
	var person = {
		firstName : "John" , 
		lastName  : "Due" , 
		age : 25 ,
		changeName : function( newName ){
			this.firstName = newName ; 
		},
		fullName : function(){
			return this.firstName + "  " + this.lastName ;
		}
	} ; 
	
	return person ; 
}

function getDataPerson( ){
	var p1 = objectPersaon();
	var dis1 = document.getElementById("display1");
	dis1.innerHTML = p1.fullName(); 
	
	var dis2 = document.getElementById( "display2" );
	p1.changeName( "Mai" );
	dis2.innerHTML = p1.fullName();
} */

/* var person = new Object(); 
person.firstName = "" ; 
person.lastName = "" ; 
person.fullName = function(){
	return this.firstName + " " + this.lastName ;
} */

function Person( fname , lname, age, addr ){
	this.firstName = fname ; 
	this.lastName = lname ; 
	this.age = age  ;
	this.address = addr ; 
	this.fullName = function(){
		return this.firstName + " " + this.lastName ;
	},
	this.changeName = function ( newName ){
		this.firstName = newName ;
	}
}

Person.prototype.nationality ="USA" ;

function doCallPerson(){
	var p1 = new Person( "Peter" , "Jonse" , 30 ,"New York" );
	var p2 = new Person( "John" , "Due" , 32 , "Chicago" );
	
	console.log( p1.nationality  );
	//console.log(">>>>>> Detail John : " + p2.firstName + " " + p2.nationality ) ;
}


/* function doCallObject(){
	
	//Person.prototype.nationality = "Thai" ;
	var p1 = new Person( "John" , "Due" ,25 , "BKK"  );
	var out1 = "" ; 
	out1 += p1.firstName + "<br/>"  ;
	out1 += p1.lastName + "<br/>"; 
	out1 += p1.age + "<br/>"; 
	out1 += p1.fullName() + "<br/>";
	var dis1 = document.getElementById("display1");
	dis1.innerHTML = out1 ;
	p1.changeName( "Peter" );
	var out2 = "" ; 
	p1.nationality = "England" ;
	out2 += p1.firstName  + "<br/>";
	out2 += p1.lastName + "<br/>"; 
	out2 += p1.age + "<br/>"; 
	out2 += p1.fullName() + "<br/>";
	out2 += p1.nationality ;
	
	var dis2 = document.getElementById( "display2" );
	dis2.innerHTML = out2 ;
	
} */

/* function person( fname , lname, age ){
	this.firstName = fname ; 
	this.lastName = lname ; 
	this.age = age ;
	this.changeName = function( newName ){
		this.firstName = newName ;
	}
} */


