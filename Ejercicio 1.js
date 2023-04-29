function piramide(num){

    for (let i=1; i <=num; i++){
        fila=' '
        for(let j=1; j<=i; j++){
            fila+=j
        }
        console.log(fila);

    }
}

piramide(6);
piramide(3);