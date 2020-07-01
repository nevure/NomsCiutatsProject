/**
 * Fase4 - Ejercico de Noms Ciutats en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

let impresF4 = false


var respostaFase4 = function(){
	let selectElement = document.getElementById('fase4Sortida')
	/*var ciutat_1 = Array(document.formulario.ciutat1.value.length) 
	let ciutat_2 = Array(document.formulario.ciutat2.value.length) 
	let ciutat_3 = Array(document.formulario.ciutat3.value.length) 
	let ciutat_4 = Array(document.formulario.ciutat4.value.length) 
	let ciutat_5 = Array(document.formulario.ciutat5.value.length) 
	let ciutat_6 = Array(document.formulario.ciutat6.value.length) */
	let ciutat_1 = []
	let ciutat_2 = []
	let ciutat_3 = []
	let ciutat_4 = []
	let ciutat_5 = []
	let ciutat_6 = []


	
	selectElement.innerHTML += "<br>Listado del Array Fase4: " 

	if (impresF4) {}
	else {

		impresF4 = true
		let ciutat=""
			
		//let formCiutat = document.formulario.ciutat1.value.split('')
				
		for (let i = 0; i < document.formulario.ciutat1.value.length; i++) {
			  ciutat_1.push((document.formulario.ciutat1.value.charAt(i)));

		}
		
		for (let i = 0; i < document.formulario.ciutat2.value.length; i++) {
			  ciutat_2.push((document.formulario.ciutat2.value.charAt(i)));

		}

		
		for (let i = 0; i < document.formulario.ciutat3.value.length; i++) {
			  ciutat_3.push((document.formulario.ciutat3.value.charAt(i)));

		}
		
		for (let i = 0; i < document.formulario.ciutat4.value.length; i++) {
			  ciutat_4.push((document.formulario.ciutat4.value.charAt(i)));

		}
			
		for (let i = 0; i < document.formulario.ciutat5.value.length; i++) {
			  ciutat_5.push((document.formulario.ciutat5.value.charAt(i)));

		}
		for (let i = 0; i < document.formulario.ciutat6.value.length; i++) {
			  ciutat_6.push((document.formulario.ciutat6.value.charAt(i)));

		}

		selectElement.innerHTML += "<BR> "+ ciutat_1.reverse()
		selectElement.innerHTML += "<BR> "+ ciutat_2.reverse()
		selectElement.innerHTML += "<BR> "+ ciutat_3.reverse()
		selectElement.innerHTML += "<BR> "+ ciutat_4.reverse()
		selectElement.innerHTML += "<BR> "+ ciutat_5.reverse()
		selectElement.innerHTML += "<BR> "+ ciutat_6.reverse()


	
		document.getElementById('4').disabled = true

	
	}
}

//Nos aseguramos de cargar todo el JS al cargar el document html.


if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('4').onclick = respostaFase4;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('4').onclick = respostaFase4;
    }));    
}