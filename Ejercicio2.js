function coincidencia(array1, array2) {
    const resultado = [];
    for (let i = 0; i < array1.length; i++) {
      const elemento = array1[i];
      if (array2.includes(elemento) && !resultado.includes(elemento)) {
        resultado.push(elemento);
      }
    }
    return resultado;
  }
  