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
function Room1(){
	if (CheckCookie('lookatnote')){
		let http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState === 4 && this.status === 200) {
				document.getElementById('storage').innerHTML = this.responseText;}};
		http.open('GET', 'js/txt/Note.txt', true);
		http.send();
	}
	if (CheckCookie('R1F')){
		//intentionally left blank for spookyness
	}
	else if (CheckCookie('R1S')){
		let http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState === 4 && this.status === 200) {
				document.getElementById('storage').innerHTML = this.responseText;}};
		http.open('GET', 'js/txt/Room1S.txt', true);
		http.send();
	}
	else{
		let http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState === 4 && this.status === 200) {
				document.getElementById('storage').innerHTML = this.responseText;}};
		http.open('GET', 'js/txt/Room1M.txt', true);
		http.send();
	}}
Room1();