/**
 * Fase1 - Ejercico de Noms Ciutats en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

let ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6
let formulario = document.formulario
let impresF1 = false
let ciudadesPermitidas = new Map();

ciudadesPermitidas.set("Santander", 0);
ciudadesPermitidas.set("Barcelona", 0);
ciudadesPermitidas.set("Valencia", 0);
ciudadesPermitidas.set("Cadis", 0);
ciudadesPermitidas.set("Malaga", 0);
ciudadesPermitidas.set("Madrid", 0);


var respostaFase1 = function(){

  let selectElement = document.getElementById('fase1Sortida')

  if (impresF1) {}
  else {
	

    let impresF1 = true

	let ciutat1 = document.formulario.ciutat1.value
	let ciutat2 = document.formulario.ciutat2.value
	let ciutat3 = document.formulario.ciutat3.value
	let ciutat4 = document.formulario.ciutat4.value	
	let ciutat5 = document.formulario.ciutat5.value
	let ciutat6 = document.formulario.ciutat6.value
	
	//Ciutat 1
	
	/*
	 * Según se complenten los campos con nombres correctos del MAP y una vez se pulsa
	 * el botón Fase1, se deshabilitan éstos.
	 * 
	 *  se comprueba si lo que se teclea está en el MAP y si ya ha sido escrita o no.
	 *  En caso que no esté o ya esté puesta, se borra el campo.
	 */
	
	if (document.formulario.ciutat1.disabled == true) {}
	else  {
	 if (ciudadesPermitidas.has(ciutat1)) {
		if (ciudadesPermitidas.get(ciutat1) >=1){
			document.formulario.ciutat1.value=""
			ciudadesPermitidas.set(ciutat1, 0)
		}
	    else{
	    	ciudadesPermitidas.set(ciutat1, 1) 
	    	document.formulario.ciutat1.disabled=true
	    }
		}
	 else {
		document.formulario.ciutat1.value="" 
	 }
	}
	
	//Ciutat 2

	if (document.formulario.ciutat2.disabled == true) {}
	else  {
	 if (ciudadesPermitidas.has(ciutat2)) {
		if (ciudadesPermitidas.get(ciutat2) >=1){
			document.formulario.ciutat2.value=""
			ciudadesPermitidas.set(ciutat2, 0)
		}
	    else{
	    	ciudadesPermitidas.set(ciutat2, 1) 
	    	document.formulario.ciutat2.disabled=true
	    }
		}
	 else {
		document.formulario.ciutat2.value="" 

	 }
	}

	//Ciutat 3

	if (document.formulario.ciutat3.disabled == true) {}
	else  {
	 if (ciudadesPermitidas.has(ciutat3)) {
		if (ciudadesPermitidas.get(ciutat3) >=1){
			document.formulario.ciutat3.value=""
			ciudadesPermitidas.set(ciutat3, 0)
		}
	    else{
	    	ciudadesPermitidas.set(ciutat3, 1) 
	    	document.formulario.ciutat3.disabled=true
	    }
		}
	 else {
		document.formulario.ciutat3.value="" 

	 }
	}

	//Ciutat 4

	if (document.formulario.ciutat4.disabled == true) {}
	else  {
	 if (ciudadesPermitidas.has(ciutat4)) {
		if (ciudadesPermitidas.get(ciutat4) >=1){
			document.formulario.ciutat4.value=""
			ciudadesPermitidas.set(ciutat4, 0)
		}
	    else{
	    	ciudadesPermitidas.set(ciutat4,1) 
	    	document.formulario.ciutat4.disabled=true
	    }
		}
	 else {
		document.formulario.ciutat4.value="" 

	 }
	}
	//Ciutat 5

	if (document.formulario.ciutat5.disabled == true) {}
	else  {
	 if (ciudadesPermitidas.has(ciutat5)) {
		if (ciudadesPermitidas.get(ciutat5) >=1){
			document.formulario.ciutat5.value=""
			ciudadesPermitidas.set(ciutat5, 0)
		}
	    else{
	    	ciudadesPermitidas.set(ciutat5,1) 
	    	document.formulario.ciutat5.disabled=true
	    }
		}
	 else {
		document.formulario.ciutat5.value="" 

	 }
	}

	//Ciutat 6

	
	if (document.formulario.ciutat6.disabled == true) {}
	else  {
	 if (ciudadesPermitidas.has(ciutat6)) {
		if (ciudadesPermitidas.get(ciutat6) >=1){
			document.formulario.ciutat6.value=""
			ciudadesPermitidas.set(ciutat6, 0)
		}
	    else{
	    	ciudadesPermitidas.set(ciutat6, 1) 
	    	document.formulario.ciutat6.disabled=true
	    }
		}
	 else {
		document.formulario.ciutat6.value="" 

	 }
	}

	// Si todos los campos están deshabilitados es que ya tenemos los campos bien cumplimentados y se imprimen.
	
	if (document.formulario.ciutat1.disabled == true && document.formulario.ciutat2.disabled == true
			&& document.formulario.ciutat3.disabled == true  && document.formulario.ciutat4.disabled == true
			 && document.formulario.ciutat5.disabled == true  && document.formulario.ciutat6.disabled == true)
		{
			selectElement.innerHTML += "Listado ciudades:  "
			selectElement.innerHTML += ciutat1 + ", " + ciutat2  + ", " + ciutat3  + ", " + ciutat4  + ", " + ciutat5  + ", " + ciutat6+" "
			document.getElementById('1').disabled = true
		}
	else 
		alert("Fase1 -> Rellena los cuadros de texto con nombres de ciudades registradas sin repetir")
  }
}

		
// Nos aseguramos de cargar todo el JS al cargar el document html.

if (document.addEventListener){
	    window.addEventListener('load',(function() {
	    	document.getElementById('1').onclick = respostaFase1;
	    }),false);
	    
} else {
	    window.attachEvent('onload',(function() {
	    	document.getElementById('1').onclick = respostaFase1;
	    }));    
}
