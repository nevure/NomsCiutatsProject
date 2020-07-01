/**
 * Fase4 - Ejercico de Noms Ciutats
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
package NomsCiutatsJava;

import java.util.Arrays;

public class Fase4 {
	
	private char[] ciutat1;
	private char[] ciutat2;
	private char[] ciutat3;
	private char[] ciutat4;
	private char[] ciutat5;
	private char[] ciutat6;
	
	/*
	 * Método que inicializa los arrays de caacteres a la longitud de cada población 
	 * introducida. 
	 */
	private void nousArray(Fase3 fase3) {
		
		byte i=0;
		ciutat1 = new char[(fase3.getArrayCiutat()[0].length())];
		ciutat2 = new char[(fase3.getArrayCiutat()[1].length())];
		ciutat3 = new char[(fase3.getArrayCiutat()[2].length())];
		ciutat4 = new char[(fase3.getArrayCiutat()[3].length())];
		ciutat5 = new char[(fase3.getArrayCiutat()[4].length())];
		ciutat6 = new char[(fase3.getArrayCiutat()[5].length())];

		//Letra a letra agregamos el nombre de la ciudad (string) al array de char.
		
		for (char caracter: ciutat1 ) {
			ciutat1[i]= fase3.getArrayCiutat()[0].charAt(i);
			i++;
		}
		
		i=0;
		for (char caracter: ciutat2 ) {
			ciutat2[i]= fase3.getArrayCiutat()[1].charAt(i);
			i++;
		}
		
		i=0;
		for (char caracter: ciutat3 ) { 
			ciutat3[i]= fase3.getArrayCiutat()[2].charAt(i);
			i++;
		}
		
		i=0;
		for (char caracter: ciutat4 ) { 
			ciutat4[i]= fase3.getArrayCiutat()[3].charAt(i);
			i++;
		}	
		i=0;
		for (char caracter: ciutat5 ) {
			ciutat5[i]= fase3.getArrayCiutat()[4].charAt(i);
			i++;
		}
		
		i=0;
		
		for (char caracter: ciutat6 ) { 
			ciutat6[i]= fase3.getArrayCiutat()[5].charAt(i);
		i++;
		}
	}
	
	
	protected void fase4Print(Fase3 fase3) {

		nousArray(fase3);
		
		printArrayInvertido(ciutat1);
		printArrayInvertido(ciutat2);
		printArrayInvertido(ciutat3);
		printArrayInvertido(ciutat4);
		printArrayInvertido(ciutat5);
		printArrayInvertido(ciutat6);

		
	
	}
	
	/*
	 * Método que invierte un array de char por medio de una iteración 'for'
	 */
	public static void printArrayInvertido(char[] array ) {
		for (int i = array.length-1; i >= 0 ; i--){
		    System.out.print(array[i]);
		}
		System.out.println();
		
    }
}
