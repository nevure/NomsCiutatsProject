/**
 * Fase2 - Ejercico de Noms Ciutats en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

let impresF2 = false


var respostaFase2 = function(){
	let selectElement = document.getElementById('fase2Sortida')

	if (impresF2) {}
	else {

		impresF2 = true
		
		//Obtenemos los Strings de los propios campos del formulario.
		
		let formulario = document.formulario

		let arrayCiutats = [document.formulario.ciutat1.value, document.formulario.ciutat2.value, document.formulario.ciutat3.value, document.formulario.ciutat4.value, document.formulario.ciutat5.value, document.formulario.ciutat6.value]
		

		// Con el método .sort() ordenamos e imprimimos
		
		selectElement.innerHTML += "<br>Listado del Array Fase 2: "
		arrayCiutats.sort().forEach(element => selectElement.innerHTML += element + ", ");
		document.getElementById('2').disabled = true


	
	
	}
}



//Nos aseguramos de cargar todo el JS al cargar el document html.


if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('2').onclick = respostaFase2;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('2').onclick = respostaFase2;
    }));    
}