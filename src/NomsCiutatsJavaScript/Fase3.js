/**
 * Fase3 - Ejercico de Noms Ciutats en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

let impresF3 = false


var respostaFase3 = function(){
	let selectElement = document.getElementById('fase3Sortida')
    let arrayCiutatsModificades = []

	if (impresF3) {}
	else {

		impresF3 = true
		let ciutat=""
		//Obtenemos los Strings de los propios campos del formulario.
		
		let formulario = document.formulario
		
		let arrayCiutats = [document.formulario.ciutat1.value, document.formulario.ciutat2.value, document.formulario.ciutat3.value, document.formulario.ciutat4.value, document.formulario.ciutat5.value, document.formulario.ciutat6.value]
		
		//Con el método replace, intercmabiamos caracteres del array
		
		arrayCiutats.forEach(element => {
			arrayCiutatsModificades.push(element.replace("a","4"))
			
		})

		selectElement.innerHTML += "<br>Listado del Array Fase 3: "

		arrayCiutatsModificades.sort().forEach(element => selectElement.innerHTML += element + ", ")
		document.getElementById('3').disabled = true

	
	
	}
}



//Nos aseguramos de cargar todo el JS al cargar el document html.


if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('3').onclick = respostaFase3;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('3').onclick = respostaFase3;
    }));    
}