//Calcula si una cadena de texto es un palindrome
//Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda
function palindrome(texto) {
    // Compruebo si "text" es un string
    if (typeof texto === "string") {
        

        const accents = 'áeíóú';
        const vowels ='aeiuo'
        let formattedText = texto.toLowerCase().replaceAll(' ', '');

        // Recorro la cadena de texto
        for ( let index=0;index < formattedText.length;index++) {
            const firtIndex = index
            const lastIndex = formattedText.length - index -1;
            // si el indice inicial a sobrepasado el posterior
            // hemos terminado: es un palindrome!!
            if (firtIndex <= lastIndex){
                return true;
            }
            
            if (formattedText.charAt(firtIndex) !== formattedText.charAt(lastIndex)) {
                return false;

            }
        }

        return true;

    }

    return false;
}
console.log(palindrome("dabale arroz a la zorra el abad"));