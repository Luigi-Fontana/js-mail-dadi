/*
Chiedi all’utente la sua email
Controlla che sia nella lista di chi può accedere
Stampa un messaggio appropriato
*/

// Costruzione della lista di mail accettate
// Prompt per inserimento mail
// Messaggio di benvenuto o no

var listMail = [
    'mario@rossi.it',
    'luca@verdi.it',
    'matteo@bianchi.it',
    'marco@gialli.it',
    'silvia@galli.it',
    'lucia@corti.it'
];

var validMail = false;
var inputMail = prompt('Inserisci la tua mail per accedere');
for (var i = 0; i < listMail.length; i++) {
    if (inputMail == listMail[i]) {
        validMail = true;
    }
}

if (validMail == true) {
    document.getElementById('vero').innerHTML = 'Benvenuto! La mail "' + inputMail + '" fa parte della lista delle mail abilitate';
    document.getElementById('es-mail').setAttribute('class', 'visible');
} else {
    document.getElementById('falso').innerHTML = 'Siamo spiacenti ma la mail "' + inputMail + '" non è inserita nella lista delle mail abilitate';
    document.getElementById('es-mail').setAttribute('class', 'visible');
}
