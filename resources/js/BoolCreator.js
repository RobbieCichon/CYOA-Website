'use strict';

let button = document.getElementById('start');
button.onclick = (function(){
	//Lots of bools here for dynamically altering the page
	document.cookie = 'Gem=false; path=/';
	document.cookie = 'Sword=false; path=/';
	document.cookie = 'Glasses=false; path=/';
	document.cookie = 'Note=false; path=/';
	document.cookie = 'lookatnote=false; path=/';
	document.cookie = 'R1S=true; path=/';
	document.cookie = 'R1=false; path=/';
	document.cookie = 'R1F=false; path=/';
	document.cookie = 'R2B=false; path=/';
	document.cookie = 'R2M=false; path=/';
	document.cookie = 'R2E=false; path=/';
	document.cookie = 'R3B=false; path=/';
	document.cookie = 'R3M=false; path=/';
	document.cookie = 'R3M2=false; path=/';
	document.cookie = 'R3E=false; path=/';
	document.cookie = 'R4B=false; path=/';
	document.cookie = 'R4M=false; path=/';
	document.cookie = 'R4M2=false; path=/';
	document.cookie = 'R4E=false; path=/';
	document.cookie = 'R4E2=false; path=/';
	document.cookie = 'R5B=false; path=/';
	document.cookie = 'R5M2=false; path=/';
	document.cookie = 'R5E=false; path=/';
	document.cookie = 'FinalRoom=false; path=/';
	document.cookie = 'FinalRoom2=false; path=/';
	document.cookie = 'FinalRoom3=false; path=/';
	document.cookie = 'winner=false; path=/';
	location.href='/Room1';
});