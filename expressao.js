//declaração de função

function minhaFuncao (param) {
    //bloco de código 
}

minhaFuncao( "param" )

//expressão de função


//console.log(soma(1, 1))
//diferença principal: HOISTING
//funções e var são "listadas" no topo

// diferença principal ?????

console.log(apresentar())

function apresentar() {
    return "olá";
}

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))