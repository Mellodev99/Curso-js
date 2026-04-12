
// parece struct do c, mas é um objeto literal do js
var obj = {
    nome: "Luan",
    idade: 20,
    profissao: "programador"
};

console.log(obj);

console.log(typeof obj); 

// acessar as propriedades do objeto
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("Meu nome é " + obj.nome + "!");

obj.nome = "Maria"; // alterando o valor da propriedade nome
console.log(obj.nome);

obj.graduacao = true;

console.log(obj);