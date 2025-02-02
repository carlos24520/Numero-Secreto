let numeroMaximoPosible =10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        alert("Por favor, ingresa un número válido entre 1 y $(numeroMaximoPosible).");
    } else {
        if (numeroUsuario === numeroSecreto) {
            let palabraVeces = intentos === 1 ? 'vez' : 'veces';
            alert(`¡Acertaste! El número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}.`);
            break; // Sale del bucle al acertar
        } else if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }
        intentos++;
        if (intentos > maximosIntentos) {
            alert (`Llegaste al numero maximo de ${maximosIntentos} intentos `);
            break;
        }
    }
}
          
       // alert("Lo siento, no acertaste el numero");
        
        
