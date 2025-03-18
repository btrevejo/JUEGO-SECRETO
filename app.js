let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value) ;

    
    if(numeroUsuario===numeroSecreto){
         asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${ (intentos===1) ? 'vez' : 'veces'} `);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }   else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
     }
return; 
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles'); 
    } else{

          //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();  //Si es así, genera un nuevo número hasta que no este en la lista.  //Si no lo está, lo agrega a la lista y devuelve el número generado.  // Este proceso se repite hasta que se genera un número que no se encuentra en la lista.  // Este es un ejemplo de un algoritmo de generación de números aleatorios y control de repeticiones.  // Este algoritmo es efectivo para este caso, pero no es el más eficiente en todos los casos.  // En general, es recomendable usar librerías o frameworks que tengan funciones para generar números aleatorios y controlar repeticiones.  // Por ejemplo, JavaScript tiene Math.random() y Array.prototype.includes().  // También hay librerías como lo
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja(); 
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales(); 
