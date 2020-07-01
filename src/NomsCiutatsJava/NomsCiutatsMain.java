/**
 * Ejercico de Noms Ciutats. MAIN
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */


package NomsCiutatsJava;


public class NomsCiutatsMain {

	
	public static void main(String[] args) {
	
		Fase1 fase1 = new Fase1();
		Fase2 fase2 = new Fase2();
		Fase3 fase3 = new Fase3(fase2);
		Fase4 fase4 = new Fase4();

		
		System.out.println("FASE 1------------->");
		fase1.fase1Print();
		
		System.out.println("\nFASE 2------------->");
		fase2.fase2Print(fase1);
		
		System.out.println("\nFASE 3------------->");
		fase3.fase3Print();
		
		
		System.out.println("\nFASE 4------------->");
		fase4.fase4Print(fase3);
	}

}
