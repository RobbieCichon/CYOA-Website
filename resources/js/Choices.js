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
function ReturnWinner(){
	if (CheckCookie('winner')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Be a winner?');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Be a winner?';
		a.href = '/FinalRoom';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'FinalRoom3=true; path=/';
		};
	}
}
ReturnWinner();
//I want to go ahead and apologize for this one. It's bad, I know. It checks for each room and what you have, so essentially there's gonna be about 15 if statements.
function Choices(){
	if (CheckCookie('FinalRoom3')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('You win!');
		a.appendChild(linkText);
		a.title = 'You Win!';
		document.body.appendChild(a);
	}
	else if (CheckCookie('lookatnote')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'lookatnote=false; path=/';
		};
	}
	else if (CheckCookie('R1S') || CheckCookie('R1')){
		document.cookie = 'R1S=false; path=/';
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go North.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go North';
		a.href = '/Room2';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R1=false; path=/';
			if (CheckCookie('Gem') || CheckCookie('Sword')){
				document.cookie= 'R2E=true; path=/';
			}
			else {
				document.cookie= 'R2B=true; path=/';}
		};

		let linebreak = document.createElement('br');
		document.body.appendChild(linebreak);

		let a2 = document.createElement('a');
		let linkText2 = document.createTextNode('Go West.');
		a2.appendChild(linkText2);
		a2.setAttribute('id','a2');
		a2.title = 'Go West';
		a2.href = '/Room3';
		document.body.appendChild(a2);

		let fa2 = document.getElementById('a2');
		fa2.onclick = function(){
			document.cookie= 'R1=false; path=/';
			if (CheckCookie('Sword')){
				document.cookie= 'R3E=true; path=/';
			}
			else {document.cookie= 'R3B=true; path=/';}
		};

		let linebreak2 = document.createElement('br');
		document.body.appendChild(linebreak2);

		let a3 = document.createElement('a');
		let linkText3 = document.createTextNode('Go South.');
		a3.appendChild(linkText3);
		a3.setAttribute('id','a3');
		a3.title = 'Go South';
		a3.href = '/Room4';
		document.body.appendChild(a3);


		let fa3 = document.getElementById('a3');
		fa3.onclick = function(){
			document.cookie= 'R1=false; path=/';
			if (CheckCookie('Glasses')){
				document.cookie= 'R4E=true; path=/';
			}
			else {document.cookie= 'R4B=true; path=/';}
		};
          
		let linebreak3 = document.createElement('br');
		document.body.appendChild(linebreak3);

		let a4 = document.createElement('a');
		let linkText4 = document.createTextNode('Go East.');
		a4.appendChild(linkText4);
		a4.setAttribute('id','a4');
		a4.title = 'Go West';
		a4.href = '/Room5';
		document.body.appendChild(a4);

		let fa4 = document.getElementById('a4');
		fa4.onclick = function(){
			document.cookie= 'R1=false; path=/';
			document.cookie= 'R5B=true; path=/';
		};

	}
	else if (CheckCookie('R1F')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Down.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Down';
		a.href = '/FinalRoom';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R1F=false; path=/';
			document.cookie= 'FinalRoom=true; path=/';
		};
	}
	else if (CheckCookie('R2B')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R2B=false; path=/';
			document.cookie= 'R1=true; path=/';
		};

		let linebreak = document.createElement('br');
		document.body.appendChild(linebreak);

		let a2 = document.createElement('a');
		let linkText2 = document.createTextNode('Investigate.');
		a2.appendChild(linkText2);
		a2.setAttribute('id','a2');
		a2.title = 'Investigate';
		a2.href = '';
		document.body.appendChild(a2);
		document.getElementById('a2').onclick = function(){
			document.cookie = 'Gem=true; path=/';
			document.cookie = 'R2B=false; path=/';
			document.cookie = 'R2M=true; path=/';};

	}
	else if (CheckCookie('R2E')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R2E=false; path=/';
			document.cookie= 'R1=true; path=/';
		};
	}
	else if (CheckCookie('R2M')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R2M=false; path=/';
			document.cookie= 'R1=true; path=/';
		};
	}
	else if (CheckCookie('R3B')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R3B=false; path=/';
			document.cookie= 'R1=true; path=/';
		};

		let linebreak = document.createElement('br');
		document.body.appendChild(linebreak);

		if (CheckCookie('Gem')){
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Use Gem.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Use Gem';
			a2.href = '';
			document.body.appendChild(a2);
			document.getElementById('a2').onclick = function(){
				document.cookie = 'R3B=false; path=/';
				document.cookie = 'Gem=false; path=/';
				document.cookie = 'Sword=true; path=/';
				document.cookie = 'R3M2=true; path=/';
			};}
		else{
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Investigate.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Investigate';
			a2.href = '';
			document.body.appendChild(a2);
			document.getElementById('a2').onclick = function(){
				document.cookie = 'R3B=false; path=/';
				document.cookie = 'R3M=true; path=/';
			};}}
	else if (CheckCookie('R3M') || CheckCookie('R3M2')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R3M=false; path=/';
			document.cookie= 'R3M2=false; path=/';
			document.cookie= 'R1=true; path=/';
		};
	}
	else if (CheckCookie('R3E')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R3E=false; path=/';
			document.cookie= 'R1=true; path=/';
		};
	}
	else if (CheckCookie('R4B')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R4B=false; path=/';
			document.cookie= 'R1=true; path=/';
		};

		let linebreak = document.createElement('br');
		document.body.appendChild(linebreak);

		if (CheckCookie('Gem')){
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Use Gem.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Use Gem';
			a2.href = '';
			document.body.appendChild(a2);
			document.getElementById('a2').onclick = function(){
				document.cookie = 'R4B=false; path=/';
				document.cookie = 'R4M=true; path=/';
			};}

		else if (CheckCookie('Sword')){
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Use Sword.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Use Sword';
			a2.href = '';
			document.body.appendChild(a2);
			document.getElementById('a2').onclick= function(){
				document.cookie='R4B=false; path=/';
				document.cookie='R4E2=true; path=/';
				document.cookie = 'Glasses=true; path=/';
				document.cookie = 'Note=true; path=/';
			};}
		else{
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Investigate.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Investigate';
			a2.href = '';
			document.body.appendChild(a2);
			document.getElementById('a2').onclick= function(){
				document.cookie='R4B=false; path=/';
				document.cookie='R4M2=true; path=/';
			};}
	}
	else if (CheckCookie('R4M2') || CheckCookie('R4M')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R4B=true; path=/';
			document.cookie= 'R4M2=false; path=/';
			document.cookie= 'R4M=false; path=/';
		};
	}
	else if (CheckCookie('R4E2')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R4E=true; path=/';
			document.cookie= 'R4E2=false; path=/';
		};
	}
	else if (CheckCookie('R4E')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R4E=false; path=/';
			document.cookie= 'R4E2=false; path=/';
			document.cookie= 'R1=true; path=/';
		};
	}
	else if (CheckCookie('R5B')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '/Room1';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'R5B=false; path=/';
			document.cookie= 'R1=true; path=/';
		};
          
		let linebreak = document.createElement('br');
		document.body.appendChild(linebreak);

		if (CheckCookie('Glasses')){
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Use Glasses.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Use Glasses';
			a2.href = '';
			document.body.appendChild(a2);

			let fa2 = document.getElementById('a2');
			fa2.onclick = function(){
				document.cookie= 'R5B=false; path=/';
				document.cookie= 'R5E=true; path=/';
			};}
		else{
			let a2 = document.createElement('a');
			let linkText2 = document.createTextNode('Investigate.');
			a2.appendChild(linkText2);
			a2.setAttribute('id','a2');
			a2.title = 'Investigate';
			a2.href = '';
			document.body.appendChild(a2);
			let fa2 = document.getElementById('a2');
			fa2.onclick = function(){
				document.cookie= 'R5B=false; path=/';
				document.cookie= 'R5M2=true; path=/';
			};
		}
	}
	else if (CheckCookie('R5E') || CheckCookie('R5M2')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '';
		document.body.appendChild(a);

		let fa = document.getElementById('a');
		fa.onclick = function(){
			if (CheckCookie('R5M2')){
				document.cookie= 'R5B=true; path=/';}
			else if (CheckCookie('R5E')){
				document.cookie= 'R5E=false; path=/';
				document.cookie= 'R1F=true; path=/';}
		};
	}
	else if (CheckCookie('FinalRoom')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Pull North Lever.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Pull North Lever';
		a.href = '';
		document.body.appendChild(a);
		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'FinalRoom=false; path=/';
			document.cookie= 'FinalRoom2=true; path=/';
		};


		let linebreak = document.createElement('br');
		document.body.appendChild(linebreak);

		let a2 = document.createElement('a');
		let linkText2 = document.createTextNode('Pull East Lever.');
		a2.appendChild(linkText2);
		a2.setAttribute('id','a2');
		a2.title = 'Pull East Lever';
		a2.href = '';
		document.body.appendChild(a2);
		let fa2 = document.getElementById('a2');
		fa2.onclick = function(){
			document.cookie= 'FinalRoom=false; path=/';
			document.cookie= 'FinalRoom2=true; path=/';
		};


		let linebreak2 = document.createElement('br');
		document.body.appendChild(linebreak2);

		let a3 = document.createElement('a');
		let linkText3 = document.createTextNode('Pull South Lever.');
		a3.appendChild(linkText3);
		a3.setAttribute('id','a3');
		a3.title = 'Pull South Lever';
		a3.href = '';
		document.body.appendChild(a3);
		let fa3 = document.getElementById('a3');
		fa3.onclick = function(){
			document.cookie= 'FinalRoom=false; path=/';
			document.cookie= 'FinalRoom2=true; path=/';
		};


		let linebreak3 = document.createElement('br');
		document.body.appendChild(linebreak3);

		let a4 = document.createElement('a');
		let linkText4 = document.createTextNode('Pull West Lever.');
		a4.appendChild(linkText4);
		a4.setAttribute('id','a4');
		a4.title = 'Pull West Lever';
		a4.href = '';
		document.body.appendChild(a4);
		let fa4 = document.getElementById('a4');
		fa4.onclick = function(){
			document.cookie= 'FinalRoom=false; path=/';
			document.cookie= 'FinalRoom3=true; path=/';
		};
	}
	else if (CheckCookie('FinalRoom2')){
		let a = document.createElement('a');
		let linkText = document.createTextNode('Go Back.');
		a.appendChild(linkText);
		a.setAttribute('id','a');
		a.title = 'Go Back';
		a.href = '';
		document.body.appendChild(a);
     
		let fa = document.getElementById('a');
		fa.onclick = function(){
			document.cookie= 'FinalRoom=true; path=/';
			document.cookie= 'FinalRoom2=false; path=/';
		};
	}
	if(CheckCookie('Note') && !CheckCookie('lookatnote') && !CheckCookie('FinalRoom3')){

		let binebreak = document.createElement('br');
		document.body.appendChild(binebreak);

		let b = document.createElement('a');
		let blinkText = document.createTextNode('Read Note.');
		b.appendChild(blinkText);
		b.setAttribute('id','b');
		b.title = 'Read Note';
		b.href = '';
		document.body.appendChild(b);
		document.getElementById('b').onclick=function(){
			document.cookie = 'lookatnote=true; path=/';};
	}}

Choices();