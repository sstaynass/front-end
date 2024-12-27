/*Faça um algoritmo que calcule o fatorial de um número. */
function calculaFatorial(numero) {
    if (numero == 0){
        return 1
    } else {
        return numero * calculaFatorial(numero - 1)
    }
}

console.log(calculaFatorial(5))