function color(i, b){
	document.getElementById('background').style.backgroundColor = i;
	document.getElementById('title').style.color = b;
	document.getElementById('home').style.color = b;
}
var i = 1;
function show(){
	if(i == 1){
		document.getElementById('settings-menu').style.display = 'block';
		document.getElementById('settings-menu').className = 'settingsAnimation';
		/*setTimeout(function(){document.getElementById('yellow').style.display = 'block';}, 100);*/
		console.log(i);
		i = 2;
		
	}else if(i == 2){
		document.getElementById('settings-menu').className = 'settingsFadeout';
		setTimeout(function(){document.getElementById('settings-menu').style.display = 'none';}, 500);
		console.log(i);
		i = 1;
	}
	
}
function hide(){
	document.getElementById('settings-menu').style.display = 'none';
}
var holdtext = document.getElementById('holdtext');
function copy(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
function nee(){
	alert("IK ZIJ TOCH NEE!!!!");
}
function age(){
	document.getElementById('age').innerHTML = Math.floor((new Date() - new Date(2000, 03, 28).getTime()) / 3.15576e+10);
}
