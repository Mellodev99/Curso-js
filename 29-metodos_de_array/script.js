// length

var arr =[1,2,3,4,5];

console.log(arr.length);

//push adiciona

arr.push(6);
arr.push("Qualquer coisa");

console.log(arr);

// pop remove itens no fim do array;

arr.pop();

console.log(arr);

//unishift adciona no começo do array;
arr.unshift(0);

console.log(arr);

//shift 
arr.shift();

console.log(arr);

//acessar o ultimo elemento

console.log(arr[arr.length - 1]);

//isArray

console.log(Array.isArray(5));

console.log(Array.isArray(arr));

