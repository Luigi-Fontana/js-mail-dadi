/*
Chiedi all’utente la sua email
Controlla che sia nella lista di chi può accedere
Stampa un messaggio appropriato
*/

// Costruzione della lista di mail accettate
// Prompt per inserimento mail
// Messaggio di benvenuto

var validMail = [
    'mario@rossi.it',
    'luca@verdi.it',
    'matteo@bianchi.it',
    'marco@gialli.it',
    'silvia@galli.it',
    'lucia@corti.it'
];

var inputMail = prompt('Inserisci la tua mail per accedere');
for (var i = 0; i < validMail.length; i++) {
    if (inputMail != validMail[i]) {
        console.log('Benvenuto ' + inputMail);
    }
}
