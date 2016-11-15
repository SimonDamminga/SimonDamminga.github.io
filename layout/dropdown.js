function Myfunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.lenght; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show'); 
			}
		}
	}
}