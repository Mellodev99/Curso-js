for(var i = 10; i > 0; i--) {

    console.log(i);

    if(i===5){
        break;
    }
}

console.log("Fim do loop");


var x = 10;


while(x < 100) {

    x += 10;
    if(x === 60 || x === 90) {
        console.log("CONTINUE");
        continue;
    }


    console.log("testando loop continue: " + x); // + x é para mostrar o valor de x a cada iteração do loop
}
