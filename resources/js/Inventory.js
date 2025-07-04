'use strict';
function CheckCookie(string){
	let name = string + '=';
	let cookiearray = document.cookie.split(';');
	for (let i=0; i <= cookiearray.length; i++){
		let c = cookiearray[i];
		while (c.charAt(0)===' ') {c = c.substring(1,c.length);}
		if (c.indexOf(name) === 0){
			let fname = c.substring(name.length,c.length);
			if (fname === 'true') {return true;}
			if (fname === 'false') {return false;}
		}
	}
}
function Inventory(){
	if (CheckCookie('Gem')){
		let elem = document.createElement('img');
		elem.setAttribute('src','images/Gem.png');
		document.getElementById('image').appendChild(elem);
	}
	if (CheckCookie('Sword')){
		let elem2 = document.createElement('img');
		elem2.setAttribute('src','images/SwordC.png');
		document.getElementById('image').appendChild(elem2);
	}
	if (CheckCookie('Glasses')){
		let elem3 = document.createElement('img');
		elem3.setAttribute('src','images/Glasses.png');
		document.getElementById('image').appendChild(elem3);
	}
	if (CheckCookie('Note')){
		let ele4 = document.createElement('img');
		ele4.setAttribute('src','images/Note.png');
		document.getElementById('image').appendChild(ele4);
	}}
Inventory();