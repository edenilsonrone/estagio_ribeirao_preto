function fibonacciSequence(limit) {
    let fib = [0, 1]; // Começa a sequência com 0 e 1
    let nextFib = 0;

    while (nextFib <= limit) {
        nextFib = fib[fib.length - 1] + fib[fib.length - 2]; // Soma os dois últimos números da sequência
        fib.push(nextFib); // Adiciona o novo número à sequência
    }

    return fib;
}

function isFibonacci(num) {
    const fibSequence = fibonacciSequence(num); // Gera a sequência de Fibonacci até o número dado

    if (fibSequence.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso:
let numero = 21; // Substitua pelo número que deseja verificar
console.log(isFibonacci(numero));
