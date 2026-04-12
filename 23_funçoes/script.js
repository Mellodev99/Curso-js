function primeiraFunçao(){
    console.log("Olá, eu sou a primeira função!");
}

primeiraFunçao();

function dizerNome(nome){

    console.log("Olá, meu nome é " + nome);

}


dizerNome("Luan");
dizerNome("Maria");
dizerNome("João");

var nomeDoBancoDeDados = "Luan";

dizerNome(nomeDoBancoDeDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);
