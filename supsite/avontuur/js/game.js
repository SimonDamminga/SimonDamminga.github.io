document.getElementById('option1').innerHTML = 'Start';
document.getElementById('verdwijn').innerHTML = '';
document.getElementById('option3').innerHTML = '';
document.getElementById('level_title').innerHTML = 'Start het spel';


var HasKey = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');

function Level1() {
	console.log("Level1()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ja';
	opt1.setAttribute("onClick", "javascript:Level2();");
	document.getElementById('level_title').innerHTML = 'Jij bent Max Verstappen, rij jij vettel van de baan?';
	document.getElementById('level_image').src = 'Ricciardo_Verstappen_Vettel_Spain_2016.jpg';
	document.getElementById('option2').innerHTML = 'Nee';

	// only allow option 2 if user has a key in his inventory

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Nee';
	opt2.onclick = function(){
		if(HasKey == true){
			Level2();
		} else {
			alert('Stuur eerst weg van Vettel');
		}
	}

	var key = document.getElementById('option3');

	key.onclick = function(){
		HasKey = true;
	}
}

function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 2: optie 1';
	opt1.onClick = 'javascript:Level3();';

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/level2.jpg';
}
function Level3() {
	console.log("Level3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 3: optie 1';
	opt1.onClick

	document.getElementById('level_title').innerHTML = 'Level 3';
}