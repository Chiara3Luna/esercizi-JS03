let numbers = [10, 12, 78, -4, -20, 11];

function trovaNumeroMaggiore(array) {
    return Math.max(...array);
}

function trovaNumeroMinore(array) {
    return Math.min(...array);
}

console.log(trovaNumeroMaggiore(numbers)); // Output: 78
console.log(trovaNumeroMinore(numbers)); // Output: -20
