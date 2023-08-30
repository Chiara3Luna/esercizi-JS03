function contaCifre(numero) {
    const numeroStringa = String(numero);
    const numeroCifre = numeroStringa.length;
    return numeroCifre;
}

console.log(contaCifre(9));  // Output: 1 cifra
console.log(contaCifre(99));  // Output: 2 cifre
