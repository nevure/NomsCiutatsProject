/**
 * Ejercico de Noms Ciutats . Clase Utilidades
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
package NomsCiutatsJava;

import java.util.HashMap;

/* utilizaremos esta clase para almacenar en un hashmap el par <String, boolean> donde el boolean
 * nos dirá si el elemento ha sido utilizado
 */

public class Utilidades {
	
	private HashMap<String, Boolean> elementosPresentes = new HashMap<String, Boolean>();
	
	//Constructor de clase. Guardamos los elementos, aunque se podría generalizar pasándolos por parámetros.
	
	public Utilidades() {
		elementosPresentes.put("Barcelona", false);
		elementosPresentes.put("Madrid", false);
		elementosPresentes.put("Valencia", false);
		elementosPresentes.put("Malaga", false);
		elementosPresentes.put("Cadis", false);
		elementosPresentes.put("Santander", false);
			
	}
	
	/* Constructor con parámetros. Aunque no es necesario en el ejercicio se muestra como quedaría 
	* ya que facilita generalizar esta clase a otros problemas.
	*/
	public Utilidades(String el1, String el2, String el3, String el4, String el5, String el6) {
		elementosPresentes.put(el1, false);
		elementosPresentes.put(el2, false);
		elementosPresentes.put(el3, false);
		elementosPresentes.put(el4, false);
		elementosPresentes.put(el5, false);
		elementosPresentes.put(el6, false);
	
	}
	
	//Verifica si el elemento existe como key en el hashmap
	
	protected boolean estaElemento(String elemento) {
		 if (elementosPresentes.containsKey(elemento))
			 return true;
		 return false;	 
		
	}
	
	//Verifica si el elemento key en el hashmap está a true en value.

	protected boolean esRepetido (String elemento) {
		if (elementosPresentes.get(elemento))
			return true;
		return false;
		
	}
	
	//Pone a true el valor del key=elemento
	
	protected void elementoPresente (String elemento) {
		elementosPresentes.put(elemento,  true);
	}
	
	
}
