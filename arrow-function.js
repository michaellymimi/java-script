// arrow =>
function apresentar(nome) {
    return 'meu nome é $(nome)';
}

const apresentarArrow = nome => 'meu nome é $(nome)';
const soma = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão

//operador maior ou igual que 
// >= 
// || (ou) condição