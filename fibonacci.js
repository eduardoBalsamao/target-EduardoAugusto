function fibonacci(num) {
    // se o valor passado é ou 0 ou 1, é preciso retornar o valor passado
    if (num < 2) {
        return num
    }
    // aqui entra a recursão propriamente dita
    return fibonacci(num - 1) + fibonacci(num - 2)
}

function verifica(num) {
    var contador = 0;
    while (contador < num) {
        if (fibonacci(contador) == num) {
            console.log("Está na sequencia")
            return
        }
        contador++;
    }
    console.log("Não está na sequencia")
}

verifica(22)