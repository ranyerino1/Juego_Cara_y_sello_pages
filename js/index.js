//acceder al elemento con id cara, sello y al elemnto body
let cara = document.getElementById("eleccionCara")
let sello = document.getElementById("eleccionSello")
//declaracion de eleccion para saber cual fue la eleccion del jugadr si cara o sello
let eleccion, partidas=0, ganancia=0, seguir, total=0;
//declaracion de variable para saber cuanto quiere apostar el jugador
alert("Bienvenido a la simulacion de juego cara y sello esperamos sea de su agrado")
let apuesta = prompt("ingrese la cantidad que desea apostar")
apuesta = parseInt(apuesta)

while (apuesta <= 0) {
    apuesta = prompt("ingrese la cantidad que desea apostar")
}

alert("elija cara o sello para la apuesta")

cara.addEventListener("click",() =>{
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(moneda)
    eleccion = 1
//serie de condicionales para determinar que mensaje mostrarle al jugador dependiendo de s i gano perdio y tambien de su valor total de dinero
    if (eleccion == moneda) {
        ganancia = apuesta * 2  
            if (total < 0) {
            total = total + apuesta
            alert(`felicidades ganaste tu deuda disminuye a ${Math.abs(total)} tu eleccion fue
cara y la de la maquina fue cara`)
        }
        total = total + ganancia
            alert(`felicidades ganaste ${ganancia} y tu total de dinero es de ${total} tu eleccion fue
cara y la de la maquina fue cara`); 
    }else if (eleccion != moneda) {
        total = total - apuesta
        if (total < 0) {
            alert(`lo sentimos nos debes ${Math.abs(total)} tu eleccion fue 
cara y la de la maquina sello`);
        }else if (ganancia >= 0 ) {
            alert(`lo sentimos perdiste tu valor es de  ${total} tu eleccion fue 
cara y la de la maquina sello`);
        }
    }
    partidas = partidas+1
    console.log(partidas);
    seguir = prompt("desea jugar de nuevo escriba si o no")
//condicional para saber si el judaor digito que no queria jugar mas mostrarle las partidas totales el dinero total de si debe o cuando acumulo y se reincian las variables a 0
    if (seguir == "no") {
        if (total < 0) {
            alert(`las veces jugadas fueron ${partidas} nos debes en total ${Math.abs(total)},
Gracias por jugar hasta pronto`)
        }else if (total > 0) {
            alert(`las veces jugadas fueron ${partidas} la cantidad de dinero total es de ${total},
Gracias por jugar hasta pronto`)   
        }
        total = 0
        partidas = 0
        apuesta = 0
    }
    
})

sello.addEventListener("click", () =>{
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(moneda)
    eleccion = 2
    partidas = partidas+1
    //serie de condicionales para determinar que mensaje mostrarle al jugador dependiendo de s i gano perdio y tambien de su valor total de dinero

    if (eleccion == moneda) {
        ganancia = apuesta * 2  
            if (total < 0) {
            total = total + apuesta
            alert(`felicidades ganaste tu deuda disminuye a ${Math.abs(total)} tu eleccion fue
Sello y la de la maquina fue Sello`)
        }
        total = total + ganancia
            alert(`felicidades ganaste ${ganancia} y tu total de dinero es de ${total} tu eleccion fue
Sello y la de la maquina fue Sello`); 
    }else if (eleccion != moneda) {
        total = total - apuesta
        if (total < 0) {
            alert(`lo sentimos nos debes ${Math.abs(total)} tu eleccion fue 
Sello y la de la maquina sello`);
        }else if (ganancia >= 0 ) {
            alert(`lo sentimos perdiste tu valor es de  ${total} tu eleccion fue 
Sello y la de la maquina sello`);
        }
    }
    console.log(partidas);
    seguir = prompt("desea jugar de nuevo escriba si o no")
    //condicional para saber si el judaor digito que no queria jugar mas mostrarle las partidas totales el dinero total de si debe o cuando acumulo y se reincian las variables a 0
    if (seguir == "no") {
        if (total < 0) {
            alert(`las veces jugadas fueron ${partidas} nos debes en total ${Math.abs(total)},
Gracias por jugar hasta pronto`)
        }else if (total > 0) {
            alert(`las veces jugadas fueron ${partidas} la cantidad de dinero total es de ${total},
            Gracias por jugar hasta pronto`)   
        }
        total = 0
        partidas = 0
        apuesta = 0
    }
}) 
console.log(partidas);