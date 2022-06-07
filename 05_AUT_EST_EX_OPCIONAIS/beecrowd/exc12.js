// Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

// Entrada
// A entrada contem três números inteiros.

// Saída
// Imprima a saída conforme foi especificado.
var input = require('fs').readFileSync('stdin', 'utf8');
  const lines = input.split(' ');
  const n1 = parseInt(lines[0]);
  const n2 = parseInt(lines[1]);
  const n3 = parseInt(lines[2]);
  if (n1 < n2 && n1 < n3) {
      console.log(n1);
      if (n2 < n3) {
          console.log(n2);
          console.log(n3 + '\n');
      }
      if (n3 < n2) {
          console.log(n3);
          console.log(n2 + '\n');
      }
  }
  if (n2 < n1 && n2 < n3) {
      console.log(n2);
      if (n1 < n3) {
          console.log(n1);
          console.log(n3 + '\n');
      }
      if (n3 < n1) {
          console.log(n3);
          console.log(n1 + '\n');
      }
  }
  if (n3 < n1 && n3 < n2) {
      console.log(n3);
      if (n1 < n2) {
          console.log(n1);
          console.log(n2 + '\n');
      }
      if (n2 < n1) {
          console.log(n2);
          console.log(n1 + '\n');
      }
  }
  console.log(n1 + '\n' + n2 + '\n' + n3);