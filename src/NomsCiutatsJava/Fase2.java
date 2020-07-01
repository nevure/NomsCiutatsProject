/**
 * Fase2 - Ejercico de Noms Ciutats
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
package NomsCiutatsJava;

import java.util.Arrays; 


public class Fase2 {
	
	private String[] arrayCiutat = new String[6];

	/*
	 * A diferencia de anteriores ejercicos donde se copiaba el código necesario en la nueva fase. Aquí
	 * las fases ponen a disposición del resto aquello que les es necesario para realizarse.
	 * En este caso necesitamos los String de las ciudades. 
	 */
	
	protected void llenarArray (Fase1 fase1) {
		arrayCiutat[0] = fase1.getCiutat1();
		arrayCiutat[1] = fase1.getCiutat2();
		arrayCiutat[2] = fase1.getCiutat3();
		arrayCiutat[3] = fase1.getCiutat4();
		arrayCiutat[4] = fase1.getCiutat5();
		arrayCiutat[5] = fase1.getCiutat6();
	}
	
	//Recibimos el objeto de tipo Fase1 utilizado donde obtendremos los nombres de las ciudades.
	
	
	protected void fase2Print (Fase1 fase1) {
		llenarArray(fase1);
		
		System.out.println("Listado Ciudades ");
		Arrays.sort(arrayCiutat);
		System.out.println(Arrays.deepToString(arrayCiutat));
		
	}
	
	//Getter del array. Lo utiliza la Fase3
	
	protected String[] getArrayCiutat() {
		return arrayCiutat;
		
	}

}
