/**
 * (1) Tienes una palabra. Tu trabajo es crear un programa que retorne
 *  la(s) letra(s) del medio de la palabra. Si la extensión de la palabra es impar 
 * retorna solo una letra. Si la extensión de la palabra es par debes retornar 
 * las dos letras que estén en el medio de la palabra.
 *
 *  */


function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
}