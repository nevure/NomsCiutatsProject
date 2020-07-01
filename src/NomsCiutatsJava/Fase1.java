/**
 * Fase1 - Ejercico de Noms Ciutats
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

package NomsCiutatsJava;

import java.util.Scanner;

public class Fase1 {
	
	private String ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6;
    private Scanner lector = new Scanner(System.in);
    private Utilidades verificacion = new Utilidades();
    
    
    //Método que lee de consola y devuelve el string introducido
    
	private String leerDeConsola() {
		
		String entrada;
		
		System.out.print("Introduce el nombre de una ciudad: ");
		entrada = lector.nextLine();
		
		return entrada;
			
	}
	
	/* 
	 * Método que guarda la entrada de datos por consola en las variables correspondientes.
	 * Llama al método verificaDades(string) para comprobar si la entrada es errónea o cumple
	 * los requisitos. En caso de no cumplir se pide de nuevo la introducción por consola hasta cumplir.
	 */
	
	/*
	 * Método que controla la entrada de datos llamando al método verificador.
	 */
	
	private void entradaDeDades () {
		
		do {
			ciutat1 = this.leerDeConsola();
		} while (!verificaDades(ciutat1));
		
		do {
			ciutat2 = this.leerDeConsola();
		} while (!verificaDades(ciutat2));
		do {
			ciutat3 = this.leerDeConsola();
		} while (!verificaDades(ciutat3));
		do {
			ciutat4 = leerDeConsola();
		} while (!verificaDades(ciutat4));
		do {
			ciutat5 = this.leerDeConsola();
		} while (!verificaDades(ciutat5));
		do {
			ciutat6 = this.leerDeConsola();
		} while (!verificaDades(ciutat6));
		
				
		this.cierraEntrada();
		
	}
	
	// Verifica si la entrada de datos cumple los requisitos llamando a métodos de la clase Utilidades. 
	
	private boolean verificaDades(String ciutat) {
		
		if (!verificacion.estaElemento(ciutat))
			System.out.println("No es un nombre de Ciudad reglamentario. Vuelve a introducir un nombre.");
		else if (verificacion.esRepetido(ciutat))
			System.out.println("Ya has puesto esa ciudad. Vuelve a probar");
		else 
		{
			verificacion.elementoPresente(ciutat);
			return true;
		}
		return false;
	}

	//cierra el stream
	
	private void cierraEntrada() {
		
		lector.close();
	}
	
	//Getters de las variables ciutatX. Los utiliza la Fase2
	
	protected String getCiutat1() {
		return ciutat1;
		
	}
	protected String getCiutat2() {
		return ciutat2;
		
	}
	protected String getCiutat3() {
		return ciutat3;
		
	}
	protected String getCiutat4() {
		return ciutat4;
		
	}
	protected String getCiutat5() {
		return ciutat5;
		
	}
	protected String getCiutat6() {
		return ciutat6;
	}
		
	

	// Imprime por consola el listado introducido.
	
	protected void fase1Print () {

		this.entradaDeDades();
		System.out.println("Valors de les variables de ciutat");
		
		System.out.println("ciutat 1 = " + ciutat1 );
		System.out.println("ciutat 2 = " + ciutat2 );
		System.out.println("ciutat 3 = " + ciutat3 );
		System.out.println("ciutat 4 = " + ciutat4 );
		System.out.println("ciutat 5 = " + ciutat5 );
		System.out.println("ciutat 6 = " + ciutat6 );

		
	}
}
