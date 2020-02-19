/*
Gioco dei Dadi
chi fa di più vince
*/

// Creare variabile per ottenere numeri random
// Confrontare i due numeri
// Determinare il più alto
document.getElementById('es-dice').setAttribute('class', 'visible');

var dice1 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dice-one').innerHTML = dice1;
var dice2 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dice-two').innerHTML = dice2;

if (dice1 > dice2) {
    document.getElementById('result').innerHTML = 'Player 1 Wins!';
} else if (dice1 == dice2) {
    document.getElementById('result').innerHTML = 'It\'s a Draw!';
} else {
    document.getElementById('result').innerHTML = 'Player 2 Wins!';
}
