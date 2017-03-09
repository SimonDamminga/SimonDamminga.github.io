document.getElementById('een').innerHTML = '';
document.getElementById('twee').innerHTML = '';
document.getElementById('image1').src = '';
document.getElementById('titel').innerHTML = 'THE F1 ADVENTURE OF MAX VERSTAPPEN!';
document.getElementById('start-knop').innerHTML = 'START';
var knopje = document.getElementById('knopje');
knopje.style.cssText = 'display:none;';
var hasSoftTire = false;
var hasMediumTire = false;
var hasSoftTire1 = false;
var hasMediumTire1 = false;
var hasSoftTire2 = false;
var hasSuperSoftTire2 = false;

//other stylesheet
function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet)
}
//level1
function level1(){
	knopje.style.cssText = 'display:block; text-align: center;';
	document.getElementById('start-knop').innerHTML = '';
	document.getElementById('start-knop').style.cssText = 'display: none;';
	document.getElementById('titel').innerHTML = 'Level 1, ga je wel of niet inhalen?';
	document.getElementById('image1').src = 'inhalen.jpg';

	var welinhalen = document.getElementById('een');
	welinhalen.style.cssText = 'display:block; text-align: center;';
	welinhalen.innerHTML = 'Wel inhalen'
	welinhalen.setAttribute("onClick", "javascript:welinhalen();");

	var nietinhalen = document.getElementById('twee');
	nietinhalen.style.cssText = 'display:block;';
	nietinhalen.innerHTML = 'Niet inhalen';
	nietinhalen.setAttribute("onClick","javascript:nietinhalen()")
}
//level1 wel inhalen
function welinhalen() {
	document.getElementById('start-knop').style.cssText = 'display: none;';
	knopje.style.cssText = 'display:block; text-align: center;';
	document.getElementById('image1').src = 'f1.jpg'; 
	var links = document.getElementById('een');
	links.innerHTML = 'Links';
	links.setAttribute("onClick", "javascript:crash();");

	var rechts = document.getElementById('twee');
	rechts.innerHTML = 'Rechts';
	rechts.setAttribute("onClick", "javascript:derde();");
}
//links
function crash(){
	knopje.style.cssText = 'display:block; text-align: center;';
	var opnieuw = document.getElementById('start-knop');
	var terug = document.getElementById('een');
	var back = document.getElementById('twee');
	document.getElementById('titel').innerHTML = 'Crash';
	document.getElementById('image1').src = 'crash.jpg';
	opnieuw.style.cssText = 'display:block;';
	opnieuw.innerHTML = 'OPNIEUW';
	opnieuw.setAttribute("onClick", "javascript:level1();");
	terug.style.cssText = 'display:none;';
	back.style.cssText = 'display:none;';
}
//rechts
function derde(){
	document.getElementById('start-knop').style.cssText = 'display: none;';
	knopje.style.cssText = 'display:block; text-align: center;';
	document.getElementById('titel').innerHTML = 'Je hebt je best gedaan maar bent 3e gefinishes';
	var terug = document.getElementById('een');
	terug.innerHTML = 'Terug';
	terug.setAttribute("onClick", "javascript:level1();");

	var volgende = document.getElementById('twee');
	volgende.innerHTML = 'Volgend level';
	volgende.setAttribute("onClick", "javascript:level2()")
}
//level 1 niet inhalen
function nietinhalen(){
	knopje.style.cssText = 'display:block; text-align: center;';
	document.getElementById('titel').innerHTML = 'Je hebt je best gedaan maar bent 4e gefinishes'

	var terug = document.getElementById('een');
	terug.innerHTML = 'Terug';
	terug.setAttribute("onClick", "javascript:level1();");

	var volgende = document.getElementById('twee');
	volgende.innerHTML = 'Volgend level';
	volgende.setAttribute("onClick", "javascript:level2();");
}
//level 2
function level2(){
	document.getElementById('image1').src = 'pitstop.jpg';
	knopje.style.cssText = 'display:block; text-align: center;';
	document.getElementById('titel').innerHTML = 'Level 2, kies een band';
	var soft = document.getElementById('twee');
	soft.style.cssText = 'display: block; color: yellow;';
	soft.innerHTML = 'Soft band';
	
	
	var medium = document.getElementById('een');
	medium.innerHTML = 'Medium band';
	medium.setAttribute("onClick", "javascript:yesno();");
	var optie2 = document.getElementById('start-knop');
	optie2.style.cssText = 'display: block;';
	optie2.innerHTML = 'Volgend level';
	
	optie2.onclick = function(){
		if(hasSoftTire == true){
			Soft();
		}else if(hasMediumTire == true){
			Medium();
		}else{
			alert('kies eerst een band');
		}
	}
	medium.onclick = function yesno(){
		hasMediumTire = true;
		document.getElementById('titel').innerHTML = 'Je hebt de medium band gekozen';
		document.getElementById('een').style.cssText = 'background-color: #b70000;';
		document.getElementById('twee').style.cssText = 'display: none;';
	}
	soft.onclick = function yesno1(){
		hasSoftTire = true;
		document.getElementById('titel').innerHTML = 'Je hebt de soft band gekozen';
		document.getElementById('twee').style.cssText = 'background-color: #b70000;';
		document.getElementById('een').style.cssText = 'display: none;';
	}
}
function Medium(){
	document.getElementById('titel').innerHTML = 'Je hebt de medium band gekozen, hiermee heb je de race uit kunnen rijden en dus gewonnen!'
	document.getElementById('start-knop').style.cssText = 'display: none;';
	var terug = document.getElementById('een');
	terug.innerHTML = 'Terug';
	terug.setAttribute("onClick", "javascript:level2();");
	terug.style.cssText = 'background-color: tomato;';
	var volgende = document.getElementById('twee');
	volgende.style.cssText = 'background-color: tomato;';
	volgende.innerHTML = 'Volgend level';
	volgende.setAttribute("onClick", "javascript:level3();");
}
function Soft() {
	document.getElementById('titel').innerHTML = 'Je moest nog een pitstop maken en dus ben je 2e geworden!'
	document.getElementById('start-knop').style.cssText = 'display: none;';
	var terug = document.getElementById('een');
	terug.innerHTML = 'Terug';
	terug.style.cssText = 'background-color: tomato;';
	var volgende = document.getElementById('twee');
	volgende.style.cssText = 'background-color: tomato;';
	volgende.innerHTML = 'Volgend level';
	volgende.setAttribute("onClick", "javascript:level3();");
}
function level3(){
	document.getElementById('titel').innerHTML = 'Dit is de laatste race, je staat 5 punten voor op de rest, wat ga je doen?';
	var next = document.getElementById('start-knop'); 
	next.style.cssText = 'display: block;';
	next.innerHTML = 'next';
	next.setAttribute("onClick", "javascript:quali();");
	var hde = document.getElementById('een');
	hde.style.cssText = 'display: none;';
	var hde2 = document.getElementById('twee');
	hde2.style.cssText = 'display: none;';
}
function quali(){
	document.getElementById('titel').innerHTML = 'Kwalificeren Q1, Q2 en Q3'; 
	document.getElementById('start-knop').style.cssText = 'display: none;';
	var knop1 = document.getElementById('een');
	var knop2 = document.getElementById('twee');
	knop1.style.cssText = 'display: block;';
	knop2.style.cssText = 'display: block;';
	knop1.setAttribute("onClick", "javascript:run1();");
	knop2.setAttribute("onClick", "javascript:run2();");
	knop1.innerHTML = '1 run?';
	knop2.innerHTML = '2 runs?';
}
function run1(){
	document.getElementById('titel').innerHTML = 'Je hebt 1 run gedaan en bent 12e geworden in Q1';
	var verberg1 = document.getElementById('twee');
	verberg1.style.cssText = 'display: none;';
	var verberg = document.getElementById('een');
	verberg.style.cssText = 'display: none;';
	var volgende = document.getElementById('start-knop');
	volgende.style.cssText = 'display: block';
	volgende.innerHTML = 'Volgende'; 
	volgende.setAttribute("onClick", "javascript:quali2();");

}
function run2(){
	document.getElementById('titel').innerHTML = 'Je hebt 2 runs gedaan en dus ben je 3e geworden in Q1';
	var verberg = document.getElementById('een');
	verberg.style.cssText = 'display: none;';
	var verberg1 = document.getElementById('twee');
	verberg1.style.cssText = 'display: none;'; 
	var volgende = document.getElementById('start-knop');
	volgende.style.cssText = 'display: block';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:quali2();");	
}
function quali2(){
	document.getElementById('titel').innerHTML = 'Dit is Q2, doe je 1 of 2 runs?';
	document.getElementById('start-knop').style.cssText = 'display: none;';
	var knop1 = document.getElementById('een');
	var knop2 = document.getElementById('twee');
	knop1.style.cssText = 'display: block;';
	knop2.style.cssText = 'display: block;';
	knop1.setAttribute("onClick", "javascript:run11();");
	knop2.setAttribute("onClick", "javascript:run21();");
	knop1.innerHTML = '1 run?';
	knop2.innerHTML = '2 runs?';
}
function run11(){
	document.getElementById('titel').innerHTML = 'Je hebt 1 run gedaan en bent 8e geworden in Q2';
	var verberg1 = document.getElementById('twee');
	verberg1.style.cssText = 'display: none;';
	var verberg = document.getElementById('een');
	verberg.style.cssText = 'display: none;';
	var volgende = document.getElementById('start-knop');
	volgende.style.cssText = 'display: block';
	volgende.innerHTML = 'Volgende'; 
	volgende.setAttribute("onClick", "javascript:quali3();");

}
function run21(){
	document.getElementById('titel').innerHTML = 'Je hebt 2 runs gedaan en dus ben je 4e geworden in Q2';
	var verberg = document.getElementById('een');
	verberg.style.cssText = 'display: none;';
	var verberg1 = document.getElementById('twee');
	verberg1.style.cssText = 'display: none;'; 
	var volgende = document.getElementById('start-knop');
	volgende.style.cssText = 'display: block';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:quali3();");	
}
function quali3(){
	document.getElementById('titel').innerHTML = 'Dit is Q3, doe je 1 of 2 runs?';
	document.getElementById('start-knop').style.cssText = 'display: none;';
	var knop1 = document.getElementById('een');
	var knop2 = document.getElementById('twee');
	knop1.style.cssText = 'display: block;';
	knop2.style.cssText = 'display: block;';
	knop1.setAttribute("onClick", "javascript:run111();");
	knop2.setAttribute("onClick", "javascript:run211();");
	knop1.innerHTML = '1 run?';
	knop2.innerHTML = '2 runs?';
}
function run111(){
	document.getElementById('titel').innerHTML = 'Je hebt 1 run gedaan en bent 6e geworden in Q3';
	var verberg1 = document.getElementById('twee');
	verberg1.style.cssText = 'display: none;';
	var verberg = document.getElementById('een');
	verberg.style.cssText = 'display: none;';
	var volgende = document.getElementById('start-knop');
	volgende.style.cssText = 'display: block';
	volgende.innerHTML = 'Volgende'; 
	volgende.setAttribute("onClick", "javascript:raceStart2();");

}
function run211(){
	document.getElementById('titel').innerHTML = 'Je hebt 2 runs gedaan en dus ben je 1e geworden in Q3';
	var verberg = document.getElementById('een');
	verberg.style.cssText = 'display: none;';
	var verberg1 = document.getElementById('twee');
	verberg1.style.cssText = 'display: none;'; 
	var volgende = document.getElementById('start-knop');
	volgende.style.cssText = 'display: block';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:raceStart();");	
}
function raceStart(){
	document.getElementById('titel').innerHTML = 'Dit is de beslissende race, gelukkig sta je 1e';
	document.getElementById('start-knop').setAttribute("onClick", "javascript:pitstop1();");
}
function raceStart2(){
	document.getElementById('titel').innerHTML = 'Dit is de beslissende race, helaas ben je 6e dus er is werk aan de winkel';
	document.getElementById('een').style.cssText = 'display: none;';
	document.getElementById('twee').style.cssText = 'display: none;';
	var next = document.getElementById('start-knop');
	next.innerHTML = 'Volgende';
	next.setAttribute("onClick", "javascript:pitstop1();");
}
function pitstop1(){
	document.getElementById('image1').src = 'pitstop.jpg';
	document.getElementById('titel').innerHTML = 'Dit is de eerste pitstop. Welke band kies je?';
	var soft = document.getElementById('twee');
	soft.style.cssText = 'display: block; color: yellow;';
	soft.innerHTML = 'Soft band';
	var medium = document.getElementById('een');
	medium.style.cssText = 'display: block;';
	medium.innerHTML = 'Medium band';
	medium.setAttribute("onClick", "javascript:yesno();");
	var optie2 = document.getElementById('start-knop');
	optie2.style.cssText = 'display: block;';
	optie2.innerHTML = 'Volgend level';
	
	optie2.onclick = function(){
		if(hasSoftTire1 == true){
			Soft1();
		}else if(hasMediumTire1 == true){
			Medium1();
		}else{
			alert('kies eerst een band');
		}
	}
	medium.onclick = function yesno(){
		hasMediumTire1 = true;
		document.getElementById('titel').innerHTML = 'Je hebt de medium band gekozen';
		document.getElementById('een').style.cssText = 'background-color: #b70000;';
		document.getElementById('twee').style.cssText = 'display: none;';
	}
	soft.onclick = function yesno1(){
		hasSoftTire1 = true;
		document.getElementById('titel').innerHTML = 'Je hebt de soft band gekozen';
		document.getElementById('twee').style.cssText = 'background-color: #b70000;';
		document.getElementById('een').style.cssText = 'display: none;';
	}
}
function Soft1(){
	document.getElementById('titel').innerHTML = 'Op de soft band ben je sneller dan de rest maar je moet nog een pitstop maken';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var volgende = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:pitstop2();");
}
function Medium1(){
	document.getElementById('titel').innerHTML = 'Op de medium band ben je even snel als de rest, en je blijft eerste';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var volgende = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:racefinish();");
}
function racefinish(){
	document.getElementById('titel').innerHTML = 'Je hebt gewonnen! dus ben je wereldkampioen!';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var opnieuw = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	opnieuw.innerHTML = 'Opnieuw starten';
	opnieuw.setAttribute("onClick", "javascript:level1();");	
}
function pitstop2(){
	document.getElementById('image1').src = 'pitstop.jpg';
	document.getElementById('titel').innerHTML = 'Omdat je de soft band hebt gekozen moet je nog een pitstop maken, welke band kies je nu?';
	var soft = document.getElementById('twee');
	soft.style.cssText = 'display: block; color: yellow;';
	soft.innerHTML = 'Soft band';
	var supersoft1 = document.getElementById('een');
	supersoft1.style.cssText = 'display: block; color: red;';
	supersoft1.innerHTML = 'Supersoft band';
	supersoft1.setAttribute("onClick", "javascript:yesno();");
	var optie2 = document.getElementById('start-knop');
	optie2.style.cssText = 'display: block;';
	optie2.innerHTML = 'Volgend level';
	
	optie2.onclick = function(){
		if(hasSuperSoftTire2 == true){
			supersoft();
		}else if(hasSoftTire2 == true){
			Soft2();
		}else{
			alert('kies eerst een band');
		}
	}
	soft.onclick = function yesno(){
		hasSoftTire2 = true;
		document.getElementById('titel').innerHTML = 'Je hebt de soft band gekozen';
		document.getElementById('een').style.cssText = 'background-color: #b70000;';
		document.getElementById('twee').style.cssText = 'display: none;';
	}
	supersoft1.onclick = function yesno1(){
		hasSuperSoftTire2 = true;
		document.getElementById('titel').innerHTML = 'Je hebt de supersoft band gekozen';
		document.getElementById('twee').style.cssText = 'background-color: #b70000;';
		document.getElementById('een').style.cssText = 'display: none;';
	}
}
//function Soft2{
//
//}
function supersoft(){
	document.getElementById('titel').innerHTML = 'Je bent de snelste in het veld en je weet nog de 2e plaats te bemachtigen';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var volgende = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:racefinish1();");
}
function racefinish1(){
	document.getElementById('titel').innerHTML = 'Je bent 2e geworden en dus ben je wereldkampioen!';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var opnieuw = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	opnieuw.innerHTML = 'Opnieuw starten';
	opnieuw.setAttribute("onClick", "javascript:level1();");	
}
function Soft2(){
	document.getElementById('titel').innerHTML = 'Je bent sneller als de rest, maar je weet niemand meer in te halen en je wordt 3e';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var volgende = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	volgende.innerHTML = 'Volgende';
	volgende.setAttribute("onClick", "javascript:racefinish2();");
}
function racefinish2(){
	document.getElementById('titel').innerHTML = 'Je bent 3e geworden en dus ben je wereldkampioen 2e in het kampioenschap geworden';
	var verberg = document.getElementById('een');
	var verberg1 = document.getElementById('twee');
	var opnieuw = document.getElementById('start-knop');
	verberg.style.cssText = 'display: none;';
	verberg1.style.cssText = 'display: none;';
	opnieuw.innerHTML = 'Opnieuw starten';
	opnieuw.setAttribute("onClick", "javascript:level1();");	
}