function calcularMedia(nota1, nota2, nota3){
let media = ((nota1 * 3) + (nota2 * 3) +(nota3 * 4)) / 10;
let resultado = "Sua média foi: " + media; 

if (media >= 7) { 
    return resultado + " Voce foi aprovado.";
    } else {
         return resultado + " Voce foi Reprovado.";
}
}

console.log(calcularMedia(7, 7, 7, 7))
