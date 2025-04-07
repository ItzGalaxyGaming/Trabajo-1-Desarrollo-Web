
let cartaNumero = [Math.floor(Math.random()* 10)+ 1,Math.floor(Math.random()* 10) +1,Math.floor(Math.random()* 10) +1,Math.floor(Math.random()* 10) +1,Math.floor(Math.random()* 10) +1]; 

let puntajeCarta = [0, 0, 0, 0, 0]



var cantidadCarta = document.querySelector("#cantidadCarta");
var cantidadCartaNum = Number(cantidadCarta.innerHTML);

var cantidadCarta2 = document.querySelector("#cantidadCarta2");
var cantidadCartaNum2 = Number(cantidadCarta2.innerHTML);

var cantidadCarta3 = document.querySelector("#cantidadCarta3");
var cantidadCartaNum3 = Number(cantidadCarta3.innerHTML);

var cantidadCarta4 = document.querySelector("#cantidadCarta4");
var cantidadCartaNum4 = Number(cantidadCarta4.innerHTML);

var cantidadCarta5 = document.querySelector("#cantidadCarta5");
var cantidadCartaNum5 = Number(cantidadCarta5.innerHTML);

function cambiarCantidadCarta(cantidad, carta)
{
    
    switch(carta)
    {
        case 1:
            cantidadCartaNum = cantidadCartaNum + Number(cantidad);
            if(cantidadCartaNum < 0)
            {
                cantidadCartaNum = 0;
            }
            cantidadCarta.innerHTML = cantidadCartaNum;
            calculoPuntajeCarta(carta);
            break;
        case 2:
            cantidadCartaNum2 = cantidadCartaNum2 + Number(cantidad);
            if(cantidadCartaNum2 < 0)
                {
                    cantidadCartaNum2 = 0;
                }
            cantidadCarta2.innerHTML = cantidadCartaNum2;
            calculoPuntajeCarta(carta);
            break;
        case 3:
            cantidadCartaNum3 = cantidadCartaNum3 + Number(cantidad);
            if(cantidadCartaNum3 < 0)
                {
                    cantidadCartaNum3 = 0;
                }
            cantidadCarta3.innerHTML = cantidadCartaNum3;
            calculoPuntajeCarta(carta);
            break;
        case 4:
            cantidadCartaNum4 = cantidadCartaNum4 + Number(cantidad);
            if(cantidadCartaNum4 < 0)
                {
                    cantidadCartaNum4 = 0;
                }
            cantidadCarta4.innerHTML = cantidadCartaNum4;
            calculoPuntajeCarta(carta);
            break;
        case 5:
            cantidadCartaNum5 = cantidadCartaNum5 + Number(cantidad);
            if(cantidadCartaNum5 < 0)
                {
                    cantidadCartaNum5 = 0;
                }
            cantidadCarta5.innerHTML = cantidadCartaNum5;
            calculoPuntajeCarta(carta);
            break;

    }

    
    
}

function calculoPuntajeCarta(carta)
{
    switch(carta)
    {
        case 1:

            puntajeCarta[0] = Number(cartaNumero[Number(carta) -1]) * Number(cantidadCartaNum) 
            break;
        case 2:

            puntajeCarta[1] = Number(cartaNumero[Number(carta) -1]) * Number(cantidadCartaNum2) 
            break;
        case 3:
            puntajeCarta[2] = Number(cartaNumero[Number(carta) -1]) * Number(cantidadCartaNum3) 
            break;
        case 4:
            puntajeCarta[3] = Number(cartaNumero[Number(carta) -1]) * Number(cantidadCartaNum4) 
            break;
        case 5:
            puntajeCarta[4] = Number(cartaNumero[Number(carta) -1]) * Number(cantidadCartaNum5) 
            break;
    }

    calculo();
}


function calculo()
{
    total = puntajeCarta[0] + puntajeCarta[1] + puntajeCarta[2] + puntajeCarta[3] + puntajeCarta[4]
    mostrar()
}

function mostrar()
{
    let resultado = document.querySelector(".puntaje-total")
    
    resultado.innerHTML = total.toLocaleString()
}