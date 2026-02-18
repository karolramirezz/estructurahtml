let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
// todos los pares que esten en array PARES y los que son IMPARES EN OTROS

let pares = [];
let impares = [];

for (let a = 0; a < numeros.length; a++) {
  if (numeros[a] % 2 === 0) {
    pares.push(numeros[a]);
  } else {
    impares.push(numeros[a]);
  }
}

console.log(`Pares ${pares}`);
console.log('')
console.log(`Impares ${impares}`);

document.write(`<br>`)
document.write(`Pares ${pares}`)
document.write(`<br>`)
document.write(`Impares ${impares}`)