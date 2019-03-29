/**
 * 
 * Implementar un método que acepte 3 valores enteros a, b, c. 
 * El método debería devolver verdadero si un triángulo puede construirse 
 * con los lados de una longitud dada y falso en cualquier otro caso.
 * (En este caso, todos los triángulos deben tener una superficie mayor que 0 
 * para ser aceptados).
 */

/*function isTriangle(a,b,c)
{
  if (a || b || c  > 0)
  return true
}*/

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}