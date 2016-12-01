//var name = prompt("please enter your name");

	var first = document.getElementById('form1');
	var input = document.getElementById('answer');
    function solution(){
    	var input1 = first.elements['first'].value;
    	var input2 = first.elements['second'].value;
    	
     input.innerHTML = (input1 + input2);
}
 function solution2(){
 	var b = document.getElementById('answer').value;
 	var c = document.getElementById('a');
 	c.innerHTML = (b + 2);
 }
function area(width,hight){
	return width * width();
}

var colors = ['white','blue','yellow', 'green'];

function Hotel (rooms, booked, pool){
	this.rooms = rooms;
	this.booked = booked;
	this.pool = pool;
	this.check = function(){
		return this.rooms - this.booked;
	};
}
function copy(){
	window.print()
};
function math(){
	var place = document.getElementById('random');
    place.textContent = Math.random();
};
function times(){
	var geto = document.getElementById('random');
	var result = geto * 2;
    get.textContent = result;
}
var score;

function scor(){if (score>75){
	document.write('Hadassah, You Passed! ');
	} else {
		document.write('you suck');
	}
}
//switch sample
var msg;
var welcome = 1;
welcome = 2;
switch (welcome){
	case 1:
	msg = "this is case one";
	break;
	case 2:
	msg = "this is case two";
	break;
}
//loops sample 
var what; 
var i = 2;
var scores = [21,22,23,24];
var arrayLength = scores.length


//for (i = 0; i < arrayLength; i++){
//	roundNumber = (i + 1);
what += scores[i];
//}
document.getElementById('header').innerHTML = name;



