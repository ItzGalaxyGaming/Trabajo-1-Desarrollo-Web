var cantidadCarta = document.querySelector("#cantidadCarta");
var cantidadCartaNum = Number(cantidadCarta.innerHTML);

function cambiarCantidadCarta(cantidad)
{
    cantidadCartaNum = cantidadCartaNum + Number(cantidad);
    cantidadCarta.innerHTML = cantidadCartaNum;
}