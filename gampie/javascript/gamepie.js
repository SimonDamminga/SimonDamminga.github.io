document.getElementById('een').innerHTML = '';
document.getElementById('twee').innerHTML = '';
document.getElementById('image1').src = '';
//van stylesheet wisselen
function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet)
}
//level 1
function level1() {
	document.getElementById('image1').src = 'inhalen.jpg';
	document.getElementById('titel').innerHTML = 'Level 1'
	document.getElementById('start-knop').innerHTML = '';
	//variables
	var opt1 = document.getElementById('een');
	opt1.innerHTML = 'Wel inhalen';
	var opt2 = document.getElementById('twee');
	opt2.innerHTML = 'Niet inhalen';
	//button
	opt1.onclick = function level11(){
		document.getElementById('image1').src = 'f1.jpg';
		//variables
		var opt1 = document.getElementById('een');
		opt1.innerHTML = 'Links';
		var opt2 = document.getElementById('twee');
		opt2.innerHTML = 'Rechts';
		//buttons
		opt1.onclick = function level12(){
		document.getElementById('image1').src = 'crash.jpg';
		document.getElementById('titel').innerHTML = 'FAIL';
		}
		opt2.onclick = function(){
			var opt1 = document.getElementById('een');
			opt1.innerHTML = 'Terug';
			opt1.onClick = 'javascript:level1();';
			var opt2 = document.getElementById('twee');
			opt1.innerHTML = 'Volgend level';
			opt1.onClick = 'javascript:level2();';

			document.getElementById('image1').src = '3rd.jpg';
			document.getElementById('titel').innerHTML = 'JE BENT 3E GEFINISHED';
		}	
	}
	opt2.onclick = function(){
		var opt2 = document.getElementById('twee');
		opt2.innerHTML = 'Vlogend level'
		document.getElementById('een').innerHTML = 'Terug';
		document.getElementById('titel').innerHTML = 'JE HEBT HEM NIET KUNNEN INHALEN, MAAR GOEDE POGING!';
		document.getElementById('image1').src = 'maxvsper.jpg';

	}
}
//level 2
function level2() {
	document.getElementById('een').innerHTML = 'oke goed';
}