function verificaLetraA(str) {
    let contador = 0;

    // Itera sobre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            contador++; // Incrementa o contador se encontrar 'a' ou 'A'
        }
    }

    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vezes na string.`;
    } else {
        return `A letra 'a' não foi encontrada na string.`;
    }
}

// Exemplo de uso:
let texto = "JavaScript é uma linguagem de programação maravilhosa!";
console.log(verificaLetraA(texto));
