console.clear();

function generarArrayAleatorio() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 101));
    }
    return array;
  }
  
  function encontrarNumeroMasBajo(array) {
    return Math.min(...array);
  }
  
  function encontrarNumeroMasAlto(array) {
    return Math.max(...array);
  }
  
  function mostrarResultados(array) {
    console.log('Array generado:', array);
    console.log('Número más bajo:', encontrarNumeroMasBajo(array));
    console.log('Número más alto:', encontrarNumeroMasAlto(array));
  }
  
  // Generar array aleatorio
  const miArray = generarArrayAleatorio();
  
  // Mostrar resultados en la consola
  mostrarResultados(miArray);