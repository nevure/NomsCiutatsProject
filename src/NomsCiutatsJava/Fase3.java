/**
 * Fase3 - Ejercico de Noms Ciutats
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
package NomsCiutatsJava;

import java.util.Arrays;

public class Fase3 {
	
	private String[] arrayCiutatsModificades = new String[6];
	private String[] arrayCiutats;
	
	/*
	 * Constructor. Inicializamos el array con llamada al getter de la Fase2
	 */
	protected Fase3(Fase2 fase2) {
		arrayCiutats = fase2.getArrayCiutat();
		
	}
	
	/*
	 * Modificamos array sustituyendo el carácter 'a' por el '4' 
	 */
	private void nouArray() {
		
		byte i=0;
		
		for (String nomCiutat: arrayCiutats) {
			arrayCiutatsModificades[i] = nomCiutat.replace('a', '4');
			i++;
		}
	}

	/*
	 * Imprime por pantalla el nuevo array y ordenado.
	 */
	protected void fase3Print() {
		
		nouArray();
		
		System.out.println("Listado Ciudades cambiando las 'a' por '4' ");
		Arrays.sort(arrayCiutatsModificades);
		System.out.println(Arrays.deepToString(arrayCiutatsModificades));
		
	}
	
	protected String[] getArrayCiutat() {
		return arrayCiutats;
		
	}
 
}
