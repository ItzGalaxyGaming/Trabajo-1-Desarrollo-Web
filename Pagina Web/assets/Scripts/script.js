// Asigna un numero aleatorio (del 1 al 10) a cada carta de la mano
let cartaNumero = [
    Math.floor(Math.random()* 10) + 1,
    Math.floor(Math.random()* 10) + 1,
    Math.floor(Math.random()* 10) + 1,
    Math.floor(Math.random()* 10) + 1,
    Math.floor(Math.random()* 10) + 1
]; 

// Puntaje de cada carta en mano
let puntajeCarta = [0, 0, 0, 0, 0];

// Lee las ids de cada carta en mano
let cartaImg = [
    document.getElementById("cartaImg1"),
    document.getElementById("cartaImg2"),
    document.getElementById("cartaImg3"),
    document.getElementById("cartaImg4"),
    document.getElementById("cartaImg5")
];

// Revisa el numero de cada carta para asignarle su respectiva imagen
for(var i = 0; i < cartaNumero.length; i++)
{
    switch(cartaNumero[i])
    {
        case 1:
            cartaImg[i].src = "assets/Images/Carta1.png";
            break;
        case 2:
            cartaImg[i].src = "assets/Images/Carta2.png";
            break;
        case 3:
            cartaImg[i].src = "assets/Images/Carta3.png";
            break;
        case 4:
            cartaImg[i].src = "assets/Images/Carta4.png";
            break;
        case 5:
            cartaImg[i].src = "assets/Images/Carta5.png";
            break;
        case 6:
            cartaImg[i].src = "assets/Images/Carta6.png";
            break;
        case 7:
            cartaImg[i].src = "assets/Images/Carta7.png";
            break;
        case 8:
            cartaImg[i].src = "assets/Images/Carta8.png";
            break;
        case 9:
            cartaImg[i].src = "assets/Images/Carta9.png";
            break;
        case 10:
            cartaImg[i].src = "assets/Images/Carta10.png";
            break;
    }
}

// Lee la cantidad de cartas que se juega cada una
let cantidadCarta = [
    document.querySelector("#cantidadCarta"),
    document.querySelector("#cantidadCarta2"),
    document.querySelector("#cantidadCarta3"),
    document.querySelector("#cantidadCarta4"),
    document.querySelector("#cantidadCarta5")
]

// Transforma la cantidad de texto a numero
let cantidadCartaNum = [
    Number(cantidadCarta[0].innerHTML),
    Number(cantidadCarta[1].innerHTML),
    Number(cantidadCarta[2].innerHTML),
    Number(cantidadCarta[3].innerHTML),
    Number(cantidadCarta[4].innerHTML)
]

// Funcion que cambia la cantidad de cartas que se juega por la carta que se jugo, si el resultado es menor que 0 este lo transforma 0
function cambiarCantidadCarta(cantidad, carta)
{
    for(var i = 0; i < cartaNumero.length; i++)
    {
        if(carta = i + 1)
        {
            cantidadCartaNum[i] = cantidadCartaNum[i] + Number(cantidad);
            if(cantidadCartaNum[i] < 0)
            {
                cantidadCartaNum[i] = 0;
            }
            cantidadCarta[i].innerHTML = cantidadCartaNum[i];
            calculoPuntajeCarta(carta);
        }
    }
}

// Calcula el puntaje total de la carta jugada multiplicando los puntos que da con la cantidad que se va a jugar
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

// Calcula el puntaje total sumando el puntaje de cada carta
function calculo()
{
    total = puntajeCarta[0] + puntajeCarta[1] + puntajeCarta[2] + puntajeCarta[3] + puntajeCarta[4]
    mostrar()
}

// Pasa el puntaje total hacia el texto para mostrarlo en el web
function mostrar()
{
    let resultado = document.querySelector(".puntaje-total")
    
    resultado.innerHTML = total.toLocaleString()
}