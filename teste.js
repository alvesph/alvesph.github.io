function acontece(atraso, limite) {
    let soma = 0;
    for(let i = 0; i < atraso.length; i++) {
        if(atraso[i] <= 0) {
            soma++;
        }
    }
    return soma >= limite;
}

console.log(acontece([10, 0, 15, 3, 20], 2))
